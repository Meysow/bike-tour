export class ApiError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}


export const handleApiError = (error: unknown): Response => {
  const response = { error: "Internal server error" };

  if (error instanceof ApiError) {
    response.error = error.message;
    return new Response(JSON.stringify(response), { status: error.statusCode });
  }

  return new Response(JSON.stringify(response), { status: 500 });
};
