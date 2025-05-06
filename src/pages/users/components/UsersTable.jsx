import { Flex, Table } from "antd";
import { useMemo } from "react";
import DeleteModal from "./DeleteModal";
import useUsersGet from "../../../hooks/useUsersGet";
import UpdatePasswordModal from "./UpdatePasswordModal";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import moment from "moment";
import LockUserModal from "./LockUserModal";
import BanChatModal from "./BanChatModal";
import UpdateUserTypeModal from "./UpdateUserTypeModal";
import Pagination from "../../../components/Pagination";

export default function UsersTable() {
  const { data: users, isLoading } = useUsersGet();

  const columns = useMemo(() => {
    return [
      {
        title: "Tên Đăng Nhập",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "Tên Hiển Thị",
        dataIndex: "displayName",
        key: "displayName",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "SĐT",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Người Theo Dõi",
        dataIndex: "followers",
        key: "followers",
      },
      {
        title: "Ngày Tạo",
        dataIndex: "createdAt",
        key: "createdAt",
        align: "center",
        render: (createdAt) => {
          return <p>{moment(createdAt).format("DD/MM/YYYY HH:mm:ss")}</p>;
        },
      },
      {
        title: "Cấm Tài Khoản",
        dataIndex: "locked",
        key: "locked",
        align: "center",
        render: (_, record) => {
          return (
            <Flex justify="center">
              <LockUserModal record={record} />
            </Flex>
          );
        },
      },
      {
        title: "Cấm Chat",
        dataIndex: "banChat",
        key: "banChat",
        align: "center",
        render: (_, record) => {
          return (
            <Flex justify="center">
              <BanChatModal record={record} />
            </Flex>
          );
        },
      },
      {
        title: "Hành Động",
        dataIndex: "action",
        key: "aciton",
        align: "center",
        width: 450,
        render: (_, record) => {
          return (
            <Flex gap={10} justify="center">
              <DeleteModal record={record} />
              <UpdateUserTypeModal record={record} />
              <UpdatePasswordModal record={record} />
            </Flex>
          );
        },
      },
    ];
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={users?.data}
        loading={isLoading}
        pagination={false}
        scroll={{ y: 500 }}
      />
      <Pagination pagination={users?.pagination} />
    </>
  );
}
