import "./App.css";
import { RouterProvider, ScrollRestoration } from "react-router";
import router from "./routes";

const App = () => {
  return (
    <RouterProvider router={router}>
      <ScrollRestoration />
    </RouterProvider>
  );
};

export default App;
