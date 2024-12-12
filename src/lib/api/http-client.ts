type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
};

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
    options: RequestOptions = {}
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

  static async get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }

  static async post<T>(url: string, data: any): Promise<T> {
    return this.request<T>(url, {
      method: "POST",
      body: data,
    });
  }

  static async put<T>(url: string, data: any): Promise<T> {
    return this.request<T>(url, {
      method: "PUT",
      body: data,
    });
  }

  static async delete(url: string): Promise<void> {
    await this.request(url, {
      method: "DELETE",
    });
  }
}
