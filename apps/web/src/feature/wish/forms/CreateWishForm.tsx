import { CreateWishDTO } from "@repo/common/dto";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import type React from "react";
import { useAppForm } from "@/hooks/_formHooks";
// import { createWishMutationOptions } from "../mutationOptions/createWishMutationOptions";
import { wishMutationOptions, wishQueryOptions } from "../options";

interface CreateWishProps {
  firstCategoryId: string;
}

const useCreateWish = ({ firstCategoryId }: CreateWishProps) => {
  const createWishMutation = useMutation(wishMutationOptions.createWish());

  const defaultValues = {
    categoryId: firstCategoryId,
    description: "",
    name: "",
  };

  const form = useAppForm({
    defaultValues,
    validators: {
      onSubmit: CreateWishDTO,
    },
    onSubmit: async ({ value, formApi }) => {
      console.log(value);
      const data = CreateWishDTO.parse(value);
      await createWishMutation.mutateAsync(data);
      formApi.reset();
    },
  });

  return form;
};

export default function CreateWishForm({ firstCategoryId }: CreateWishProps) {
  const { data: categories } = useSuspenseQuery(wishQueryOptions.getCategories);
  const form = useCreateWish({
    firstCategoryId,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <form.AppField name="name">
        {(field) => <field.TextField description="The name of your wish." label="Name" />}
      </form.AppField>
      <form.AppField name="description">
        {(field) => (
          <field.TextareaField
            description={`Add a short description of your wish. ${
              CreateWishDTO.shape.description.minLength || 0
            } words minimum `}
            label="Description"
          />
        )}
      </form.AppField>
      <form.AppField name="categoryId">
        {(field) => (
          <field.SelectField
            items={categories.map((cat) => ({
              label: cat.name,
              value: cat._id,
            }))}
            label="Category"
          />
        )}
      </form.AppField>
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  );
}
