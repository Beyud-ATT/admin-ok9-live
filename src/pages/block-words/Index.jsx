import { Flex } from "antd";
import BlockWordsTable from "./components/BlockWordsTable";
import CreateModal from "./components/CreateModal";
import UploadListModal from "./components/UploadListModal";

export default function BlockWords() {
  return (
    <div className="mx-auto w-[90%]">
      <Flex justify="end" gap={10} className="!my-5">
        <CreateModal />
        <UploadListModal />
      </Flex>
      <BlockWordsTable />
    </div>
  );
}
