import { useFieldContext } from "@/hooks/_formHooks";
import { Input } from "../ui/input";
import FieldWrapper from "./field-wrapper";
import FieldWrapperProps from "@/types/FieldWrapperProps";

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
      label={label}
      description={description}
      descriptionPosition={descriptionPosition}
    >
      <Input
        name={field.name}
        id={field.name}
        type="string"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        {...rest}
      />
    </FieldWrapper>
  );
}
