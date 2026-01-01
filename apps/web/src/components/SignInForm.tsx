import { useAppForm, useFieldContext } from "@/hooks/_formHooks";
import { Card, CardContent } from "./ui/card";
import { Field, FieldError, FieldLabel } from "./ui/field";
import { ComponentProps, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { EyeIcon } from "@phosphor-icons/react";
import { SignUpSchema } from "@repo/common/dto";
import { zodHandleSubmit } from "@repo/common/functions";

export default function SignInForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    } satisfies SignUpSchema,
    validators: {
      onSubmit: zodHandleSubmit(SignUpSchema),
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });
  return (
    <Card>
      <CardContent className="space-y-2 w-sm">
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.AppField name="email">
            {(field) => <field.TextField label="Email" />}
          </form.AppField>
          <form.AppField name="username">
            {(field) => <field.TextField label="Username" />}
          </form.AppField>
          <form.AppField name="password">
            {() => <PasswordField label="Password" />}
          </form.AppField>
          <form.AppField name="confirmPassword">
            {() => <PasswordField label="Confirm Password" />}
          </form.AppField>
          <div className="pt-2">
            <form.AppForm>
              <form.SubmitButton />
            </form.AppForm>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function PasswordField({
  label,
  ...rest
}: {
  label: string;
} & ComponentProps<"input">) {
  const field = useFieldContext<string>();
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          type={isHidden ? "password" : "text"}
          {...rest}
        />
        <InputGroupAddon align={"inline-end"}>
          <InputGroupButton
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            tabIndex={-1}
          >
            <EyeIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldError errors={field.state.meta.errors} />
    </Field>
  );
}
