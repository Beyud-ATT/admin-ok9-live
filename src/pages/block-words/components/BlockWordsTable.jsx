import { Flex, Table } from "antd";
import { useMemo } from "react";
import DeleteModal from "./DeleteModal";
import useBlockWordGet from "../../../hooks/useBlockWordGet";
import { WORD_TYPE } from "../../../utils/constants";
import Pagination from "../../../components/Pagination";

export default function BlockWordsTable() {
  const { blockWords, isLoading } = useBlockWordGet();
  const columns = useMemo(() => {
    return [
      {
        title: "Kiểu từ khóa",
        dataIndex: "wordType",
        key: "wordType",
        render: (wordType) => {
          return (
            <div
              className={`font-semibol w-fit rounded-lg px-2 py-1 uppercase`}
            >
              {wordType === WORD_TYPE.BAD_WORD.value
                ? WORD_TYPE.BAD_WORD.label
                : WORD_TYPE.SITE_NAME.label}
            </div>
          );
        },
      },
      {
        title: "Từ khóa",
        dataIndex: "word",
        key: "word",
      },
      {
        title: "Hành Động",
        dataIndex: "action",
        key: "aciton",
        align: "center",
        width: 300,
        render: (_, record) => {
          return (
            <Flex gap={10} justify="center">
              <DeleteModal record={record} />
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
        dataSource={blockWords?.data}
        pagination={false}
        loading={isLoading}
        scroll={{ y: 500 }}
      />
      <Pagination pagination={blockWords?.pagination} />
    </>
  );
}
