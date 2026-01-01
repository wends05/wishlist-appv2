import * as $$Scalar from "./scalar.js";
import { Schema as $$Schema } from "./schema/_.js";
import type * as $$Utilities from "graffle/utilities-for-generated";

//
//
//
//
//
//
// ==================================================================================================
//                                               Types
// ==================================================================================================
//
//
//
//
//
//

interface ChatStatus extends $$Utilities.SchemaDrivenDataMap.Enum {
  readonly _tag: "enum";
  readonly name: "ChatStatus";
  readonly type: $$Schema.ChatStatus["members"];
}

interface Category extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly _id: {
      readonly _tag: "outputField";
    };
    readonly description: {
      readonly _tag: "outputField";
    };
    readonly name: {
      readonly _tag: "outputField";
    };
  };
}

interface Chat extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly _id: {
      readonly _tag: "outputField";
    };
    readonly grantor: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly grantorId: {
      readonly _tag: "outputField";
    };
    readonly messages: {
      readonly _tag: "outputField";
      readonly namedType: Message;
    };
    readonly status: {
      readonly _tag: "outputField";
    };
    readonly wish: {
      readonly _tag: "outputField";
      readonly namedType: Wish;
    };
    readonly wishId: {
      readonly _tag: "outputField";
    };
    readonly wisher: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly wisherId: {
      readonly _tag: "outputField";
    };
  };
}

interface Message extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly content: {
      readonly _tag: "outputField";
    };
    readonly createdAt: {
      readonly _tag: "outputField";
      readonly namedType: $$Scalar.Date;
    };
    readonly sender: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly senderId: {
      readonly _tag: "outputField";
    };
    readonly updatedAt: {
      readonly _tag: "outputField";
      readonly namedType: $$Scalar.Date;
    };
  };
}

interface User extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly _id: {
      readonly _tag: "outputField";
    };
    readonly clerkId: {
      readonly _tag: "outputField";
    };
    readonly email: {
      readonly _tag: "outputField";
    };
    readonly name: {
      readonly _tag: "outputField";
    };
  };
}

interface Wish extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly _id: {
      readonly _tag: "outputField";
    };
    readonly category: {
      readonly _tag: "outputField";
      readonly namedType: Category;
    };
    readonly categoryId: {
      readonly _tag: "outputField";
    };
    readonly description: {
      readonly _tag: "outputField";
    };
    readonly name: {
      readonly _tag: "outputField";
    };
    readonly owner: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly ownerId: {
      readonly _tag: "outputField";
    };
  };
}

interface Query extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly authenticated: {
      readonly _tag: "outputField";
    };
    readonly categories: {
      readonly _tag: "outputField";
      readonly namedType: Category;
    };
    readonly me: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly myWishes: {
      readonly _tag: "outputField";
      readonly namedType: Wish;
    };
    readonly users: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly wish: {
      readonly _tag: "outputField";
      readonly arguments: {
        readonly wishId: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
      };
      readonly $argumentsType: {
        wishId: $$Scalar.String["codec"]["_typeDecoded"];
      };
      readonly namedType: Wish;
    };
    readonly wishes: {
      readonly _tag: "outputField";
      readonly namedType: Wish;
    };
  };
}

interface Mutation extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly createCategory: {
      readonly _tag: "outputField";
      readonly arguments: {
        readonly description: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
        readonly name: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
      };
      readonly $argumentsType: {
        description: $$Scalar.String["codec"]["_typeDecoded"];
        name: $$Scalar.String["codec"]["_typeDecoded"];
      };
      readonly namedType: Category;
    };
    readonly createUser: {
      readonly _tag: "outputField";
      readonly arguments: {
        readonly email: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
        readonly name: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
      };
      readonly $argumentsType: {
        email: $$Scalar.String["codec"]["_typeDecoded"];
        name: $$Scalar.String["codec"]["_typeDecoded"];
      };
      readonly namedType: User;
    };
    readonly createWish: {
      readonly _tag: "outputField";
      readonly arguments: {
        readonly categoryId: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
        readonly description: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
        readonly name: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
        readonly ownerId: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
      };
      readonly $argumentsType: {
        categoryId: $$Scalar.String["codec"]["_typeDecoded"];
        description: $$Scalar.String["codec"]["_typeDecoded"];
        name: $$Scalar.String["codec"]["_typeDecoded"];
        ownerId: $$Scalar.String["codec"]["_typeDecoded"];
      };
      readonly namedType: Wish;
    };
  };
}

