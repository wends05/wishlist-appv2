import { useFormContext } from "@/hooks/_formHooks";

import { Button } from "../ui/button";
import React from "react";

interface SubmitButtonProps extends React.ComponentProps<"button"> {
  submittingLabel?: string;
  label?: string;
}

export default function SubmitButton({
  submittingLabel,
  label,
  ...rest
}: SubmitButtonProps) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button {...rest} disabled={isSubmitting} type="submit">
          {isSubmitting ? submittingLabel || "Submitting" : label || "Submit"}
        </Button>
      )}
    </form.Subscribe>
  );
}
