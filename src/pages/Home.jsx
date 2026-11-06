import React from "react";
import { useLoaderData } from "react-router";
import {
  ResponsiveContainer,
  YAxis,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import useTitle from "../hooks/useTitle";

const Home = () => {
  const { coursesData, userData } = useLoaderData();
  useTitle("dashboard");

  const chartData = [
    { name: "دوره ها", value: coursesData.length },
    { name: " کابران", value: userData.length },
  ];

  return (
    <>
      <main className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">مشخصات</h1>

        {/* <!-- Stats --> */}
        <section className="grid gap-8 grid-cols-2">
          <div className="neu-card">
            <p className="text-sm text-ink-muted">تعداد دوره ها</p>
            <p className="mt-2 text-3xl font-bold" id="courses-count">
              {coursesData.length}
            </p>
          </div>
          <div className="neu-card">
            <p className="text-sm text-ink-muted">تعداد کاربران</p>
            <p className="mt-2 text-3xl font-bold" id="users-count">
              {userData.length}
            </p>
          </div>
        </section>

        <div>
          {/* <!-- Recent content --> */}
          <section className="neu-card xl:col-span-2">
            <h2 className="text-lg font-semibold">آمار کلی داشبورد</h2>
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} width={150} height={40}>
                  <Bar dataKey="value" fill="#8884d8" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    cursor={false}
                    content={({ payload }) => (
                      <div className="bg-gray-500 py-2 px-3 rounded-sm">
                        <p>{`${payload[0]?.payload?.name}: ${payload[0]?.payload?.value}`}</p>
                      </div>
                    )}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
