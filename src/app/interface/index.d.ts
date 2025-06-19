// For JWT decoded user (add to Request)
declare namespace Express {
  export interface Request {
    user?: any;
  }
}
