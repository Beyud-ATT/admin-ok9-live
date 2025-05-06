import { App, ConfigProvider } from "antd";

export default function ThemeProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemPaddingInline: "30px",
            darkItemHoverBg: "var(--color-brand-primary)",
            darkItemSelectedBg: "var(--color-brand-primary)",
            iconSize: 20,
            itemHeight: 50,
            groupTitleFontSize: 20,
            itemMarginBlock: 15,
            darkItemBg: "var(--background-shader-2)",
            darkItemActiveBg: "var(--active-menu-dark-background)",
          },
          Layout: {
            siderBg: "var(--background-shader-2)",
            headerBg: "var(--background-shader-2)",
            bodyBg: "var(--background-shader-1)",
          },
          Table: {
            borderColor: "white",
            headerColor: "white",
            headerBg: "var(--color-brand-primary)",
          },
          Form: {
            labelColor: "var(--color-brand-primary)",
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
