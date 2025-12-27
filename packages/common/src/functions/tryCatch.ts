type FunctionError<T> = {
  success: false;
  error: string;
  data: T;
};
type FunctionSuccess<T> = {
  success: true;
  data: T;
};

export type TryCatchReturn<T> = FunctionError<T> | FunctionSuccess<T>;

export async function tryCatch<T>(
  fn: Promise<T> | (() => T),
  errorMessage = "An error occurred"
): Promise<TryCatchReturn<T>> {
  try {
    const data = await (typeof fn === "function" ? fn() : fn);
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : errorMessage,
      data: null as unknown as T,
    };
  }
}