//
//
//
//
//
//
// ==================================================================================================
//                                           ScalarStandard
// ==================================================================================================
//
//
//
//
//
//

//
//
//
//
//
//
// ==================================================================================================
//                                            ScalarCustom
// ==================================================================================================
//
//
//
//
//
//

//
//
//
//
//
//
// ==================================================================================================
//                                                Enum
// ==================================================================================================
//
//
//
//
//
//

const ChatStatus: ChatStatus = {
  _tag: "enum",
  name: "ChatStatus",
  type: null as any as "ACCEPTED" | "DECLINED" | "PENDING",
};

//
//
//
//
//
//
// ==================================================================================================
//                                            InputObject
// ==================================================================================================
//
//
//
//
//
//

// None of your InputObjects have custom scalars.

//
//
//
//
//
//
// ==================================================================================================
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

const Category: Category = {
  _tag: "outputObject",
  fields: {
    _id: {
      _tag: "outputField",
    },
    description: {
      _tag: "outputField",
    },
    name: {
      _tag: "outputField",
    },
  },
};

const Chat: Chat = {
  _tag: "outputObject",
  fields: {
    _id: {
      _tag: "outputField",
    },
    grantor: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    grantorId: {
      _tag: "outputField",
    },
    messages: {
      _tag: "outputField",
      namedType: null as any as Message,
    },
    status: {
      _tag: "outputField",
    },
    wish: {
      _tag: "outputField",
      namedType: null as any as Wish,
    },
    wishId: {
      _tag: "outputField",
    },
    wisher: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    wisherId: {
      _tag: "outputField",
    },
  },
};

const Message: Message = {
  _tag: "outputObject",
  fields: {
    content: {
      _tag: "outputField",
    },
    createdAt: {
      _tag: "outputField",
      namedType: $$Scalar.Date,
    },
    sender: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    senderId: {
      _tag: "outputField",
    },
    updatedAt: {
      _tag: "outputField",
      namedType: $$Scalar.Date,
    },
  },
};

const User: User = {
  _tag: "outputObject",
  fields: {
    _id: {
      _tag: "outputField",
    },
    clerkId: {
      _tag: "outputField",
    },
    email: {
      _tag: "outputField",
    },
    name: {
      _tag: "outputField",
    },
  },
};

const Wish: Wish = {
  _tag: "outputObject",
  fields: {
    _id: {
      _tag: "outputField",
    },
    category: {
      _tag: "outputField",
      namedType: null as any as Category,
    },
    categoryId: {
      _tag: "outputField",
    },
    description: {
      _tag: "outputField",
    },
    name: {
      _tag: "outputField",
    },
    owner: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    ownerId: {
      _tag: "outputField",
    },
  },
};

//
//
//
//
//
//
// ==================================================================================================
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//

// None of your Interfaces have custom scalars.

//
//
//
//
//
//
// ==================================================================================================
//                                               Union
// ==================================================================================================
//
//
//
//
//
//

// None of your Unions have custom scalars.

//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//

const Query: Query = {
  _tag: "outputObject",
  fields: {
    authenticated: {
      _tag: "outputField",
    },
    categories: {
      _tag: "outputField",
      namedType: null as any as Category,
    },
    me: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    myWishes: {
      _tag: "outputField",
      namedType: null as any as Wish,
    },
    users: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    wish: {
      _tag: "outputField",
      arguments: {
        wishId: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
      },
      $argumentsType: {
        wishId: null as any as $$Scalar.String["codec"]["_typeDecoded"],
      },
      namedType: null as any as Wish,
    },
    wishes: {
      _tag: "outputField",
      namedType: null as any as Wish,
    },
  },
};

