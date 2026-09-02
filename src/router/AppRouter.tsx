import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "../shared/components/Layout";
import { GuideForm } from "../modules/guideForm/pages/GuideForm";
import { GuideList } from "../modules/guideList/pages/GuideList";
import { ClientList } from "../modules/clientList/pages/ClientList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <GuideForm /> },
      { path: "guides", element: <GuideList /> },
      { path: "clients", element: <ClientList /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
