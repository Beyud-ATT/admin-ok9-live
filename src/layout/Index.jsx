import React from "react";
import { Layout } from "antd";
import { Sider } from "./Sider";
import Header from "./Header";
import Content from "./Content";

const MainLayout = () => (
  <Layout className="h-screen overflow-hidden">
    <Sider Layout={Layout} className="!bg-[var(--lighter-background)]" />
    <Layout>
      <Header Layout={Layout} className="!bg-[var(--lighter-background-2)]" />
      <Content
        Layout={Layout}
        className="mx-auto flex w-[90%] flex-col justify-center"
      />
    </Layout>
  </Layout>
);
export default MainLayout;
