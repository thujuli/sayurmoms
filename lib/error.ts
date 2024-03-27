const SERVER_ERROR_MSG = "Internal Server Error";

export const resolveError = (error: any): string => {
  if (error instanceof Error) {
    return error.message;
  } else {
    return SERVER_ERROR_MSG;
  }
};
