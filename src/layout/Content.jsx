import { Outlet } from "react-router";

export default function Content({ Layout, ...rest }) {
  const { Content } = Layout;
  return (
    <Content {...rest}>
      <Outlet />
    </Content>
  );
}
