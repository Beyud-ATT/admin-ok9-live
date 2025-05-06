import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const endpoint = "/general-link";

async function getGeneralLink() {
  try {
    const response = await axoisBase.get(`${endpoint}`);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function updateGeneralLink(data) {
  try {
    const response = await axoisBase.post(`${endpoint}`, data);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

export { getGeneralLink, updateGeneralLink };
