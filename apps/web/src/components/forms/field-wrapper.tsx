import { useFieldContext } from "@/hooks/_formHooks";
import type FieldWrapperProps from "@/types/FieldWrapperProps";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";

export default function FieldWrapper({
  label,
  description,
  descriptionPosition = "bottom",
  children,
  ...props
}: React.PropsWithChildren<FieldWrapperProps>) {
  // We grab context here primarily to access errors and the field name for the label
  const field = useFieldContext();

  const descriptionComponent = description ? <FieldDescription>{description}</FieldDescription> : null;

  return (
    <Field {...props}>
      {/* Label always stays at the top */}
      {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}

      {/* Render description here if position is top */}
      {descriptionPosition === "top" && descriptionComponent}

      {/* The Input component goes here */}
      {children}

      {/* Render description here if position is bottom */}
      {descriptionPosition === "bottom" && descriptionComponent}

      {/* Errors usually stay at the very bottom */}
      <FieldError errors={field.state.meta.errors} />
    </Field>
  );
}
