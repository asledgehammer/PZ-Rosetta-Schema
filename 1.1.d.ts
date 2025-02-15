/* eslint-disable */

export namespace rosetta.json {

  export interface RosettaJson {
    /**
     * The schema version for Rosetta. E.G: 1.1
     */
    version: string;
    languages?: {
      java?: java.JavaJson;
      lua?: lua.LuaJson;
      [k: string]: unknown;
    };
    games?: {
      projectzomboid?: games.ProjectzomboidJson;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }

  /**
   * @minItems 1
   */
  export type TagsJson = [string, ...string[]];
}

export namespace rosetta.json.java {
  /**
   * @minItems 1
   */
  export type JavaGenericsJson = [
    JavaTypeJson,
    ...JavaTypeJson[]
  ];

  /**
   * @minItems 1
   */
  export type JavaModifiersJson = [string, ...string[]];

  export interface JavaJson {
    packages?: {
      [k: string]: JavaPackageJson;
    };
    /**
     * @minItems 1
     */
    methods?: [
      JavaMethodJson,
      ...JavaMethodJson[]
    ];
  }

  export interface JavaPackageJson {
    [k: string]: JavaClassJson;
  }

  export interface JavaClassJson {
    generics?: JavaGenericsJson;
    /**
     * If the class is deprecated.
     */
    deprecated?: boolean;
    javaType?: string;
    extends?: string;
    staticFields?: {
      [k: string]: JavaFieldJson;
    };
    fields?: {
      [k: string]: JavaFieldJson;
    };
    /**
     * @minItems 1
     */
    constructors?: [
      JavaConstructorJson,
      ...JavaConstructorJson[]
    ];
    /**
     * @minItems 1
     */
    methods?: [
      JavaMethodJson,
      ...JavaMethodJson[]
    ];
    /**
     * @minItems 1
     */
    staticMethods?: [
      JavaMethodJson,
      ...JavaMethodJson[]
    ];
    modifiers?: JavaModifiersJson;
    notes?: string;
    tags?: TagsJson;
  }

  export interface JavaTypeJson {
    basic?: string;
    full?: string;
    /**
     * Appends the 'null' type to the list of optional types.
     */
    nullable?: boolean;
    generics?: JavaGenericsJson;
  }

  export interface JavaFieldJson {
    name: string;
    /**
     * If the field is deprecated.
     */
    deprecated?: boolean;
    modifiers?: JavaModifiersJson;
    type: JavaTypeJson;
    notes?: string;
    defaultValue?: string;
    tags?: TagsJson;
  }

  export interface JavaConstructorJson {
    modifiers?: JavaModifiersJson;
    /**
     * If the constructor is deprecated.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    parameters?: [
      JavaParameterJson,
      ...JavaParameterJson[]
    ];
    notes?: string;
  }

  export interface JavaParameterJson {
    name: string;
    type: JavaTypeJson;
    notes?: string;
  }

  export interface JavaMethodJson {
    name: string;
    modifiers?: JavaModifiersJson;
    /**
     * If the method is deprecated.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    parameters?: [
      JavaParameterJson,
      ...JavaParameterJson[]
    ];
    return: JavaReturnJson;
    notes?: string;
    tags?: TagsJson;
  }

  export interface JavaReturnJson {
    type: JavaTypeJson;
    notes?: string;
  }
}

export namespace rosetta.json.lua {

  export interface LuaJson {
    classes?: {
      [k: string]: LuaClassJson;
    };
    tables?: {
      [k: string]: LuaTableJson;
    };
    /**
     * @minItems 1
     */
    functions?: [
      LuaFunctionJson,
      ...LuaFunctionJson[]
    ];
    fields?: {
      [k: string]: LuaFieldJson;
    };
    [k: string]: unknown;
  }

  export interface LuaClassJson {
    /**
     * If the class is deprecated.
     */
    deprecated?: boolean;
    extends?: string;
    /**
     * If true, the Lua class will allow foreign properties assigned to it. E.G: '--- @field [any] any'
     */
    mutable?: boolean;
    /**
     * @minItems 1
     */
    constructors?: [
      LuaConstructorJson,
      ...LuaConstructorJson[]
    ];
    staticFields?: {
      [k: string]: LuaFieldJson;
    };
    fields?: {
      [k: string]: LuaFieldJson;
    };
    /**
     * @minItems 1
     */
    methods?: [
      LuaMethodJson,
      ...LuaMethodJson[]
    ];
    /**
     * @minItems 1
     */
    staticMethods?: [
      LuaMethodJson,
      ...LuaMethodJson[]
    ];
    notes?: string;
    tags?: TagsJson;
  }

