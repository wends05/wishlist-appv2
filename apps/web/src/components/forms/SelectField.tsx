import { useFieldContext } from "@/hooks/_formHooks";
import type FieldWrapperProps from "@/types/FieldWrapperProps";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import FieldWrapper from "./field-wrapper";

interface SelectItemType {
  label: string;
  value: string;
}

interface SelectFieldProps extends FieldWrapperProps {
  items: SelectItemType[];
}
export default function SelectField({ items, descriptionPosition = "bottom", ...fieldWrapperProps }: SelectFieldProps) {
  const field = useFieldContext<string>();

  return (
    <FieldWrapper {...fieldWrapperProps} descriptionPosition={descriptionPosition}>
      <Select items={items} onValueChange={(val) => field.handleChange(val ?? "")} value={field.state.value}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent side="inline-end">
          {items.map((item) => (
            <SelectItem key={item.label} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldWrapper>
  );
}
