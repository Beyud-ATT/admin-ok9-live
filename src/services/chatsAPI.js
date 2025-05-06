import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const endpoint = "/chats/word-blocks";

async function getBlockWords(params) {
  try {
    const response = await axoisBase.get(`${endpoint}`, { params });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function addBlockWord(params) {
  try {
    const response = await axoisBase.post(`${endpoint}/add`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function addListBlockWord(params) {
  try {
    const response = await axoisBase.post(`${endpoint}/list/add`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function deleteBlockWord(id) {
  try {
    const response = await axoisBase.delete(`${endpoint}/delete/${id}`);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

export { getBlockWords, addBlockWord, addListBlockWord, deleteBlockWord };
