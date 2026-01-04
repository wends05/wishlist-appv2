/**
 * Type representing an error result from a function wrapped in tryCatch
 */
type FunctionError<E extends string> = {
  success: false;
  error: E;
  data: null;
};

/**
 * Type representing a successful result from a function wrapped in tryCatch
 */
type FunctionSuccess<T> = {
  success: true;
  data: T;
  error: null;
};

export type TryCatchReturn<T, E extends string = string> =
  | FunctionError<E>
  | FunctionSuccess<T>;

/**
 * A function for wrapping a promise to standardize error handling.
 * @param promise - A promise to be executed.
 * @param generalError - A general error message to use if the caught error is not an instance of Error.
 * @returns A promise that resolves to a standardized success or error object.
 * @example
 * const result = await tryCatch(fetch('/api/data'));
 * if (result.success) console.log(result.data);
 */
export function tryCatch<T>(
  promise: Promise<T>,
  generalError?: string
): Promise<TryCatchReturn<T, string>>;

/**
 * A function for wrapping asynchronous functions to standardize error handling.
 * @param fn - An asynchronous function to be executed.
 * @param generalError - A general error message to use if the caught error is not an instance of Error.
 * @returns A new function that, when called, returns a promise resolving to a standardized success or error object.
 *
 * @example
 * const safeFetch = tryCatch(async (url: string) => {
 *   const response = await fetch(url);
 *   return response.json();
 * });
 *
 * const result = await safeFetch('/api/data');
 * if (result.success) console.log(result.data);
 */
export function tryCatch<Args extends unknown[], O>(
  fn: (...args: Args) => Promise<O>,
  generalError?: string
): (...args: Args) => Promise<TryCatchReturn<O, string>>;

/**
 * A function for wrapping synchronous functions to standardize error handling.
 * @param fn - A synchronous function to be executed.
 * @param generalError - A general error message to use if the caught error is not an instance of Error.
 * @returns A new function that, when called, returns a promise resolving to a standardized success or error object.
 *
 * @example
 * const safeParse = tryCatch((jsonString: string) => {
 *   return JSON.parse(jsonString);
 * });
 *
 * const result = await safeParse('{"key": "value"}');
 * if (result.success) console.log(result.data)=-68r4
 */
export function tryCatch<Args extends unknown[], O>(
  fn: (...args: Args) => O,
  generalError?: string
):
  | Promise<TryCatchReturn<O, string>>
  | ((...args: Args) => Promise<TryCatchReturn<O, string>>);

export function tryCatch<Args extends unknown[], O>(
  fnOrPromise: ((...args: Args) => Promise<O>) | Promise<O>,
  generalError: string = "An error has occured"
) {
  // Handlers to format success and error responses
  const handleSuccess = (data: O): FunctionSuccess<O> => ({
    success: true,
    data,
    error: null,
  });

  // Handlers to format success and error responses
  const handleError = (error: unknown): FunctionError<string> => ({
    data: null,
    success: false,
    error: error instanceof Error ? error.message : generalError,
  });

  if (fnOrPromise instanceof Promise) {
    return fnOrPromise.then(handleSuccess).catch(handleError);
  }
  return async (...args: Args) => {
    try {
      const data = await fnOrPromise(...args);
      return handleSuccess(data);
    } catch (error) {
      return handleError(error);
    }
  };
}
