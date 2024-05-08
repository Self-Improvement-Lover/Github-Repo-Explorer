export class DataProviderError extends Error {
  constructor(
    method: String,
    url: string,
    statusCode: number,
    body: string | ReadableStream<Uint8Array> | null  // NOTE: deal with ReadableStream so its message can be displayed 
  ) {
    super(
      `${method} to ${url} received status code: ${statusCode} with body: ${body}`
    );
  }
}