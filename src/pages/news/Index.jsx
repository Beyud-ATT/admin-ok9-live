import { Flex } from "antd";
import CreateModal from "./components/CreateModal";
import NewsTable from "./components/NewsTable";
import TextSearch from "../../components/TextSearch";

export default function News() {
  return (
    <div>
      <Flex justify="space-between" align="center" className="!my-5">
        <TextSearch />
        <CreateModal />
      </Flex>
      <NewsTable />
    </div>
  );
}
