import { useMutation } from "@tanstack/react-query";
import { useAppForm } from "@/hooks/_formHooks";
import { wishMutationOptions } from "../options";

interface RequestGrantFormProps {
  handleClose: () => void;
  wishId: string;
}

const useRequestGrantForm = ({ wishId, handleClose }: RequestGrantFormProps) => {
  const requestGrantMutation = useMutation(wishMutationOptions.requestGrant(wishId));

  const form = useAppForm({
    defaultValues: {
      message: `I can help you with this. Please let me know the details.`,
    },
    onSubmit: async ({ value }) => {
      console.log(value);

      await requestGrantMutation.mutateAsync(
        { message: value.message },
        {
          onSuccess: handleClose,
        },
      );
    },
  });
  return form;
};
export default function RequestGrantForm({ wishId, handleClose }: RequestGrantFormProps) {
  const form = useRequestGrantForm({ wishId, handleClose });

  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.AppField name="message">
        {(field) => <field.TextField description="Add a short message to send to the person" label="Message" />}
      </form.AppField>
      <form.AppForm>
        <form.SubmitButton />
      </form.AppForm>
    </form>
  );
}
