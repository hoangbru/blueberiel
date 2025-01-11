export interface ResponseApi<T> {
  meta: {
    message: string;
  };
  data: T;
}
