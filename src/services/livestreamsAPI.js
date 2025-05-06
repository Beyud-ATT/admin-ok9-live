import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const endpoint = "/livestreams";

async function getLivestreams(params) {
  try {
    const response = await axoisBase.get(endpoint, { params });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function updateOrder(params) {
  try {
    const response = await axoisBase.put(`${endpoint}/order`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function updateOnTop(params) {
  try {
    const response = await axoisBase.put(`${endpoint}/ontop`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function updateDefault(params) {
  try {
    const response = await axoisBase.put(`${endpoint}/default`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

export { getLivestreams, updateOrder, updateOnTop, updateDefault };
