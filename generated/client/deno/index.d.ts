
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model games
 * 
 */
export type games = {
  game_id: string
  created_at: Date | null
  solution: string | null
}

/**
 * Model players
 * 
 */
export type players = {
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
 * const games = await prisma.games.findMany()
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
   * const games = await prisma.games.findMany()
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
   * `prisma.games`: Exposes CRUD operations for the **games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.games.findMany()
    * ```
    */
  get games(): Prisma.gamesDelegate<GlobalReject>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.playersDelegate<GlobalReject>;
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
    games: 'games',
    players: 'players'
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
   * Count Type GamesCountOutputType
   */


  export type GamesCountOutputType = {
    players: number
  }

  export type GamesCountOutputTypeSelect = {
    players?: boolean
  }

  export type GamesCountOutputTypeGetPayload<S extends boolean | null | undefined | GamesCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GamesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GamesCountOutputTypeArgs)
    ? GamesCountOutputType 
    : S extends { select: any } & (GamesCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GamesCountOutputType ? GamesCountOutputType[P] : never
  } 
      : GamesCountOutputType




  // Custom InputTypes

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GamesCountOutputType
     * 
    **/
    select?: GamesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model games
   */


  export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  export type GamesMinAggregateOutputType = {
    game_id: string | null
    created_at: Date | null
    solution: string | null
  }

  export type GamesMaxAggregateOutputType = {
    game_id: string | null
    created_at: Date | null
    solution: string | null
  }

  export type GamesCountAggregateOutputType = {
    game_id: number
    created_at: number
    solution: number
    _all: number
  }


  export type GamesMinAggregateInputType = {
    game_id?: true
    created_at?: true
    solution?: true
  }

  export type GamesMaxAggregateInputType = {
    game_id?: true
    created_at?: true
    solution?: true
  }

  export type GamesCountAggregateInputType = {
    game_id?: true
    created_at?: true
    solution?: true
    _all?: true
  }

  export type GamesAggregateArgs = {
    /**
     * Filter which games to aggregate.
     * 
    **/
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     * 
    **/
    orderBy?: Enumerable<gamesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned games
    **/
    _count?: true | GamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType
  }

  export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
        [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGames[P]>
      : GetScalarType<T[P], AggregateGames[P]>
  }




  export type GamesGroupByArgs = {
    where?: gamesWhereInput
    orderBy?: Enumerable<gamesOrderByWithAggregationInput>
    by: Array<GamesScalarFieldEnum>
    having?: gamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamesCountAggregateInputType | true
    _min?: GamesMinAggregateInputType
    _max?: GamesMaxAggregateInputType
  }


  export type GamesGroupByOutputType = {
    game_id: string
    created_at: Date | null
    solution: string | null
    _count: GamesCountAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  type GetGamesGroupByPayload<T extends GamesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamesGroupByOutputType[P]>
            : GetScalarType<T[P], GamesGroupByOutputType[P]>
        }
      >
    >


  export type gamesSelect = {
    game_id?: boolean
    created_at?: boolean
    solution?: boolean
    players?: boolean | playersFindManyArgs
    _count?: boolean | GamesCountOutputTypeArgs
  }


  export type gamesInclude = {
    players?: boolean | playersFindManyArgs
    _count?: boolean | GamesCountOutputTypeArgs
  } 

  export type gamesGetPayload<S extends boolean | null | undefined | gamesArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? games :
    S extends undefined ? never :
    S extends { include: any } & (gamesArgs | gamesFindManyArgs)
    ? games  & {
    [P in TrueKeys<S['include']>]:
        P extends 'players' ? Array < playersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? GamesCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (gamesArgs | gamesFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'players' ? Array < playersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? GamesCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof games ? games[P] : never
  } 
      : games


  type gamesCountArgs = Merge<
    Omit<gamesFindManyArgs, 'select' | 'include'> & {
      select?: GamesCountAggregateInputType | true
    }
  >

  export interface gamesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Games that matches the filter.
     * @param {gamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends gamesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, gamesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'games'> extends True ? Prisma__gamesClient<gamesGetPayload<T>> : Prisma__gamesClient<gamesGetPayload<T> | null, null>

    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends gamesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, gamesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'games'> extends True ? Prisma__gamesClient<gamesGetPayload<T>> : Prisma__gamesClient<gamesGetPayload<T> | null, null>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     * 
     * // Only select the `game_id`
     * const gamesWithGame_idOnly = await prisma.games.findMany({ select: { game_id: true } })
     * 
    **/
    findMany<T extends gamesFindManyArgs>(
      args?: SelectSubset<T, gamesFindManyArgs>
    ): PrismaPromise<Array<gamesGetPayload<T>>>

    /**
     * Create a Games.
     * @param {gamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     * 
    **/
    create<T extends gamesCreateArgs>(
      args: SelectSubset<T, gamesCreateArgs>
    ): Prisma__gamesClient<gamesGetPayload<T>>

    /**
     * Create many Games.
     *     @param {gamesCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const games = await prisma.games.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends gamesCreateManyArgs>(
      args?: SelectSubset<T, gamesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Games.
     * @param {gamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     * 
    **/
    delete<T extends gamesDeleteArgs>(
      args: SelectSubset<T, gamesDeleteArgs>
    ): Prisma__gamesClient<gamesGetPayload<T>>

    /**
     * Update one Games.
     * @param {gamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends gamesUpdateArgs>(
      args: SelectSubset<T, gamesUpdateArgs>
    ): Prisma__gamesClient<gamesGetPayload<T>>

    /**
     * Delete zero or more Games.
     * @param {gamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends gamesDeleteManyArgs>(
      args?: SelectSubset<T, gamesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends gamesUpdateManyArgs>(
      args: SelectSubset<T, gamesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Games.
     * @param {gamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
    **/
    upsert<T extends gamesUpsertArgs>(
      args: SelectSubset<T, gamesUpsertArgs>
    ): Prisma__gamesClient<gamesGetPayload<T>>

    /**
     * Find one Games that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {gamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends gamesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, gamesFindUniqueOrThrowArgs>
    ): Prisma__gamesClient<gamesGetPayload<T>>

    /**
     * Find the first Games that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends gamesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, gamesFindFirstOrThrowArgs>
    ): Prisma__gamesClient<gamesGetPayload<T>>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gamesCountArgs>(
      args?: Subset<T, gamesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GamesAggregateArgs>(args: Subset<T, GamesAggregateArgs>): PrismaPromise<GetGamesAggregateType<T>>

    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesGroupByArgs} args - Group by arguments.
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
      T extends GamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamesGroupByArgs['orderBy'] }
        : { orderBy?: GamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__gamesClient<T, Null = never> implements PrismaPromise<T> {
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

    players<T extends playersFindManyArgs= {}>(args?: Subset<T, playersFindManyArgs>): PrismaPromise<Array<playersGetPayload<T>>| Null>;

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
   * games base type for findUnique actions
   */
  export type gamesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
    /**
     * Filter, which games to fetch.
     * 
    **/
    where: gamesWhereUniqueInput
  }

  /**
   * games: findUnique
   */
  export interface gamesFindUniqueArgs extends gamesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * games base type for findFirst actions
   */
  export type gamesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
    /**
     * Filter, which games to fetch.
     * 
    **/
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     * 
    **/
    orderBy?: Enumerable<gamesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     * 
    **/
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     * 
    **/
    distinct?: Enumerable<GamesScalarFieldEnum>
  }

  /**
   * games: findFirst
   */
  export interface gamesFindFirstArgs extends gamesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * games findMany
   */
  export type gamesFindManyArgs = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
    /**
     * Filter, which games to fetch.
     * 
    **/
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     * 
    **/
    orderBy?: Enumerable<gamesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing games.
     * 
    **/
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GamesScalarFieldEnum>
  }


  /**
   * games create
   */
  export type gamesCreateArgs = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
    /**
     * The data needed to create a games.
     * 
    **/
    data: XOR<gamesCreateInput, gamesUncheckedCreateInput>
  }


  /**
   * games createMany
   */
  export type gamesCreateManyArgs = {
    /**
     * The data used to create many games.
     * 
    **/
    data: Enumerable<gamesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * games update
   */
  export type gamesUpdateArgs = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
    /**
     * The data needed to update a games.
     * 
    **/
    data: XOR<gamesUpdateInput, gamesUncheckedUpdateInput>
    /**
     * Choose, which games to update.
     * 
    **/
    where: gamesWhereUniqueInput
  }


  /**
   * games updateMany
   */
  export type gamesUpdateManyArgs = {
    /**
     * The data used to update games.
     * 
    **/
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     * 
    **/
    where?: gamesWhereInput
  }


  /**
   * games upsert
   */
  export type gamesUpsertArgs = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
    /**
     * The filter to search for the games to update in case it exists.
     * 
    **/
    where: gamesWhereUniqueInput
    /**
     * In case the games found by the `where` argument doesn't exist, create a new games with this data.
     * 
    **/
    create: XOR<gamesCreateInput, gamesUncheckedCreateInput>
    /**
     * In case the games was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<gamesUpdateInput, gamesUncheckedUpdateInput>
  }


  /**
   * games delete
   */
  export type gamesDeleteArgs = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
    /**
     * Filter which games to delete.
     * 
    **/
    where: gamesWhereUniqueInput
  }


  /**
   * games deleteMany
   */
  export type gamesDeleteManyArgs = {
    /**
     * Filter which games to delete
     * 
    **/
    where?: gamesWhereInput
  }


  /**
   * games: findUniqueOrThrow
   */
  export type gamesFindUniqueOrThrowArgs = gamesFindUniqueArgsBase
      

  /**
   * games: findFirstOrThrow
   */
  export type gamesFindFirstOrThrowArgs = gamesFindFirstArgsBase
      

  /**
   * games without action
   */
  export type gamesArgs = {
    /**
     * Select specific fields to fetch from the games
     * 
    **/
    select?: gamesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: gamesInclude | null
  }



  /**
   * Model players
   */


  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersMinAggregateOutputType = {
    game_id: string | null
    player_id: string | null
  }

  export type PlayersMaxAggregateOutputType = {
    game_id: string | null
    player_id: string | null
  }

  export type PlayersCountAggregateOutputType = {
    game_id: number
    player_id: number
    _all: number
  }


  export type PlayersMinAggregateInputType = {
    game_id?: true
    player_id?: true
  }

  export type PlayersMaxAggregateInputType = {
    game_id?: true
    player_id?: true
  }

  export type PlayersCountAggregateInputType = {
    game_id?: true
    player_id?: true
    _all?: true
  }

  export type PlayersAggregateArgs = {
    /**
     * Filter which players to aggregate.
     * 
    **/
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     * 
    **/
    orderBy?: Enumerable<playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs = {
    where?: playersWhereInput
    orderBy?: Enumerable<playersOrderByWithAggregationInput>
    by: Array<PlayersScalarFieldEnum>
    having?: playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }


  export type PlayersGroupByOutputType = {
    game_id: string
    player_id: string
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type playersSelect = {
    game_id?: boolean
    player_id?: boolean
    games?: boolean | gamesArgs
  }


  export type playersInclude = {
    games?: boolean | gamesArgs
  } 

  export type playersGetPayload<S extends boolean | null | undefined | playersArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? players :
    S extends undefined ? never :
    S extends { include: any } & (playersArgs | playersFindManyArgs)
    ? players  & {
    [P in TrueKeys<S['include']>]:
        P extends 'games' ? gamesGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (playersArgs | playersFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'games' ? gamesGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof players ? players[P] : never
  } 
      : players


  type playersCountArgs = Merge<
    Omit<playersFindManyArgs, 'select' | 'include'> & {
      select?: PlayersCountAggregateInputType | true
    }
  >

  export interface playersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Players that matches the filter.
     * @param {playersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends playersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, playersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'players'> extends True ? Prisma__playersClient<playersGetPayload<T>> : Prisma__playersClient<playersGetPayload<T> | null, null>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends playersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, playersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'players'> extends True ? Prisma__playersClient<playersGetPayload<T>> : Prisma__playersClient<playersGetPayload<T> | null, null>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `game_id`
     * const playersWithGame_idOnly = await prisma.players.findMany({ select: { game_id: true } })
     * 
    **/
    findMany<T extends playersFindManyArgs>(
      args?: SelectSubset<T, playersFindManyArgs>
    ): PrismaPromise<Array<playersGetPayload<T>>>

    /**
     * Create a Players.
     * @param {playersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
    **/
    create<T extends playersCreateArgs>(
      args: SelectSubset<T, playersCreateArgs>
    ): Prisma__playersClient<playersGetPayload<T>>

    /**
     * Create many Players.
     *     @param {playersCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const players = await prisma.players.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends playersCreateManyArgs>(
      args?: SelectSubset<T, playersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Players.
     * @param {playersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
    **/
    delete<T extends playersDeleteArgs>(
      args: SelectSubset<T, playersDeleteArgs>
    ): Prisma__playersClient<playersGetPayload<T>>

    /**
     * Update one Players.
     * @param {playersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends playersUpdateArgs>(
      args: SelectSubset<T, playersUpdateArgs>
    ): Prisma__playersClient<playersGetPayload<T>>

    /**
     * Delete zero or more Players.
     * @param {playersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends playersDeleteManyArgs>(
      args?: SelectSubset<T, playersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends playersUpdateManyArgs>(
      args: SelectSubset<T, playersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Players.
     * @param {playersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
    **/
    upsert<T extends playersUpsertArgs>(
      args: SelectSubset<T, playersUpsertArgs>
    ): Prisma__playersClient<playersGetPayload<T>>

    /**
     * Find one Players that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {playersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends playersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, playersFindUniqueOrThrowArgs>
    ): Prisma__playersClient<playersGetPayload<T>>

    /**
     * Find the first Players that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends playersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, playersFindFirstOrThrowArgs>
    ): Prisma__playersClient<playersGetPayload<T>>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playersCountArgs>(
      args?: Subset<T, playersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
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
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__playersClient<T, Null = never> implements PrismaPromise<T> {
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

    games<T extends gamesArgs= {}>(args?: Subset<T, gamesArgs>): Prisma__gamesClient<gamesGetPayload<T> | Null>;

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
   * players base type for findUnique actions
   */
  export type playersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
    /**
     * Filter, which players to fetch.
     * 
    **/
    where: playersWhereUniqueInput
  }

  /**
   * players: findUnique
   */
  export interface playersFindUniqueArgs extends playersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * players base type for findFirst actions
   */
  export type playersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
    /**
     * Filter, which players to fetch.
     * 
    **/
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     * 
    **/
    orderBy?: Enumerable<playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     * 
    **/
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     * 
    **/
    distinct?: Enumerable<PlayersScalarFieldEnum>
  }

  /**
   * players: findFirst
   */
  export interface playersFindFirstArgs extends playersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * players findMany
   */
  export type playersFindManyArgs = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
    /**
     * Filter, which players to fetch.
     * 
    **/
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     * 
    **/
    orderBy?: Enumerable<playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     * 
    **/
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PlayersScalarFieldEnum>
  }


  /**
   * players create
   */
  export type playersCreateArgs = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
    /**
     * The data needed to create a players.
     * 
    **/
    data: XOR<playersCreateInput, playersUncheckedCreateInput>
  }


  /**
   * players createMany
   */
  export type playersCreateManyArgs = {
    /**
     * The data used to create many players.
     * 
    **/
    data: Enumerable<playersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * players update
   */
  export type playersUpdateArgs = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
    /**
     * The data needed to update a players.
     * 
    **/
    data: XOR<playersUpdateInput, playersUncheckedUpdateInput>
    /**
     * Choose, which players to update.
     * 
    **/
    where: playersWhereUniqueInput
  }


  /**
   * players updateMany
   */
  export type playersUpdateManyArgs = {
    /**
     * The data used to update players.
     * 
    **/
    data: XOR<playersUpdateManyMutationInput, playersUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     * 
    **/
    where?: playersWhereInput
  }


  /**
   * players upsert
   */
  export type playersUpsertArgs = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
    /**
     * The filter to search for the players to update in case it exists.
     * 
    **/
    where: playersWhereUniqueInput
    /**
     * In case the players found by the `where` argument doesn't exist, create a new players with this data.
     * 
    **/
    create: XOR<playersCreateInput, playersUncheckedCreateInput>
    /**
     * In case the players was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<playersUpdateInput, playersUncheckedUpdateInput>
  }


  /**
   * players delete
   */
  export type playersDeleteArgs = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
    /**
     * Filter which players to delete.
     * 
    **/
    where: playersWhereUniqueInput
  }


  /**
   * players deleteMany
   */
  export type playersDeleteManyArgs = {
    /**
     * Filter which players to delete
     * 
    **/
    where?: playersWhereInput
  }


  /**
   * players: findUniqueOrThrow
   */
  export type playersFindUniqueOrThrowArgs = playersFindUniqueArgsBase
      

  /**
   * players: findFirstOrThrow
   */
  export type playersFindFirstOrThrowArgs = playersFindFirstArgsBase
      

  /**
   * players without action
   */
  export type playersArgs = {
    /**
     * Select specific fields to fetch from the players
     * 
    **/
    select?: playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const GamesScalarFieldEnum: {
    game_id: 'game_id',
    created_at: 'created_at',
    solution: 'solution'
  };

  export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    game_id: 'game_id',
    player_id: 'player_id'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


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


  export type gamesWhereInput = {
    AND?: Enumerable<gamesWhereInput>
    OR?: Enumerable<gamesWhereInput>
    NOT?: Enumerable<gamesWhereInput>
    game_id?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    solution?: StringNullableFilter | string | null
    players?: PlayersListRelationFilter
  }

  export type gamesOrderByWithRelationInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
    players?: playersOrderByRelationAggregateInput
  }

  export type gamesWhereUniqueInput = {
    game_id?: string
  }

  export type gamesOrderByWithAggregationInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
    _count?: gamesCountOrderByAggregateInput
    _max?: gamesMaxOrderByAggregateInput
    _min?: gamesMinOrderByAggregateInput
  }

  export type gamesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<gamesScalarWhereWithAggregatesInput>
    OR?: Enumerable<gamesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<gamesScalarWhereWithAggregatesInput>
    game_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    solution?: StringNullableWithAggregatesFilter | string | null
  }

  export type playersWhereInput = {
    AND?: Enumerable<playersWhereInput>
    OR?: Enumerable<playersWhereInput>
    NOT?: Enumerable<playersWhereInput>
    game_id?: StringFilter | string
    player_id?: StringFilter | string
    games?: XOR<GamesRelationFilter, gamesWhereInput>
  }

  export type playersOrderByWithRelationInput = {
    game_id?: SortOrder
    player_id?: SortOrder
    games?: gamesOrderByWithRelationInput
  }

  export type playersWhereUniqueInput = {
    game_id_player_id?: playersGame_idPlayer_idCompoundUniqueInput
  }

  export type playersOrderByWithAggregationInput = {
    game_id?: SortOrder
    player_id?: SortOrder
    _count?: playersCountOrderByAggregateInput
    _max?: playersMaxOrderByAggregateInput
    _min?: playersMinOrderByAggregateInput
  }

  export type playersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<playersScalarWhereWithAggregatesInput>
    OR?: Enumerable<playersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<playersScalarWhereWithAggregatesInput>
    game_id?: StringWithAggregatesFilter | string
    player_id?: StringWithAggregatesFilter | string
  }

  export type gamesCreateInput = {
    game_id: string
    created_at?: Date | string | null
    solution?: string | null
    players?: playersCreateNestedManyWithoutGamesInput
  }

  export type gamesUncheckedCreateInput = {
    game_id: string
    created_at?: Date | string | null
    solution?: string | null
    players?: playersUncheckedCreateNestedManyWithoutGamesInput
  }

  export type gamesUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    players?: playersUpdateManyWithoutGamesNestedInput
  }

  export type gamesUncheckedUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    players?: playersUncheckedUpdateManyWithoutGamesNestedInput
  }

  export type gamesCreateManyInput = {
    game_id: string
    created_at?: Date | string | null
    solution?: string | null
  }

  export type gamesUpdateManyMutationInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gamesUncheckedUpdateManyInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playersCreateInput = {
    player_id: string
    games: gamesCreateNestedOneWithoutPlayersInput
  }

  export type playersUncheckedCreateInput = {
    game_id: string
    player_id: string
  }

  export type playersUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    games?: gamesUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type playersUncheckedUpdateInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type playersCreateManyInput = {
    game_id: string
    player_id: string
  }

  export type playersUpdateManyMutationInput = {
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type playersUncheckedUpdateManyInput = {
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

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type PlayersListRelationFilter = {
    every?: playersWhereInput
    some?: playersWhereInput
    none?: playersWhereInput
  }

  export type playersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gamesCountOrderByAggregateInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
  }

  export type gamesMaxOrderByAggregateInput = {
    game_id?: SortOrder
    created_at?: SortOrder
    solution?: SortOrder
  }

  export type gamesMinOrderByAggregateInput = {
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

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type GamesRelationFilter = {
    is?: gamesWhereInput
    isNot?: gamesWhereInput
  }

  export type playersGame_idPlayer_idCompoundUniqueInput = {
    game_id: string
    player_id: string
  }

  export type playersCountOrderByAggregateInput = {
    game_id?: SortOrder
    player_id?: SortOrder
  }

  export type playersMaxOrderByAggregateInput = {
    game_id?: SortOrder
    player_id?: SortOrder
  }

  export type playersMinOrderByAggregateInput = {
    game_id?: SortOrder
    player_id?: SortOrder
  }

  export type playersCreateNestedManyWithoutGamesInput = {
    create?: XOR<Enumerable<playersCreateWithoutGamesInput>, Enumerable<playersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<playersCreateOrConnectWithoutGamesInput>
    createMany?: playersCreateManyGamesInputEnvelope
    connect?: Enumerable<playersWhereUniqueInput>
  }

  export type playersUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<Enumerable<playersCreateWithoutGamesInput>, Enumerable<playersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<playersCreateOrConnectWithoutGamesInput>
    createMany?: playersCreateManyGamesInputEnvelope
    connect?: Enumerable<playersWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type playersUpdateManyWithoutGamesNestedInput = {
    create?: XOR<Enumerable<playersCreateWithoutGamesInput>, Enumerable<playersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<playersCreateOrConnectWithoutGamesInput>
    upsert?: Enumerable<playersUpsertWithWhereUniqueWithoutGamesInput>
    createMany?: playersCreateManyGamesInputEnvelope
    set?: Enumerable<playersWhereUniqueInput>
    disconnect?: Enumerable<playersWhereUniqueInput>
    delete?: Enumerable<playersWhereUniqueInput>
    connect?: Enumerable<playersWhereUniqueInput>
    update?: Enumerable<playersUpdateWithWhereUniqueWithoutGamesInput>
    updateMany?: Enumerable<playersUpdateManyWithWhereWithoutGamesInput>
    deleteMany?: Enumerable<playersScalarWhereInput>
  }

  export type playersUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<Enumerable<playersCreateWithoutGamesInput>, Enumerable<playersUncheckedCreateWithoutGamesInput>>
    connectOrCreate?: Enumerable<playersCreateOrConnectWithoutGamesInput>
    upsert?: Enumerable<playersUpsertWithWhereUniqueWithoutGamesInput>
    createMany?: playersCreateManyGamesInputEnvelope
    set?: Enumerable<playersWhereUniqueInput>
    disconnect?: Enumerable<playersWhereUniqueInput>
    delete?: Enumerable<playersWhereUniqueInput>
    connect?: Enumerable<playersWhereUniqueInput>
    update?: Enumerable<playersUpdateWithWhereUniqueWithoutGamesInput>
    updateMany?: Enumerable<playersUpdateManyWithWhereWithoutGamesInput>
    deleteMany?: Enumerable<playersScalarWhereInput>
  }

  export type gamesCreateNestedOneWithoutPlayersInput = {
    create?: XOR<gamesCreateWithoutPlayersInput, gamesUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: gamesCreateOrConnectWithoutPlayersInput
    connect?: gamesWhereUniqueInput
  }

  export type gamesUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<gamesCreateWithoutPlayersInput, gamesUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: gamesCreateOrConnectWithoutPlayersInput
    upsert?: gamesUpsertWithoutPlayersInput
    connect?: gamesWhereUniqueInput
    update?: XOR<gamesUpdateWithoutPlayersInput, gamesUncheckedUpdateWithoutPlayersInput>
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

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type playersCreateWithoutGamesInput = {
    player_id: string
  }

  export type playersUncheckedCreateWithoutGamesInput = {
    player_id: string
  }

  export type playersCreateOrConnectWithoutGamesInput = {
    where: playersWhereUniqueInput
    create: XOR<playersCreateWithoutGamesInput, playersUncheckedCreateWithoutGamesInput>
  }

  export type playersCreateManyGamesInputEnvelope = {
    data: Enumerable<playersCreateManyGamesInput>
    skipDuplicates?: boolean
  }

  export type playersUpsertWithWhereUniqueWithoutGamesInput = {
    where: playersWhereUniqueInput
    update: XOR<playersUpdateWithoutGamesInput, playersUncheckedUpdateWithoutGamesInput>
    create: XOR<playersCreateWithoutGamesInput, playersUncheckedCreateWithoutGamesInput>
  }

  export type playersUpdateWithWhereUniqueWithoutGamesInput = {
    where: playersWhereUniqueInput
    data: XOR<playersUpdateWithoutGamesInput, playersUncheckedUpdateWithoutGamesInput>
  }

  export type playersUpdateManyWithWhereWithoutGamesInput = {
    where: playersScalarWhereInput
    data: XOR<playersUpdateManyMutationInput, playersUncheckedUpdateManyWithoutPlayersInput>
  }

  export type playersScalarWhereInput = {
    AND?: Enumerable<playersScalarWhereInput>
    OR?: Enumerable<playersScalarWhereInput>
    NOT?: Enumerable<playersScalarWhereInput>
    game_id?: StringFilter | string
    player_id?: StringFilter | string
  }

  export type gamesCreateWithoutPlayersInput = {
    game_id: string
    created_at?: Date | string | null
    solution?: string | null
  }

  export type gamesUncheckedCreateWithoutPlayersInput = {
    game_id: string
    created_at?: Date | string | null
    solution?: string | null
  }

  export type gamesCreateOrConnectWithoutPlayersInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutPlayersInput, gamesUncheckedCreateWithoutPlayersInput>
  }

  export type gamesUpsertWithoutPlayersInput = {
    update: XOR<gamesUpdateWithoutPlayersInput, gamesUncheckedUpdateWithoutPlayersInput>
    create: XOR<gamesCreateWithoutPlayersInput, gamesUncheckedCreateWithoutPlayersInput>
  }

  export type gamesUpdateWithoutPlayersInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gamesUncheckedUpdateWithoutPlayersInput = {
    game_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playersCreateManyGamesInput = {
    player_id: string
  }

  export type playersUpdateWithoutGamesInput = {
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type playersUncheckedUpdateWithoutGamesInput = {
    player_id?: StringFieldUpdateOperationsInput | string
  }

  export type playersUncheckedUpdateManyWithoutPlayersInput = {
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