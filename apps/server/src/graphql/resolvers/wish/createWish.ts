import { CreateWishDTO } from "@repo/common/dto";
import { GraphQLError } from "graphql";
import { OpenWishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { createWish } from "@/services/Wish.service.ts";

builder.mutationField("createWish", (t) =>
  t.field({
    type: OpenWishRef,
    args: {
      name: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      categoryId: t.arg.string({ required: true }),
    },
    authScopes: {
      isAuthenticated: true,
    },
    validate: CreateWishDTO,

    resolve: (_parent, args, context) => {
      try {
        const { _id: ownerId } = context.DbUser;

        return createWish({
          name: args.name,
          description: args.description,
          ownerId: ownerId.toString(),
          categoryId: args.categoryId,
        });
      } catch (error) {
        if (error instanceof GraphQLError) {
          console.error("GraphQLError creating wish:", error.message);
          console.error("GraphQLError creating wish:", error.locations);
        }

        return null;
      }
    },
  })
);
