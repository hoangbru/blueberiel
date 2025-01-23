export interface ResponseApi<T> {
  meta: {
    message: string;
    error?: any;
  };
  data?: T;
}
