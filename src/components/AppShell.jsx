// import "./layout.css";
import { AppShell, Header, Footer } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme.js";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header";

const AppShellComponent = () => {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <HeaderComponent />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            color: theme.colors.gray[1],
          },
        })}
        footer={<Footer>Footer</Footer>}
      >
        <Outlet />
      </AppShell>
    </MantineProvider>
  );
};

export default AppShellComponent;
