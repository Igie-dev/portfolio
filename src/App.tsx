import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LadingPage from "./pages/landingPage/LadingPage";
import LandingPageLoader from "./pages/components/Loader";

import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import ProjectPageLoader from "./pages/projectsPage/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LadingPage />,
    loader: LandingPageLoader,
  },
  {
    path: "projects",
    element: <ProjectsPage />,
    loader: ProjectPageLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
