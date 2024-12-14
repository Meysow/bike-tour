export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}



export const handleApiError = (error: unknown): Response => {
  const apiError = error instanceof ApiError ? error : undefined;

  const response = {
    error: apiError?.message ?? "Internal server error",
  };

  const status = apiError?.statusCode ?? 500;

  return new Response(JSON.stringify(response), { status });
};
