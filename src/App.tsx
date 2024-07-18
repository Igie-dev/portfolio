import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import LadingPage from "./pages/landingPage/LadingPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LadingPage />,
    loader: Loader,
    children: [],
  },
  {
    path: "projects",
    element: <ProjectsPage />,
    loader: Loader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
