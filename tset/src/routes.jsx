import { createHashRouter } from "react-router";
import Users from "./pages/Users";
import RootLayout from "./components/layouts/RootLayout";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

const ANONKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YWNteHJhY2Nrc3BwdWZwb2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMzY3MjUsImV4cCI6MjEwNjcxMjcyNX0.kEP8_cHV2uPuujkt_TvICmVd7y0H_U-KxrcQRAHIAjI";
const BASEURL = "https://yzacmxraccksppufpokc.supabase.co";

const fetchCoursesData = async ({ request }) => {
  const res = await fetch(
    `${BASEURL}/rest/v1/courses?select=*&order=created_at.desc`,
    {
      method: "GET",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
      },
      signal: request.signal,
    },
  );
  if (!res.ok) throw new Error("دریافت دوره ها نا موفق بود");
  const result = await res.json();

  return result;
};

const fetchUsersData = async ({ request }) => {
  const res = await fetch(
    `${BASEURL}/rest/v1/users?select=*&order=created_at.desc`,
    {
      method: "GET",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
      },
      signal: request.signal,
    },
  );
  if (!res.ok) throw new Error("دریافت کاربران نا موفق بود");

  const result = await res.json();

  return result;
};

// get both users and course
const homePageLoader = async ({ request }) => {
  const [coursesData, userData] = await Promise.all([
    fetchCoursesData({ request }),
    fetchUsersData({ request }),
  ]);

  return { coursesData, userData };
};

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homePageLoader,
      },
      { path: "/courses", element: <Courses />, loader: fetchCoursesData },
      {
        path: "/users",
        element: <Users />,
        loader: fetchUsersData,
      },
    ],
  },
  {
    path: "/*",
    element: <div>404eror</div>,
  },
]);

export default router;
