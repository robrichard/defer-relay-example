// Type override for fetch-multipart-graphql@3.2.1
declare module "fetch-multipart-graphql" {
  function fetchMultipart<T = unknown>(
    url: string,
    params: {
      method?: string;
      headers?: Record<string, string>;
      credentials?: string;
      body?: string;
      onNext: (result: T[]) => void;
      onError: (error: unknown) => void;
      onComplete: () => void;
    },
  ): void;

  export default fetchMultipart;
}
