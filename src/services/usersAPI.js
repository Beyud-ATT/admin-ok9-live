import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const endpoint = "/users";

async function getUsers(params) {
  try {
    const response = await axoisBase.get(endpoint, { params });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
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

async function lockUser(params) {
  try {
    const response = await axoisBase.put(`${endpoint}/lock`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function unlockUser(params) {
  try {
    const response = await axoisBase.put(`${endpoint}/unlock`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function updateUserType(params) {
  try {
    const response = await axoisBase.put(`${endpoint}/type`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function deleteUser(id) {
  try {
    const response = await axoisBase.delete(`${endpoint}/${id}`);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

async function banChatUser(data) {
  try {
    const response = await axoisBase.put(`${endpoint}/ban-chat`, data);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message);
  }
}

export {
  getUsers,
  updatePassword,
  lockUser,
  unlockUser,
  updateUserType,
  deleteUser,
  banChatUser,
};
