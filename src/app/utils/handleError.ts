import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    toast.error(error.response?.data?.message);
  } else if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error("An unexpected error occurred");
  }
};
