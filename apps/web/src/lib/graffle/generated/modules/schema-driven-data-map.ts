import type * as $$Utilities from "graffle/utilities-for-generated";
import * as $$Scalar from "./scalar.js";
import type { Schema as $$Schema } from "./schema/_.js";

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
      readonly namedType: BaseWish;
    };
    readonly wishId: {
      readonly _tag: "outputField";
    };
  };
}

interface DeliveringWish extends $$Utilities.SchemaDrivenDataMap.OutputObject {
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
    readonly deliveryDetails: {
      readonly _tag: "outputField";
      readonly namedType: DeliveryDetails;
    };
    readonly description: {
      readonly _tag: "outputField";
    };
    readonly grantor: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly grantorId: {
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
    readonly status: {
      readonly _tag: "outputField";
    };
  };
}

interface DeliveryDetails extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: {
    readonly carrier: {
      readonly _tag: "outputField";
    };
    readonly estimatedDeliveryDate: {
      readonly _tag: "outputField";
      readonly namedType: $$Scalar.Date;
    };
    readonly trackingNumber: {
      readonly _tag: "outputField";
    };
  };
}

interface FulfilledWish extends $$Utilities.SchemaDrivenDataMap.OutputObject {
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
    readonly deliveryDetails: {
      readonly _tag: "outputField";
      readonly namedType: DeliveryDetails;
    };
    readonly description: {
      readonly _tag: "outputField";
    };
    readonly fulfilledAt: {
      readonly _tag: "outputField";
      readonly namedType: $$Scalar.Date;
    };
    readonly grantor: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly grantorId: {
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
    readonly status: {
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

interface OpenWish extends $$Utilities.SchemaDrivenDataMap.OutputObject {
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
    readonly status: {
      readonly _tag: "outputField";
    };
  };
}

interface PendingWish extends $$Utilities.SchemaDrivenDataMap.OutputObject {
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
    readonly fulfilledAt: {
      readonly _tag: "outputField";
      readonly namedType: $$Scalar.Date;
    };
    readonly grantor: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly grantorId: {
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
    readonly status: {
      readonly _tag: "outputField";
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

interface BaseWish extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: "outputObject";
  readonly fields: $$Utilities.SchemaDrivenDataMap.OutputObject["fields"];
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
    readonly home: {
      readonly _tag: "outputField";
      readonly arguments: {
        readonly categoryId: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [0];
        };
        readonly limit: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.Int;
          readonly inlineType: [0];
        };
        readonly search: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [0];
        };
        readonly skip: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.Int;
          readonly inlineType: [0];
        };
      };
      readonly $argumentsType: {
        categoryId?: $$Scalar.String["codec"]["_typeDecoded"] | null | undefined;
        limit?: $$Scalar.Int["codec"]["_typeDecoded"] | null | undefined;
        search?: $$Scalar.String["codec"]["_typeDecoded"] | null | undefined;
        skip?: $$Scalar.Int["codec"]["_typeDecoded"] | null | undefined;
      };
      readonly namedType: OpenWish;
    };
    readonly me: {
      readonly _tag: "outputField";
      readonly namedType: User;
    };
    readonly myWishes: {
      readonly _tag: "outputField";
      readonly namedType: BaseWish;
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
      readonly namedType: BaseWish;
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
      };
      readonly $argumentsType: {
        categoryId: $$Scalar.String["codec"]["_typeDecoded"];
        description: $$Scalar.String["codec"]["_typeDecoded"];
        name: $$Scalar.String["codec"]["_typeDecoded"];
      };
      readonly namedType: OpenWish;
    };
    readonly requestGrant: {
      readonly _tag: "outputField";
      readonly arguments: {
        readonly message: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.String;
          readonly inlineType: [1];
        };
        readonly wishId: {
          readonly _tag: "argumentOrInputField";
          readonly namedType: $$Scalar.ID;
          readonly inlineType: [1];
        };
      };
      readonly $argumentsType: {
        message: $$Scalar.String["codec"]["_typeDecoded"];
        wishId: $$Scalar.ID["codec"]["_typeDecoded"];
      };
      readonly namedType: Chat;
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
  type: null as any as "ACCEPTED" | "CLOSED" | "PENDING",
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
      namedType: null as any as BaseWish,
    },
    wishId: {
      _tag: "outputField",
    },
  },
};

const DeliveringWish: DeliveringWish = {
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
    deliveryDetails: {
      _tag: "outputField",
      namedType: null as any as DeliveryDetails,
    },
    description: {
      _tag: "outputField",
    },
    grantor: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    grantorId: {
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
    status: {
      _tag: "outputField",
    },
  },
};