const Mutation: Mutation = {
  _tag: "outputObject",
  fields: {
    createCategory: {
      _tag: "outputField",
      arguments: {
        description: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
        name: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
      },
      $argumentsType: {
        description: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        name: null as any as $$Scalar.String["codec"]["_typeDecoded"],
      },
      namedType: null as any as Category,
    },
    createUser: {
      _tag: "outputField",
      arguments: {
        email: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
        name: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
      },
      $argumentsType: {
        email: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        name: null as any as $$Scalar.String["codec"]["_typeDecoded"],
      },
      namedType: null as any as User,
    },
    createWish: {
      _tag: "outputField",
      arguments: {
        categoryId: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
        description: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
        name: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
        ownerId: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
      },
      $argumentsType: {
        categoryId: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        description: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        name: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        ownerId: null as any as $$Scalar.String["codec"]["_typeDecoded"],
      },
      namedType: null as any as Wish,
    },
  },
};

//
//
//
//
//
//
// ==================================================================================================
//                                       Reference Assignments
//                                (avoids circular assignment issues)
// ==================================================================================================
//
//
//
//
//
//

// TODO: Contribute helper to Utilities to cast readonly data to mutable at type level.
// These assignments are needed to avoid circular references during module initialization.
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Chat.fields[`grantor`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Chat.fields[`messages`]!.namedType = Message;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Chat.fields[`wish`]!.namedType = Wish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Chat.fields[`wisher`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Message.fields[`sender`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Wish.fields[`category`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Wish.fields[`owner`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`categories`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`me`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`myWishes`]!.namedType = Wish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`users`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`wish`]!.namedType = Wish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`wishes`]!.namedType = Wish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Mutation.fields[`createCategory`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Mutation.fields[`createUser`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Mutation.fields[`createWish`]!.namedType = Wish;

//
//
//
//
//
//
// ==================================================================================================
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

interface SchemaDrivenDataMap extends $$Utilities.SchemaDrivenDataMap {
  readonly operations: {
    readonly query: Query;
    readonly mutation: Mutation;
  };
  readonly directives: {};
  readonly inputTypes: {
    readonly Boolean: $$Scalar.Boolean;
    readonly Float: $$Scalar.Float;
    readonly ID: $$Scalar.ID;
    readonly Int: $$Scalar.Int;
    readonly String: $$Scalar.String;
    readonly Date: $$Scalar.Date;
    readonly JSON: $$Scalar.JSON;
    readonly ChatStatus: ChatStatus;
  };
  readonly outputTypes: {
    readonly Boolean: $$Scalar.Boolean;
    readonly Float: $$Scalar.Float;
    readonly ID: $$Scalar.ID;
    readonly Int: $$Scalar.Int;
    readonly String: $$Scalar.String;
    readonly Date: $$Scalar.Date;
    readonly JSON: $$Scalar.JSON;
    readonly ChatStatus: ChatStatus;
    readonly Category: Category;
    readonly Chat: Chat;
    readonly Message: Message;
    readonly User: User;
    readonly Wish: Wish;
    readonly Query: Query;
    readonly Mutation: Mutation;
  };
  readonly scalarTypes: {
    readonly Boolean: $$Scalar.Boolean;
    readonly Float: $$Scalar.Float;
    readonly ID: $$Scalar.ID;
    readonly Int: $$Scalar.Int;
    readonly String: $$Scalar.String;
    readonly Date: $$Scalar.Date;
    readonly JSON: $$Scalar.JSON;
  };
}

const $schemaDrivenDataMap: SchemaDrivenDataMap = {
  operations: {
    query: Query,
    mutation: Mutation,
  },
  directives: {},
  inputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
    JSON: $$Scalar.JSON,
    ChatStatus,
  },
  outputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
    JSON: $$Scalar.JSON,
    ChatStatus,
    Category,
    Chat,
    Message,
    User,
    Wish,
    Query,
    Mutation,
  },
  scalarTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Date: $$Scalar.Date,
    JSON: $$Scalar.JSON,
  },
};

export { $schemaDrivenDataMap as schemaDrivenDataMap };
export type { SchemaDrivenDataMap };
