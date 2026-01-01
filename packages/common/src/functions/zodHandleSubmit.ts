import { z } from "zod";

interface TreeNode {
  errors?: string[];
  properties?: Record<string, TreeNode>;
  items?: (TreeNode | undefined)[];
}

interface FieldErrors extends Record<string, { message: string }> {}

/**
 * Recursively traverses a treeified Zod error and extracts field errors.
 * Handles nested objects and arrays, using dot notation for nested paths.
 *
 * @param node - The current tree node to process
 * @param fields - The accumulator object for field errors
 * @param prefix - The current path prefix (for nested fields)
 */
const traverseErrorTree = (
  node: TreeNode,
  fields: FieldErrors,
  prefix = ""
) => {
  // If this node has errors, add the first error that appears
  if (
    node.errors &&
    node.errors.length > 0 &&
    node.errors !== undefined &&
    prefix
  ) {
    fields[prefix] = { message: node.errors[0]! };
  }

  // Handle object properties
  if (node.properties) {
    Object.entries(node.properties).forEach(([key, childNode]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      traverseErrorTree(childNode, fields, path);
    });
  }

  // Handle array items if there is any
  if (node.items) {
    node.items.entries().map(([idx, childNode]) => {
      if (childNode) {
        const path = prefix ? `${prefix}[${idx}]` : `[${idx}]`;
        traverseErrorTree(childNode, fields, path);
      }
    });
  }
};

/**
 * Convert the zod error into a tree and convert it to
 * a certain format for tanstack form to read
 * @param error z.ZodError
 * @returns A Record where keys are field names and values contain the first error message
 */
const zodErrorToFieldErrors = (error: z.ZodError) => {
  const tree = z.treeifyError(error) as TreeNode;
  const fields: Record<string, { message: string }> = {};

  traverseErrorTree(tree, fields);

  return fields;
};

/**
 * Creates a TanStack Form validator function from a Zod schema.
 *
 * @param zodSchema - The Zod schema to use for validation
 * @returns A validator function compatible with TanStack Form's validators
 *
 * @example
 * ```ts
 * const f = useAppForm({
 *   defaultValues: { name: "", email: "" },
 *   validators: {
 *     onSubmit: zodValidator(MyFormSchema),
 *   },
 * });
 * ```
 */
export function zodHandleSubmit<T>(zodSchema: z.ZodType<T>) {
  return ({ value }: { value: T }) => {
    const result = zodSchema.safeParse(value);
    if (!result.success) {
      console.error("Validation Failed", result.error);
      return {
        fields: zodErrorToFieldErrors(result.error),
      };
    }
  };
}
