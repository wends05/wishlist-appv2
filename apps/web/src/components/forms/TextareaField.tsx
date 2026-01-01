import { useFieldContext } from "@/hooks/_formHooks";
import FieldWrapper from "./field-wrapper";
import { Textarea } from "../ui/textarea";
import FieldWrapperProps from "@/types/FieldWrapperProps";

interface TextareaFieldProps
  extends React.ComponentProps<"textarea">,
    FieldWrapperProps {}
    
export default function TextareaField({
  label,
  description,
  descriptionPosition,
  ...rest
}: TextareaFieldProps) {
  const field = useFieldContext<string>();
  return (
    <FieldWrapper
      label={label}
      description={description}
      descriptionPosition={descriptionPosition}
    >
      <Textarea
        name={field.name}
        id={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        {...rest}
      />
    </FieldWrapper>
  );
}