const DeliveryDetails: DeliveryDetails = {
  _tag: "outputObject",
  fields: {
    carrier: {
      _tag: "outputField",
    },
    estimatedDeliveryDate: {
      _tag: "outputField",
      namedType: $$Scalar.Date,
    },
    trackingNumber: {
      _tag: "outputField",
    },
  },
};

const FulfilledWish: FulfilledWish = {
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
    deliveryDetails: {
      _tag: "outputField",
      namedType: null as any as DeliveryDetails,
    },
    description: {
      _tag: "outputField",
    },
    fulfilledAt: {
      _tag: "outputField",
      namedType: $$Scalar.Date,
    },
    grantor: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    grantorId: {
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
    status: {
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

const OpenWish: OpenWish = {
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
    status: {
      _tag: "outputField",
    },
  },
};

const PendingWish: PendingWish = {
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
    fulfilledAt: {
      _tag: "outputField",
      namedType: $$Scalar.Date,
    },
    grantor: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    grantorId: {
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
    status: {
      _tag: "outputField",
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

const BaseWish: BaseWish = {
  _tag: "outputObject",
  fields: {
    ...DeliveringWish.fields,
    ...FulfilledWish.fields,
    ...PendingWish.fields,
  },
};

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
    home: {
      _tag: "outputField",
      arguments: {
        categoryId: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [0],
        },
        limit: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
        search: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [0],
        },
        skip: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.Int,
          inlineType: [0],
        },
      },
      $argumentsType: {
        categoryId: null as any as $$Scalar.String["codec"]["_typeDecoded"] | null | undefined,
        limit: null as any as $$Scalar.Int["codec"]["_typeDecoded"] | null | undefined,
        search: null as any as $$Scalar.String["codec"]["_typeDecoded"] | null | undefined,
        skip: null as any as $$Scalar.Int["codec"]["_typeDecoded"] | null | undefined,
      },
      namedType: null as any as OpenWish,
    },
    me: {
      _tag: "outputField",
      namedType: null as any as User,
    },
    myWishes: {
      _tag: "outputField",
      namedType: null as any as BaseWish,
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
      namedType: null as any as BaseWish,
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
      },
      $argumentsType: {
        categoryId: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        description: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        name: null as any as $$Scalar.String["codec"]["_typeDecoded"],
      },
      namedType: null as any as OpenWish,
    },
    requestGrant: {
      _tag: "outputField",
      arguments: {
        message: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.String,
          inlineType: [1],
        },
        wishId: {
          _tag: "argumentOrInputField",
          namedType: $$Scalar.ID,
          inlineType: [1],
        },
      },
      $argumentsType: {
        message: null as any as $$Scalar.String["codec"]["_typeDecoded"],
        wishId: null as any as $$Scalar.ID["codec"]["_typeDecoded"],
      },
      namedType: null as any as Chat,
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
Chat.fields[`wish`]!.namedType = BaseWish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
DeliveringWish.fields[`category`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
DeliveringWish.fields[`deliveryDetails`]!.namedType = DeliveryDetails;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
DeliveringWish.fields[`grantor`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
DeliveringWish.fields[`owner`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
FulfilledWish.fields[`category`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
FulfilledWish.fields[`deliveryDetails`]!.namedType = DeliveryDetails;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
FulfilledWish.fields[`grantor`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
FulfilledWish.fields[`owner`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Message.fields[`sender`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
OpenWish.fields[`category`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
OpenWish.fields[`owner`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
PendingWish.fields[`category`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
PendingWish.fields[`grantor`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
PendingWish.fields[`owner`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`categories`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`home`]!.namedType = OpenWish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`me`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`myWishes`]!.namedType = BaseWish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`users`]!.namedType = User;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Query.fields[`wish`]!.namedType = BaseWish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Mutation.fields[`createCategory`]!.namedType = Category;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Mutation.fields[`createWish`]!.namedType = OpenWish;
// @ts-expect-error Assignment to readonly property is needed for circular reference handling.
Mutation.fields[`requestGrant`]!.namedType = Chat;

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
    readonly DeliveringWish: DeliveringWish;
    readonly DeliveryDetails: DeliveryDetails;
    readonly FulfilledWish: FulfilledWish;
    readonly Message: Message;
    readonly OpenWish: OpenWish;
    readonly PendingWish: PendingWish;
    readonly User: User;
    readonly BaseWish: BaseWish;
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
    DeliveringWish,
    DeliveryDetails,
    FulfilledWish,
    Message,
    OpenWish,
    PendingWish,
    User,
    BaseWish,
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
