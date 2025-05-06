import { Flex } from "antd";
import UserAction from "../components/UserAction";

export default function Header({ Layout, ...rest }) {
  const { Header } = Layout;
  return (
    <Header {...rest}>
      <Flex justify="end" align="center">
        <UserAction />
      </Flex>
    </Header>
  );
}
