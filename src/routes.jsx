import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AppShellComponent from "./components/AppShell";
import ProductDetail from "./components/ProductDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellComponent />,
    children: [
      {
        index: true,
        element: <App />,
      },

      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
