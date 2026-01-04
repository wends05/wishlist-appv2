import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { HomeWishesInputSchema } from "@repo/common/dto";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { wishQueryOptions } from "@/feature/wish/options";
import { useAppForm } from "@/hooks/_formHooks";

const homeRouteApi = getRouteApi("/_home/home");

export default function WishSearchAndFilter() {
  const navigate = homeRouteApi.useNavigate();
  const { data: categories } = useSuspenseQuery(wishQueryOptions.getCategories);

  const form = useAppForm({
    defaultValues: {
      search: "",
      categoryId: "All",
    },
    validators: {
      onSubmit: HomeWishesInputSchema.pick({
        search: true,
        categoryId: true,
      }).required(),
    },
    onSubmit: ({ value }) => {
      navigate({
        search: {
          search: value.search || undefined,
          categoryId: value.categoryId === "all" ? undefined : value.categoryId,
        },
      });
    },
  });

  return (
    <form
      className="flex w-full max-w-lg gap-3 self-center py-5"
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.AppField
        listeners={{
          onChange: () => {
            form.handleSubmit();
          },
          onChangeDebounceMs: 500,
        }}
        name="search"
      >
        {(field) => (
          <Field>
            <InputGroup>
              <InputGroupInput
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Search wishes..."
                value={field.state.value}
              />
              <InputGroupAddon align={"inline-end"}>
                <InputGroupButton>
                  <MagnifyingGlassIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        )}
      </form.AppField>
      <form.AppField
        listeners={{
          onChange: () => {
            form.handleSubmit();
          },
        }}
        name="categoryId"
      >
        {(field) => (
          <field.SelectField
            className="w-1/3"
            items={[
              { label: "All", value: "all" },
              ...categories.map((categories) => ({
                label: categories.name,
                value: categories._id,
              })),
            ]}
            label=""
          />
        )}
      </form.AppField>
    </form>
  );
}
