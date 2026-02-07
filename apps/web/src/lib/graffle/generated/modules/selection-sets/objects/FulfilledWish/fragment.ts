import type { GraphqlKit } from "graffle/utilities-for-generated";
import type { $DefaultSelectionContext } from "../../_context.js";
import type { FulfilledWish } from "./_.js";

export interface $FragmentInline<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends FulfilledWish<_$Context>,
    GraphqlKit.Document.Object.Select.Directive.$Groups.InlineFragment.Fields {}
