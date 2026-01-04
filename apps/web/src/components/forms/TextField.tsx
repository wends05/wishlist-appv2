import { useFieldContext } from "@/hooks/_formHooks";
import type FieldWrapperProps from "@/types/FieldWrapperProps";
import { Input } from "../ui/input";
import FieldWrapper from "./field-wrapper";

interface TextFieldProps
  extends React.ComponentProps<"input">,
    FieldWrapperProps {}

export default function TextField({
  label,
  description,
  descriptionPosition,
  ...rest
}: TextFieldProps) {
  const field = useFieldContext<string>();
  return (
    <FieldWrapper
      description={description}
      descriptionPosition={descriptionPosition}
      label={label}
    >
      <Input
        id={field.name}
        name={field.name}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        type="string"
        value={field.state.value}
        {...rest}
      />
    </FieldWrapper>
  );
}
