import ThreeDShow from "./pages/ThreeDShow";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./pages/Intro";
import Diorama from "./pages/Diorama";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Intro /> },
    { path: "/3d-show", element: <ThreeDShow /> },
    { path: "/diorama", element: <Diorama /> },
  ]);
  return (
    <main className="w-full h-full">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
