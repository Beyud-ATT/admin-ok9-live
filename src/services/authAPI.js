import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

async function login(data) {
  try {
    const response = await axoisBase.post("/auth/login", data);
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message);
    throw new Error(e?.response?.data?.message);
  }
}

export { login };
