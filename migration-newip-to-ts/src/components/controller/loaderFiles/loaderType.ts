import { Options } from "./loaderInt";

enum StatusCodes {
  'Unauthorized' = 401,
  'NotFound' = 404,
}

type Resp = {
  endpoint?: string | undefined;
  options: Options;
};

export {StatusCodes, Resp};