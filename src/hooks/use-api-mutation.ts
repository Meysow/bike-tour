"use client";

import { HttpClient } from "@/lib/api/http-client";
import { useState } from "react";

interface MutationOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

/**
 * Custom React hook for performing API mutations (POST, PUT, DELETE).
 *
 * @param url - The URL endpoint for the API request.
 * @param method - The HTTP method ("POST", "PUT", "DELETE").
 * @param options - Optional callbacks for success and error handling.
 * @returns An object containing the mutate function, loading state, and error state.
 */
export function useApiMutation<T>(
  url: string,
  method: "POST" | "PUT" | "DELETE",
  options: MutationOptions<T> = {}
) {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState<Error | null>(null); // Error state

  /**
   * Function to initiate the mutation request.
   *
   * @param data - Optional data to be sent with the request.
   * @returns A promise resolving to the result of the API call.
   * @throws An error if the request fails.
   */
  async function mutate(data?: any) {
    setIsLoading(true);
    setError(null);

    try {
      let result;
      switch (method) {
        case "POST":
          result = await HttpClient.post<T>(url, data); // Handle POST request
          break;
        case "PUT":
          result = await HttpClient.put<T>(url, data); // Handle PUT request
          break;
        case "DELETE":
          await HttpClient.delete(url); // Handle DELETE request
          result = undefined;
          break;
      }
      options.onSuccess?.(result as T); // Call onSuccess callback if provided
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An error occurred");
      setError(error);
      options.onError?.(error); // Call onError callback if provided
      throw error;
    } finally {
      setIsLoading(false); // Reset loading state
    }
  }

  return {
    mutate,
    isLoading,
    error,
  };
}
