/**
 * An HTTP client class providing a simple interface for sending HTTP requests.
 * The class is static and can be used without creating an instance.
 */

export class HttpClient {
  /**
   * Sends an HTTP request to the specified URL with the given options.
   *
   * @param url - The URL to which the request is sent.
   * @param options - An object containing request options such as method, headers, and body.
   * @returns A promise that resolves to the response data.
   * @throws An error if the response is not successful.
   */
  private static async request<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    // Send the HTTP request using fetch
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    // Check if the response is not ok (i.e., status is not in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse and return the JSON response
    return response.json();
  }

  /**
   * Sends a GET request to the specified URL.
   * @param url - The URL to which the request is sent.
   * @returns A promise that resolves to the response data.
   * @throws An error if the response is not successful.
   */
  static async get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }

  /**
   * Sends a POST request to the specified URL with the given data.
   * @param url - The URL to which the request is sent.
   * @param data - The data to send with the request.
   * @returns A promise that resolves to the response data.
   * @throws An error if the response is not successful.
   */
  static async post<T>(url: string, data: any): Promise<T> {
    return this.request<T>(url, {
      method: "POST",
      body: data,
    });
  }

  /**
   * Sends a PUT request to the specified URL with the given data.
   * @param url - The URL to which the request is sent.
   * @param data - The data to send with the request.
   * @returns A promise that resolves to the response data.
   * @throws An error if the response is not successful.
   */
  static async put<T>(url: string, data: any): Promise<T> {
    return this.request<T>(url, {
      method: "PUT",
      body: data,
    });
  }

  /**
   * Sends a DELETE request to the specified URL.
   * @param url - The URL to which the request is sent.
   * @returns A promise that resolves when the response is received.
   * @throws An error if the response is not successful.
   */
  static async delete(url: string): Promise<void> {
    await this.request(url, {
      method: "DELETE",
    });
  }
}
