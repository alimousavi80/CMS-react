import "./App.css";
import { RouterProvider, ScrollRestoration } from "react-router";
import router from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <ScrollRestoration />
      </RouterProvider>
      <Toaster
        position="top-center"
        containerStyle={{ top: 24 }}
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--neu-bg)",
            color: "var(--neu-text)",
            boxShadow:
              "6px 6px 12px var(--neu-dark), -6px -6px 12px var(--neu-light)",
            borderRadius: "1rem",
            fontFamily: "inherit",
            fontSize: "1rem",
            padding: "16px 24px",
            minWidth: "15rem",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
        }}
      />
    </>
  );
};

export default App;
