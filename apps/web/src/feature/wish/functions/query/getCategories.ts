import { CategoryDocumentSchema } from "@repo/common/schemas";
import { createServerFn } from "@tanstack/react-start";
import createClient from "@/lib/graffle/client";

const getCategories = createServerFn().handler(async () => {
  const client = await createClient();
  const res = await client
    .gql(
      `
    query GetCategories {
      categories {
        _id
        name
      }
    }
  `
    )
    .$send();

  const parsedCategories = CategoryDocumentSchema.pick({
    _id: true,
    name:true
  }).array().parse(
    res?.categories
  );

  return parsedCategories;
});
export default getCategories;
