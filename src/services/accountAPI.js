import axoisBase from "./axiosBase";
import { toast } from "react-toastify";

const endpoint = "/account";

async function getMe() {
  try {
    const response = await axoisBase.get(`${endpoint}/me`);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function updatePassword(params) {
  try {
    const response = await axoisBase.put(`${endpoint}/update-password`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

export { getMe, updatePassword };