  export interface LuaConstructorJson {
    /**
     * If the function is deprecated.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    parameters?: [
      LuaParameterJson,
      ...LuaParameterJson[]
    ];
    notes?: string;
  }
  export interface LuaParameterJson {
    name?: string;
    type?: string;
    /**
     * Makes a parameter optional. All optional parameters must be at the end of the parameter list.
     */
    optional?: boolean;
    /**
     * Appends the 'nil' type to the list of optional types.
     */
    nullable?: boolean;
    notes?: string;
  }

  export interface LuaFieldJson {
    type?: string;
    /**
     * Appends the 'nil' type to the list of optional types.
     */
    nullable?: boolean;
    notes?: string;
    tags?: TagsJson;
  }

  export interface LuaMethodJson {
    name: string;
    /**
     * If the function is deprecated.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    parameters?: [
      LuaParameterJson,
      ...LuaParameterJson[]
    ];
    /**
     * @minItems 1
     */
    return?: [
      LuaReturnsJson,
      ...LuaReturnsJson[]
    ];
    notes?: string;
    tags?: TagsJson;
  }

  export interface LuaReturnsJson {
    /**
     * The name to show up on the typing as what is returned.
     */
    name?: string;
    /**
     * The lua type of the returned value.
     */
    type: string;
    /**
     * Appends the 'nil' type to the list of optional types.
     */
    nullable?: boolean;
    /**
     * A brief description of the returned value.
     */
    notes?: string;
  }

  export interface LuaTableJson {
    /**
     * If the class is deprecated.
     */
    deprecated?: boolean;
    /**
     * If true, the Lua class will allow foreign properties assigned to it. E.G: '--- @field [any] any'
     */
    mutable?: boolean;
    /**
     * @minItems 1
     */
    staticFields?: [
      LuaFieldJson,
      ...LuaFieldJson[]
    ];
    /**
     * @minItems 1
     */
    staticMethods?: [
      LuaMethodJson,
      ...LuaMethodJson[]
    ];
    notes?: string;
    tags?: TagsJson;
  }

  export interface LuaFunctionJson {
    name: string;
    /**
     * If the function is deprecated.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    parameters?: [
      LuaParameterJson,
      ...LuaParameterJson[]
    ];
    /**
     * @minItems 1
     */
    return?: [
      LuaReturnsJson,
      ...LuaReturnsJson[]
    ];
    notes?: string;
    tags?: TagsJson;
  }


  export interface LuaCallbackJson {
    /**
     * @minItems 1
     */
    parameters?: [
      LuaParameterJson,
      ...LuaParameterJson[]
    ];
    /**
     * @minItems 1
     */
    return?: [
      LuaReturnsJson,
      ...LuaReturnsJson[]
    ];
    notes?: string;
    tags?: TagsJson;
  }

}

export namespace rosetta.json.games {
  export interface ProjectzomboidJson {
    languages?: {
      java?: {
        [k: string]: unknown;
      };
      lua?: {
        /**
         * @minItems 1
         */
        events?: [
          ProjectzomboidEventJson,
          ...ProjectzomboidEventJson[]
        ];
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }

  export interface ProjectzomboidEventJson {
    name?: string;
    /**
     * If the event is deprecated.
     */
    deprecated?: boolean;
    callback?: lua.LuaCallbackJson;
    context?: ProjectzomboidContextJson;
    notes?: string;
    tags?: TagsJson;
  }

  export interface ProjectzomboidContextJson {
    /**
     * If the event fires on the server.
     */
    server?: boolean;
    /**
     * If the event fires on the client.
     */
    client?: boolean;
    /**
     * If the event fires in singleplayer.
     */
    singleplayer?: boolean;
    /**
     * If the event fires in multiplayer.
     */
    multiplayer?: boolean;
  }
}
