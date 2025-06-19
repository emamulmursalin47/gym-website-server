export interface IGenericError {
  path: string | number;
  message: string;
}

export interface IErrorResponse {
  statusCode: number;
  message: string;
  errors: IGenericError[];
}
