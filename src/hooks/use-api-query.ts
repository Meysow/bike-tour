"use client";

import { HttpClient } from "@/lib/api/http-client";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook to perform a GET request to the given URL and store the result in the
 * query cache.
 *
 * @param key - The key to use for the query cache.
 * @param url - The URL to query.
 *
 * @returns An object containing the query result and other query-related
 * utilities.
 */
export function useApiQuery<T>(key: string[], url: string): ReturnType<typeof useQuery> {
  return useQuery({
    // Use the given key to store the result in the query cache.
    queryKey: key,
    // Perform the GET request when the query is first rendered.
    queryFn: () => HttpClient.get<T>(url),
  });
}
