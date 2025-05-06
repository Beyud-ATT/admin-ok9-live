import { Flex, Table } from "antd";
import { useMemo } from "react";
import useLivestreamsGet from "../../../hooks/useLivestreamsGet";
import UpdateOrderModal from "./UpdateOrderModal";
import UpdateOnTopModal from "./UpdateOnTopModal";
import UpdateDefaultModal from "./UpdateDefault";
import moment from "moment";
import Pagination from "../../../components/Pagination";

export default function LivestreamsTable() {
  const { data: livestreams, isLoading } = useLivestreamsGet();

  const columns = useMemo(() => {
    return [
      {
        title: "Tên phòng",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Mô tả",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "Tên Idol",
        dataIndex: "displayName",
        key: "displayName",
      },
      {
        title: "Trạng thái live",
        dataIndex: "isStreaming",
        key: "isStreaming",
        align: "center",
        render: (data) => {
          return (
            <Flex justify="center">
              <div
                className={`${data ? "animate-blink bg-red-500" : "bg-gray-500"} w-fit rounded-lg px-2 py-1 font-semibold text-white uppercase`}
              >
                {data ? "live" : "off"}
              </div>
            </Flex>
          );
        },
      },
      {
        title: "Livestream Mặc Định",
        dataIndex: "isDefaultLivestream",
        key: "isDefaultLivestream",
        align: "center",
        render: (data) => {
          return (
            <Flex justify="center">
              <div
                className={`${data ? "animate-blink bg-green-500" : "bg-gray-500"} w-fit rounded-lg px-2 py-1 font-semibold text-white uppercase`}
              >
                {data ? "default" : "none"}
              </div>
            </Flex>
          );
        },
      },
      {
        title: "Thời gian tạo",
        dataIndex: "createdAt",
        key: "createdAt",
        align: "center",
        render: (createdAt) => {
          return (
            <Flex justify="center">
              {moment(createdAt).format("DD/MM/YYYY HH:mm:ss")}
            </Flex>
          );
        },
      },
      {
        title: "Đặt lịch",
        dataIndex: "scheduleTime",
        key: "scheduleTime",
        align: "center",
        render: (scheduleTime) => {
          return (
            <Flex justify="center">
              {scheduleTime &&
                moment(scheduleTime).format("DD/MM/YYYY HH:mm:ss")}
            </Flex>
          );
        },
      },
      {
        title: "Thứ tự ưu tiên",
        dataIndex: "order",
        key: "order",
        align: "center",
      },
      {
        title: "Hành động",
        dataIndex: "action",
        width: 350,
        key: "aciton",
        align: "center",
        render: (_, record) => {
          return (
            <Flex gap={10} justify="center">
              <UpdateOrderModal record={record} />
              <UpdateOnTopModal record={record} />
              <UpdateDefaultModal record={record} />
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
        dataSource={livestreams?.data}
        loading={isLoading}
        scroll={{ y: 500 }}
        pagination={false}
      />
      <Pagination pagination={livestreams?.pagination} />
    </>
  );
}
