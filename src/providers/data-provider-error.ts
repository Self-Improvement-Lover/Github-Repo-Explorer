export class DataProviderError extends Error {
  constructor(
    method: String,
    url: string,
    statusCode: number,
    body: string | ReadableStream<Uint8Array> | null  // TODO: deal with ReadableStream so its message can be displayed 
  ) {
    super(
      `${method} to ${url} received status code: ${statusCode} with body: ${body}`
    );
    console.log(body);
    
    console.log(statusCode);
  }
}