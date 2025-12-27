import builder from "@/lib/pothos.ts";

import "./types/index.ts";
import "./resolvers/index.ts";

export const schema = builder.toSchema({});
