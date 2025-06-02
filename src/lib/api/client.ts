type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: Record<string, any>;
};

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

export const apiClient = {
  async fetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const config: RequestInit = {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new ApiError(`API request failed: ${response.statusText}`, response.status);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(`API request failed: ${error}`, 500);
    }
  },

  get<T>(url: string, options?: Omit<FetchOptions, 'method'>) {
    return this.fetch<T>(url, { ...options, method: 'GET' });
  },

  post<T>(url: string, data: Record<string, any>, options?: Omit<FetchOptions, 'method' | 'body'>) {
    return this.fetch<T>(url, { ...options, method: 'POST', body: data });
  },

  put<T>(url: string, data: Record<string, any>, options?: Omit<FetchOptions, 'method' | 'body'>) {
    return this.fetch<T>(url, { ...options, method: 'PUT', body: data });
  },

  delete<T>(url: string, options?: Omit<FetchOptions, 'method'>) {
    return this.fetch<T>(url, { ...options, method: 'DELETE' });
  },
};
