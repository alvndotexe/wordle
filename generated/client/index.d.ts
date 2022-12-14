
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Game
 * 
 */
export type Game = {
  game_id: string
  created_at: Date
  solution: string
}

/**
 * Model Game_Players
 * 
 */
export type Game_Players = {
  game_id: string
  player_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<GlobalReject>;

  /**
   * `prisma.game_Players`: Exposes CRUD operations for the **Game_Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Game_Players
    * const game_Players = await prisma.game_Players.findMany()
    * ```
    */
  get game_Players(): Prisma.Game_PlayersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Game: 'Game',
    Game_Players: 'Game_Players'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */


  export type GameCountOutputType = {
    Game_Players: number
  }

  export type GameCountOutputTypeSelect = {
    Game_Players?: boolean
  }

  export type GameCountOutputTypeGetPayload<S extends boolean | null | undefined | GameCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GameCountOutputTypeArgs)
    ? GameCountOutputType 
    : S extends { select: any } & (GameCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GameCountOutputType ? GameCountOutputType[P] : never
  } 
      : GameCountOutputType




  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     * 
    **/
    select?: GameCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Game
   */


  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    game_id: string | null
    created_at: Date | null
    solution: string | null
  }

  export type GameMaxAggregateOutputType = {
    game_id: string | null
    created_at: Date | null
    solution: string | null
  }

  export type GameCountAggregateOutputType = {
    game_id: number
    created_at: number
    solution: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    game_id?: true
    created_at?: true
    solution?: true
  }

  export type GameMaxAggregateInputType = {
    game_id?: true
    created_at?: true
    solution?: true
  }

  export type GameCountAggregateInputType = {
    game_id?: true
    created_at?: true
    solution?: true
    _all?: true
  }

  export type GameAggregateArgs = {
    /**
     * Filter which Game to aggregate.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs = {
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithAggregationInput>
    by: Array<GameScalarFieldEnum>
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }


  export type GameGroupByOutputType = {
    game_id: string
    created_at: Date
    solution: string
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect = {
    game_id?: boolean
    created_at?: boolean
    solution?: boolean
    Game_Players?: boolean | Game_PlayersFindManyArgs
    _count?: boolean | GameCountOutputTypeArgs
  }


  export type GameInclude = {
    Game_Players?: boolean | Game_PlayersFindManyArgs
    _count?: boolean | GameCountOutputTypeArgs
  } 

  export type GameGetPayload<S extends boolean | null | undefined | GameArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Game :
    S extends undefined ? never :
    S extends { include: any } & (GameArgs | GameFindManyArgs)
    ? Game  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Game_Players' ? Array < Game_PlayersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? GameCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (GameArgs | GameFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Game_Players' ? Array < Game_PlayersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? GameCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Game ? Game[P] : never
  } 
      : Game


  type GameCountArgs = Merge<
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }
  >

  export interface GameDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Game'> extends True ? Prisma__GameClient<GameGetPayload<T>> : Prisma__GameClient<GameGetPayload<T> | null, null>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Game'> extends True ? Prisma__GameClient<GameGetPayload<T>> : Prisma__GameClient<GameGetPayload<T> | null, null>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `game_id`
     * const gameWithGame_idOnly = await prisma.game.findMany({ select: { game_id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs>(
      args?: SelectSubset<T, GameFindManyArgs>
    ): PrismaPromise<Array<GameGetPayload<T>>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs>(
      args: SelectSubset<T, GameCreateArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Create many Games.
     *     @param {GameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameCreateManyArgs>(
      args?: SelectSubset<T, GameCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs>(
      args: SelectSubset<T, GameDeleteArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs>(
      args: SelectSubset<T, GameUpdateArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs>(
      args?: SelectSubset<T, GameDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs>(
      args: SelectSubset<T, GameUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs>(
      args: SelectSubset<T, GameUpsertArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Find one Game that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GameFindUniqueOrThrowArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Find the first Game that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Game_Players<T extends Game_PlayersFindManyArgs= {}>(args?: Subset<T, Game_PlayersFindManyArgs>): PrismaPromise<Array<Game_PlayersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Game base type for findUnique actions
   */
  export type GameFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where: GameWhereUniqueInput
  }

  /**
   * Game: findUnique
   */
  export interface GameFindUniqueArgs extends GameFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game base type for findFirst actions
   */
  export type GameFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     * 
    **/
    distinct?: Enumerable<GameScalarFieldEnum>
  }

  /**
   * Game: findFirst
   */
  export interface GameFindFirstArgs extends GameFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game findMany
   */
  export type GameFindManyArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Games to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game create
   */
  export type GameCreateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to create a Game.
     * 
    **/
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game createMany
   */
  export type GameCreateManyArgs = {
    /**
     * The data used to create many Games.
     * 
    **/
    data: Enumerable<GameCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Game update
   */
  export type GameUpdateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to update a Game.
     * 
    **/
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs = {
    /**
     * The data used to update Games.
     * 
    **/
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The filter to search for the Game to update in case it exists.
     * 
    **/
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     * 
    **/
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter which Game to delete.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs = {
    /**
     * Filter which Games to delete
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game: findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs = GameFindUniqueArgsBase
      

  /**
   * Game: findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs = GameFindFirstArgsBase
      

  /**
   * Game without action
   */
  export type GameArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
  }



  /**
   * Model Game_Players
   */


  export type AggregateGame_Players = {
    _count: Game_PlayersCountAggregateOutputType | null
    _min: Game_PlayersMinAggregateOutputType | null
    _max: Game_PlayersMaxAggregateOutputType | null
  }

  export type Game_PlayersMinAggregateOutputType = {
    game_id: string | null
    player_id: string | null
  }

  export type Game_PlayersMaxAggregateOutputType = {
    game_id: string | null
    player_id: string | null
  }

  export type Game_PlayersCountAggregateOutputType = {
    game_id: number
    player_id: number
    _all: number
  }


  export type Game_PlayersMinAggregateInputType = {
    game_id?: true
    player_id?: true
  }

  export type Game_PlayersMaxAggregateInputType = {
    game_id?: true
    player_id?: true
  }

  export type Game_PlayersCountAggregateInputType = {
    game_id?: true
    player_id?: true
    _all?: true
  }

  export type Game_PlayersAggregateArgs = {
    /**
     * Filter which Game_Players to aggregate.
     * 
    **/
    where?: Game_PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Game_Players to fetch.
     * 
    **/
    orderBy?: Enumerable<Game_PlayersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Game_PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Game_Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Game_Players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Game_Players
    **/
    _count?: true | Game_PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Game_PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Game_PlayersMaxAggregateInputType
  }

  export type GetGame_PlayersAggregateType<T extends Game_PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregateGame_Players]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_Players[P]>
      : GetScalarType<T[P], AggregateGame_Players[P]>
  }




  export type Game_PlayersGroupByArgs = {
    where?: Game_PlayersWhereInput
    orderBy?: Enumerable<Game_PlayersOrderByWithAggregationInput>
    by: Array<Game_PlayersScalarFieldEnum>
    having?: Game_PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Game_PlayersCountAggregateInputType | true
    _min?: Game_PlayersMinAggregateInputType
    _max?: Game_PlayersMaxAggregateInputType
  }


  export type Game_PlayersGroupByOutputType = {
    game_id: string
    player_id: string
    _count: Game_PlayersCountAggregateOutputType | null
    _min: Game_PlayersMinAggregateOutputType | null
    _max: Game_PlayersMaxAggregateOutputType | null
  }

  type GetGame_PlayersGroupByPayload<T extends Game_PlayersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Game_PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Game_PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Game_PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], Game_PlayersGroupByOutputType[P]>
        }
      >
    >


  export type Game_PlayersSelect = {
    game_id?: boolean
    player_id?: boolean
    games?: boolean | GameArgs
  }


  export type Game_PlayersInclude = {
    games?: boolean | GameArgs
  } 

  export type Game_PlayersGetPayload<S extends boolean | null | undefined | Game_PlayersArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Game_Players :
    S extends undefined ? never :
    S extends { include: any } & (Game_PlayersArgs | Game_PlayersFindManyArgs)
    ? Game_Players  & {
    [P in TrueKeys<S['include']>]:
        P extends 'games' ? GameGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (Game_PlayersArgs | Game_PlayersFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'games' ? GameGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Game_Players ? Game_Players[P] : never
  } 
      : Game_Players


  type Game_PlayersCountArgs = Merge<
    Omit<Game_PlayersFindManyArgs, 'select' | 'include'> & {
      select?: Game_PlayersCountAggregateInputType | true
    }
  >

  export interface Game_PlayersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Game_Players that matches the filter.
     * @param {Game_PlayersFindUniqueArgs} args - Arguments to find a Game_Players
     * @example
     * // Get one Game_Players
     * const game_Players = await prisma.game_Players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Game_PlayersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Game_PlayersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Game_Players'> extends True ? Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>> : Prisma__Game_PlayersClient<Game_PlayersGetPayload<T> | null, null>

    /**
     * Find the first Game_Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_PlayersFindFirstArgs} args - Arguments to find a Game_Players
     * @example
     * // Get one Game_Players
     * const game_Players = await prisma.game_Players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Game_PlayersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Game_PlayersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Game_Players'> extends True ? Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>> : Prisma__Game_PlayersClient<Game_PlayersGetPayload<T> | null, null>

    /**
     * Find zero or more Game_Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_PlayersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_Players
     * const game_Players = await prisma.game_Players.findMany()
     * 
     * // Get first 10 Game_Players
     * const game_Players = await prisma.game_Players.findMany({ take: 10 })
     * 
     * // Only select the `game_id`
     * const game_PlayersWithGame_idOnly = await prisma.game_Players.findMany({ select: { game_id: true } })
     * 
    **/
    findMany<T extends Game_PlayersFindManyArgs>(
      args?: SelectSubset<T, Game_PlayersFindManyArgs>
    ): PrismaPromise<Array<Game_PlayersGetPayload<T>>>

    /**
     * Create a Game_Players.
     * @param {Game_PlayersCreateArgs} args - Arguments to create a Game_Players.
     * @example
     * // Create one Game_Players
     * const Game_Players = await prisma.game_Players.create({
     *   data: {
     *     // ... data to create a Game_Players
     *   }
     * })
     * 
    **/
    create<T extends Game_PlayersCreateArgs>(
      args: SelectSubset<T, Game_PlayersCreateArgs>
    ): Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>>

    /**
     * Create many Game_Players.
     *     @param {Game_PlayersCreateManyArgs} args - Arguments to create many Game_Players.
     *     @example
     *     // Create many Game_Players
     *     const game_Players = await prisma.game_Players.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Game_PlayersCreateManyArgs>(
      args?: SelectSubset<T, Game_PlayersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Game_Players.
     * @param {Game_PlayersDeleteArgs} args - Arguments to delete one Game_Players.
     * @example
     * // Delete one Game_Players
     * const Game_Players = await prisma.game_Players.delete({
     *   where: {
     *     // ... filter to delete one Game_Players
     *   }
     * })
     * 
    **/
    delete<T extends Game_PlayersDeleteArgs>(
      args: SelectSubset<T, Game_PlayersDeleteArgs>
    ): Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>>

    /**
     * Update one Game_Players.
     * @param {Game_PlayersUpdateArgs} args - Arguments to update one Game_Players.
     * @example
     * // Update one Game_Players
     * const game_Players = await prisma.game_Players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Game_PlayersUpdateArgs>(
      args: SelectSubset<T, Game_PlayersUpdateArgs>
    ): Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>>

    /**
     * Delete zero or more Game_Players.
     * @param {Game_PlayersDeleteManyArgs} args - Arguments to filter Game_Players to delete.
     * @example
     * // Delete a few Game_Players
     * const { count } = await prisma.game_Players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Game_PlayersDeleteManyArgs>(
      args?: SelectSubset<T, Game_PlayersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Game_Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_Players
     * const game_Players = await prisma.game_Players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Game_PlayersUpdateManyArgs>(
      args: SelectSubset<T, Game_PlayersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Game_Players.
     * @param {Game_PlayersUpsertArgs} args - Arguments to update or create a Game_Players.
     * @example
     * // Update or create a Game_Players
     * const game_Players = await prisma.game_Players.upsert({
     *   create: {
     *     // ... data to create a Game_Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_Players we want to update
     *   }
     * })
    **/
    upsert<T extends Game_PlayersUpsertArgs>(
      args: SelectSubset<T, Game_PlayersUpsertArgs>
    ): Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>>

    /**
     * Find one Game_Players that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {Game_PlayersFindUniqueOrThrowArgs} args - Arguments to find a Game_Players
     * @example
     * // Get one Game_Players
     * const game_Players = await prisma.game_Players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Game_PlayersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Game_PlayersFindUniqueOrThrowArgs>
    ): Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>>

    /**
     * Find the first Game_Players that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_PlayersFindFirstOrThrowArgs} args - Arguments to find a Game_Players
     * @example
     * // Get one Game_Players
     * const game_Players = await prisma.game_Players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Game_PlayersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Game_PlayersFindFirstOrThrowArgs>
    ): Prisma__Game_PlayersClient<Game_PlayersGetPayload<T>>

    /**
     * Count the number of Game_Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_PlayersCountArgs} args - Arguments to filter Game_Players to count.
     * @example
     * // Count the number of Game_Players
     * const count = await prisma.game_Players.count({
     *   where: {
     *     // ... the filter for the Game_Players we want to count
     *   }
     * })
    **/
    count<T extends Game_PlayersCountArgs>(
      args?: Subset<T, Game_PlayersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Game_PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game_Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Game_PlayersAggregateArgs>(args: Subset<T, Game_PlayersAggregateArgs>): PrismaPromise<GetGame_PlayersAggregateType<T>>

    /**
     * Group by Game_Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_PlayersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Game_PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Game_PlayersGroupByArgs['orderBy'] }
        : { orderBy?: Game_PlayersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Game_PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGame_PlayersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Game_Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Game_PlayersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    games<T extends GameArgs= {}>(args?: Subset<T, GameArgs>): Prisma__GameClient<GameGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Game_Players base type for findUnique actions
   */
  export type Game_PlayersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
    /**
     * Filter, which Game_Players to fetch.
     * 
    **/
    where: Game_PlayersWhereUniqueInput
  }

  /**
   * Game_Players: findUnique
   */
  export interface Game_PlayersFindUniqueArgs extends Game_PlayersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game_Players base type for findFirst actions
   */
  export type Game_PlayersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
    /**
     * Filter, which Game_Players to fetch.
     * 
    **/
    where?: Game_PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Game_Players to fetch.
     * 
    **/
    orderBy?: Enumerable<Game_PlayersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Game_Players.
     * 
    **/
    cursor?: Game_PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Game_Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Game_Players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Game_Players.
     * 
    **/
    distinct?: Enumerable<Game_PlayersScalarFieldEnum>
  }

  /**
   * Game_Players: findFirst
   */
  export interface Game_PlayersFindFirstArgs extends Game_PlayersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game_Players findMany
   */
  export type Game_PlayersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
    /**
     * Filter, which Game_Players to fetch.
     * 
    **/
    where?: Game_PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Game_Players to fetch.
     * 
    **/
    orderBy?: Enumerable<Game_PlayersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Game_Players.
     * 
    **/
    cursor?: Game_PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Game_Players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Game_Players.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Game_PlayersScalarFieldEnum>
  }


  /**
   * Game_Players create
   */
  export type Game_PlayersCreateArgs = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
    /**
     * The data needed to create a Game_Players.
     * 
    **/
    data: XOR<Game_PlayersCreateInput, Game_PlayersUncheckedCreateInput>
  }


  /**
   * Game_Players createMany
   */
  export type Game_PlayersCreateManyArgs = {
    /**
     * The data used to create many Game_Players.
     * 
    **/
    data: Enumerable<Game_PlayersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Game_Players update
   */
  export type Game_PlayersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
    /**
     * The data needed to update a Game_Players.
     * 
    **/
    data: XOR<Game_PlayersUpdateInput, Game_PlayersUncheckedUpdateInput>
    /**
     * Choose, which Game_Players to update.
     * 
    **/
    where: Game_PlayersWhereUniqueInput
  }


  /**
   * Game_Players updateMany
   */
  export type Game_PlayersUpdateManyArgs = {
    /**
     * The data used to update Game_Players.
     * 
    **/
    data: XOR<Game_PlayersUpdateManyMutationInput, Game_PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Game_Players to update
     * 
    **/
    where?: Game_PlayersWhereInput
  }


  /**
   * Game_Players upsert
   */
  export type Game_PlayersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
    /**
     * The filter to search for the Game_Players to update in case it exists.
     * 
    **/
    where: Game_PlayersWhereUniqueInput
    /**
     * In case the Game_Players found by the `where` argument doesn't exist, create a new Game_Players with this data.
     * 
    **/
    create: XOR<Game_PlayersCreateInput, Game_PlayersUncheckedCreateInput>
    /**
     * In case the Game_Players was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Game_PlayersUpdateInput, Game_PlayersUncheckedUpdateInput>
  }


  /**
   * Game_Players delete
   */
  export type Game_PlayersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
    /**
     * Filter which Game_Players to delete.
     * 
    **/
    where: Game_PlayersWhereUniqueInput
  }


  /**
   * Game_Players deleteMany
   */
  export type Game_PlayersDeleteManyArgs = {
    /**
     * Filter which Game_Players to delete
     * 
    **/
    where?: Game_PlayersWhereInput
  }


  /**
   * Game_Players: findUniqueOrThrow
   */
  export type Game_PlayersFindUniqueOrThrowArgs = Game_PlayersFindUniqueArgsBase
      

  /**
   * Game_Players: findFirstOrThrow
   */
  export type Game_PlayersFindFirstOrThrowArgs = Game_PlayersFindFirstArgsBase
      

  /**
   * Game_Players without action
   */
  export type Game_PlayersArgs = {
    /**
     * Select specific fields to fetch from the Game_Players
     * 
    **/
    select?: Game_PlayersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Game_PlayersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const GameScalarFieldEnum: {
    game_id: 'game_id',
    created_at: 'created_at',
    solution: 'solution'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const Game_PlayersScalarFieldEnum: {
    game_id: 'game_id',
    player_id: 'player_id'
  };

  export type Game_PlayersScalarFieldEnum = (typeof Game_PlayersScalarFieldEnum)[keyof typeof Game_PlayersScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    game_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    solution?: StringFilter | string
    Game_Players?: Game_PlayersListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
    Game_Players?: Game_PlayersOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = {
    game_id?: string
  }

  export type GameOrderByWithAggregationInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameScalarWhereWithAggregatesInput>
    game_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    solution?: StringWithAggregatesFilter | string
  }

  export type Game_PlayersWhereInput = {
    AND?: Enumerable<Game_PlayersWhereInput>
    OR?: Enumerable<Game_PlayersWhereInput>
    NOT?: Enumerable<Game_PlayersWhereInput>
    game_id?: StringFilter | string
    player_id?: StringFilter | string
    games?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type Game_PlayersOrderByWithRelationInput = {
    game_id?: SortOrder
    player_id?: SortOrder
    games?: GameOrderByWithRelationInput
  }

  export type Game_PlayersWhereUniqueInput = {
    game_id_player_id?: Game_PlayersGame_idPlayer_idCompoundUniqueInput
  }

  export type Game_PlayersOrderByWithAggregationInput = {
    game_id?: SortOrder
    player_id?: SortOrder
    _count?: Game_PlayersCountOrderByAggregateInput
    _max?: Game_PlayersMaxOrderByAggregateInput
    _min?: Game_PlayersMinOrderByAggregateInput
  }

  export type Game_PlayersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Game_PlayersScalarWhereWithAggregatesInput>
    OR?: Enumerable<Game_PlayersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Game_PlayersScalarWhereWithAggregatesInput>
    game_id?: StringWithAggregatesFilter | string
    player_id?: StringWithAggregatesFilter | string
  }

  export type GameCreateInput = {
    game_id: string
    created_at?: Date | string
    solution: string
    Game_Players?: Game_PlayersCreateNestedManyWithoutGamesInput
  }

  export type GameUncheckedCreateInput = {
    game_id: string
    created_at?: Date | string
    solution: string
    Game_Players?: Game_PlayersUncheckedCreateNestedManyWithoutGamesInput
  }

  export type GameUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solution?: StringFieldUpdateOperationsInput | string
    Game_Players?: Game_PlayersUpdateManyWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solution?: StringFieldUpdateOperationsInput | string
    Game_Players?: Game_PlayersUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type GameCreateManyInput = {
    game_id: string
    created_at?: Date | string
    solution: string
  }

  export type GameUpdateManyMutationInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solution?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solution?: StringFieldUpdateOperationsInput | string
  }

  export type Game_PlayersCreateInput = {
    player_id: string
    games: GameCreateNestedOneWithoutGame_PlayersInput
  }

  export type Game_PlayersUncheckedCreateInput = {
    game_id: string
    player_id: string
  }

  export type Game_PlayersUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    games?: GameUpdateOneRequiredWithoutGame_PlayersNestedInput
  }

  export type Game_PlayersUncheckedUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type Game_PlayersCreateManyInput = {
    game_id: string
    player_id: string
  }

  export type Game_PlayersUpdateManyMutationInput = {
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type Game_PlayersUncheckedUpdateManyInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Game_PlayersListRelationFilter = {
    every?: Game_PlayersWhereInput
    some?: Game_PlayersWhereInput
    none?: Game_PlayersWhereInput
  }

  export type Game_PlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type Game_PlayersGame_idPlayer_idCompoundUniqueInput = {
    game_id: string
    player_id: string
  }

  export type Game_PlayersCountOrderByAggregateInput = {
    game_id?: SortOrder
    player_id?: SortOrder
  }

  export type Game_PlayersMaxOrderByAggregateInput = {
    game_id?: SortOrder
    player_id?: SortOrder
  }

  export type Game_PlayersMinOrderByAggregateInput = {
    game_id?: SortOrder
    player_id?: SortOrder
  }

  export type Game_PlayersCreateNestedManyWithoutGamesInput = {
    create?: XOR<Enumerable<Game_PlayersCreateWithoutGamesInput>, Enumerable<Game_PlayersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<Game_PlayersCreateOrConnectWithoutGamesInput>
    createMany?: Game_PlayersCreateManyGamesInputEnvelope
    connect?: Enumerable<Game_PlayersWhereUniqueInput>
  }

  export type Game_PlayersUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<Enumerable<Game_PlayersCreateWithoutGamesInput>, Enumerable<Game_PlayersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<Game_PlayersCreateOrConnectWithoutGamesInput>
    createMany?: Game_PlayersCreateManyGamesInputEnvelope
    connect?: Enumerable<Game_PlayersWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Game_PlayersUpdateManyWithoutGamesNestedInput = {
    create?: XOR<Enumerable<Game_PlayersCreateWithoutGamesInput>, Enumerable<Game_PlayersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<Game_PlayersCreateOrConnectWithoutGamesInput>
    upsert?: Enumerable<Game_PlayersUpsertWithWhereUniqueWithoutGamesInput>
    createMany?: Game_PlayersCreateManyGamesInputEnvelope
    set?: Enumerable<Game_PlayersWhereUniqueInput>
    disconnect?: Enumerable<Game_PlayersWhereUniqueInput>
    delete?: Enumerable<Game_PlayersWhereUniqueInput>
    connect?: Enumerable<Game_PlayersWhereUniqueInput>
    update?: Enumerable<Game_PlayersUpdateWithWhereUniqueWithoutGamesInput>
    updateMany?: Enumerable<Game_PlayersUpdateManyWithWhereWithoutGamesInput>
    deleteMany?: Enumerable<Game_PlayersScalarWhereInput>
  }

  export type Game_PlayersUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<Enumerable<Game_PlayersCreateWithoutGamesInput>, Enumerable<Game_PlayersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<Game_PlayersCreateOrConnectWithoutGamesInput>
    upsert?: Enumerable<Game_PlayersUpsertWithWhereUniqueWithoutGamesInput>
    createMany?: Game_PlayersCreateManyGamesInputEnvelope
    set?: Enumerable<Game_PlayersWhereUniqueInput>
    disconnect?: Enumerable<Game_PlayersWhereUniqueInput>
    delete?: Enumerable<Game_PlayersWhereUniqueInput>
    connect?: Enumerable<Game_PlayersWhereUniqueInput>
    update?: Enumerable<Game_PlayersUpdateWithWhereUniqueWithoutGamesInput>
    updateMany?: Enumerable<Game_PlayersUpdateManyWithWhereWithoutGamesInput>
    deleteMany?: Enumerable<Game_PlayersScalarWhereInput>
  }

  export type GameCreateNestedOneWithoutGame_PlayersInput = {
    create?: XOR<GameCreateWithoutGame_PlayersInput, GameUncheckedCreateWithoutGame_PlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutGame_PlayersInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutGame_PlayersNestedInput = {
    create?: XOR<GameCreateWithoutGame_PlayersInput, GameUncheckedCreateWithoutGame_PlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutGame_PlayersInput
    upsert?: GameUpsertWithoutGame_PlayersInput
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutGame_PlayersInput, GameUncheckedUpdateWithoutGame_PlayersInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type Game_PlayersCreateWithoutGamesInput = {
    player_id: string
  }

  export type Game_PlayersUncheckedCreateWithoutGamesInput = {
    player_id: string
  }

  export type Game_PlayersCreateOrConnectWithoutGamesInput = {
    where: Game_PlayersWhereUniqueInput
    create: XOR<Game_PlayersCreateWithoutGamesInput, Game_PlayersUncheckedCreateWithoutGamesInput>
  }

  export type Game_PlayersCreateManyGamesInputEnvelope = {
    data: Enumerable<Game_PlayersCreateManyGamesInput>
    skipDuplicates?: boolean
  }

  export type Game_PlayersUpsertWithWhereUniqueWithoutGamesInput = {
    where: Game_PlayersWhereUniqueInput
    update: XOR<Game_PlayersUpdateWithoutGamesInput, Game_PlayersUncheckedUpdateWithoutGamesInput>
    create: XOR<Game_PlayersCreateWithoutGamesInput, Game_PlayersUncheckedCreateWithoutGamesInput>
  }

  export type Game_PlayersUpdateWithWhereUniqueWithoutGamesInput = {
    where: Game_PlayersWhereUniqueInput
    data: XOR<Game_PlayersUpdateWithoutGamesInput, Game_PlayersUncheckedUpdateWithoutGamesInput>
  }

  export type Game_PlayersUpdateManyWithWhereWithoutGamesInput = {
    where: Game_PlayersScalarWhereInput
    data: XOR<Game_PlayersUpdateManyMutationInput, Game_PlayersUncheckedUpdateManyWithoutGame_PlayersInput>
  }

  export type Game_PlayersScalarWhereInput = {
    AND?: Enumerable<Game_PlayersScalarWhereInput>
    OR?: Enumerable<Game_PlayersScalarWhereInput>
    NOT?: Enumerable<Game_PlayersScalarWhereInput>
    game_id?: StringFilter | string
    player_id?: StringFilter | string
  }

  export type GameCreateWithoutGame_PlayersInput = {
    game_id: string
    created_at?: Date | string
    solution: string
  }

  export type GameUncheckedCreateWithoutGame_PlayersInput = {
    game_id: string
    created_at?: Date | string
    solution: string
  }

  export type GameCreateOrConnectWithoutGame_PlayersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGame_PlayersInput, GameUncheckedCreateWithoutGame_PlayersInput>
  }

  export type GameUpsertWithoutGame_PlayersInput = {
    update: XOR<GameUpdateWithoutGame_PlayersInput, GameUncheckedUpdateWithoutGame_PlayersInput>
    create: XOR<GameCreateWithoutGame_PlayersInput, GameUncheckedCreateWithoutGame_PlayersInput>
  }

  export type GameUpdateWithoutGame_PlayersInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solution?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateWithoutGame_PlayersInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solution?: StringFieldUpdateOperationsInput | string
  }

  export type Game_PlayersCreateManyGamesInput = {
    player_id: string
  }

  export type Game_PlayersUpdateWithoutGamesInput = {
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type Game_PlayersUncheckedUpdateWithoutGamesInput = {
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type Game_PlayersUncheckedUpdateManyWithoutGame_PlayersInput = {
    player_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}