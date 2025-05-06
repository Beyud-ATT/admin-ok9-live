import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const endpoint = "/new-infos";

async function getNews(params) {
  try {
    const response = await axoisBase.get(endpoint, { params });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function createNews(data) {
  try {
    const response = await axoisBase.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function updateNews(data) {
  try {
    const response = await axoisBase.put(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function deleteNews(id) {
  try {
    const response = await axoisBase.delete(`${endpoint}/${id}`);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

export { getNews, updateNews, createNews, deleteNews };
