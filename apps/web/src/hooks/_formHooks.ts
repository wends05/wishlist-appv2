import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import SelectField from "@/components/forms/SelectField";
import SubmitButton from "@/components/forms/SubmitButton";
import TextareaField from "@/components/forms/TextareaField";
import TextField from "@/components/forms/TextField";

export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextareaField,
    SelectField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
