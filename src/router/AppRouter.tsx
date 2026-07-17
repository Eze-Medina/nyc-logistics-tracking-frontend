import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "../shared/components/Layout";
import { HomePage } from "../modules/home/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
