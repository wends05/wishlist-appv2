import type * as $Members from "./members.js";

export * as ChatStatus from "./members.js";

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `ACCEPTED`
 * - `DECLINED`
 * - `PENDING`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 3 |
 */
export interface ChatStatus {
  kind: "Enum";
  name: "ChatStatus";
  members: $Members.ACCEPTED | $Members.DECLINED | $Members.PENDING;
}
