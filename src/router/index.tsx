import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AdminMain = lazy(() => import("@/pages/main"));

const CategoryAdmin = lazy(() => import("@/pages/main/category-admin"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path: "main",
    element: (
      <Suspense>
        <AdminMain />
      </Suspense>
    ),
    children: [
      {
        path: "category",
        element: (
          <Suspense>
            <CategoryAdmin />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
