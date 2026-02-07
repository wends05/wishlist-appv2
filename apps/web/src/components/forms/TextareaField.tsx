import { useFieldContext } from "@/hooks/_formHooks";
import type FieldWrapperProps from "@/types/FieldWrapperProps";
import { Textarea } from "../ui/textarea";
import FieldWrapper from "./field-wrapper";

interface TextareaFieldProps extends React.ComponentProps<"textarea">, FieldWrapperProps {}

export default function TextareaField({ label, description, descriptionPosition, ...rest }: TextareaFieldProps) {
  const field = useFieldContext<string>();
  return (
    <FieldWrapper description={description} descriptionPosition={descriptionPosition} label={label}>
      <Textarea
        id={field.name}
        name={field.name}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        value={field.state.value}
        {...rest}
      />
    </FieldWrapper>
  );
}
