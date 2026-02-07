import type * as $$Data from "./data.js";
import type * as $$MethodsDocument from "./methods-document.js";
import type * as $$MethodsRoot from "./methods-root.js";
import type * as $$MethodsSelect from "./methods-select.js";
import type * as $$Schema from "./schema/_.js";
import type * as $$SchemaDrivenDataMap from "./schema-driven-data-map.js";
import type * as $$SelectionSets from "./selection-sets/_.js";

declare global {
  export namespace GraffleGlobal {
    export interface Clients {
      default: {
        name: $$Data.Name;
        schema: $$Schema.Schema;
        interfaces: {
          MethodsSelect: $$MethodsSelect.$MethodsSelect;
          Document: $$MethodsDocument.BuilderMethodsDocumentFn;
          Root: $$MethodsRoot.BuilderMethodsRootFn;
        };
        selectionSets: {
          $Document: $$SelectionSets.$Document;
        };
        argumentsMap: $$SchemaDrivenDataMap.SchemaDrivenDataMap;
        /**
         * http://localhost:4000/graphql
         */
        defaultSchemaUrl: string;
      };
    }
  }
}
