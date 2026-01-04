import { CreateWishDTO } from "@repo/common/dto";
import { createServerFn } from "@tanstack/react-start";
import createClient from "@/lib/graffle/client";

const createWish = createServerFn()
  .inputValidator(CreateWishDTO)
  .handler(async ({ data }) => {
    try {
      const client = await createClient();

      const res = await client.mutation.createWish({
        $: {
          ...data,
        },
        name: true,
        description: true,
      });

      return `Created Wish ${res?.name}`;
    } catch (error) {
      console.error(error);
    }
  });
export default createWish;
