import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Table from "../components/table/Table";
import TableHead from "../components/table/elements/TableHead";
import TableHeadRow from "../components/table/elements/TableHeadRow";
import TableHeaderCell from "../components/table/elements/TableHeaderCell";
import TableBody from "../components/table/elements/TableBody";
import TableBodyRow from "../components/table/elements/TableBodyRow";
import TableBodyCell from "../components/table/elements/TableBodyCell";
import UpdateCourseBtn from "../components/table/components/UpdateCourseBtn";
import RemoveCourseBtn from "../components/table/components/RemoveCourseBtn";
import Pagination from "../components/common/Pagination";
import Modal from "../components/common/Modal";
import AddCourseFields from "../components/features/coursespart/AddCourseFields";

const coursesTableHeaderCellData = [
  { id: 1, name: "شماره" },
  { id: 2, name: "نام دوره" },
  { id: 3, name: "مدرس" },
  { id: 4, name: "وضعیت" },
  { id: 5, name: "قیمت" },
  { id: 6, name: "آخرین آپدیت" },
  { id: 7, name: "ویرایش" },
  { id: 8, name: "حذف" },
];
const ANONKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YWNteHJhY2Nrc3BwdWZwb2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMzY3MjUsImV4cCI6MjEwNjcxMjcyNX0.kEP8_cHV2uPuujkt_TvICmVd7y0H_U-KxrcQRAHIAjI";
const BASEURL = "https://yzacmxraccksppufpokc.supabase.co";

const Courses = () => {
  const allData = useLoaderData();
  const [recivedData, setRecivedData] = useState(allData);
  const [allCourses, setAllCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    creator: "",
    price: "",
    status: "در حال ضبط",
    category: "فرانت اند",
  });

  const addNewCourseHandler = () => {
    fetch(`${BASEURL}/rest/v1/courses`, {
      method: "POST",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(newCourse),
    }).then((res) => {
      if (res.status === 201) {
        res.json().then((data) => {
          setRecivedData((prev) => [data[0], ...prev]);
        });
      } else {
      }
    });
  };

  const deleteCourseHandler = (courseId) => {
    fetch(`${BASEURL}/rest/v1/courses?id=eq.${courseId}`, {
      method: "DELETE",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        Prefer: "return=representation",
      },
    }).then((res) => {
      if (res.status === 200) {
        setRecivedData((prev) => prev.filter((item) => item.id !== courseId));
      } else {
      }
    });
  };

  const updateCourseHandler = (courseId) => {
    const data = {
      courseName: courseName.value.trim(),
      creator: courseCreator.value.trim(),
      price: +coursePrice.value.trim(),
      status: status,
      category: "فرانت اند",
    };

    fetch(`${BASEURL}/rest/v1/courses?id=eq.${courseId}`, {
      method: "PATCH",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
      } else {
      }
    });
  };

  return (
    <>
      {/* <!----------------------------- toast nnotification -----------------------------> */}
      <article className="hidden fixed top-5 left-5 z-50 neu-card w-70 toest text-center overflow-hidden">
        <div className="progress h-3 rounded-card absolute bottom-0 left-0"></div>
        <p id="progress-text" className="">
          با موفقعیت دوره تازه ثبت شد
        </p>
      </article>

      <div className="flex min-w-0 flex-1 flex-col gap-8">
        {/* <!------------------------------------ main ------------------------------------> */}

        <main className="flex flex-col gap-8">
          <div>
            {/* <!-- Recent content --> */}
            <section className="neu-card xl:col-span-2">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold">دوره های اخیر</h2>
                <Modal
                  Triger={
                    <button
                      type="button"
                      id="open-modal-btn"
                      className="neu-btn"
                    >
                      افزودن دوره
                    </button>
                  }
                  title={"افزودن دوره جدید"}
                  mainBtn={"افزودن"}
                  onSubmit={addNewCourseHandler}
                >
                  <AddCourseFields
                    newCourse={newCourse}
                    onChange={setNewCourse}
                  />
                </Modal>
              </div>

              {/* <!----------------------------------- table -----------------------------------> */}

              <div className="neu-well overflow-x-auto">
                <Table>
                  <TableHead>
                    <TableHeadRow>
                      {coursesTableHeaderCellData.map((item) => (
                        <TableHeaderCell key={item.id} data={item.name} />
                      ))}
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    {allCourses.map((item, index) => (
                      <TableBodyRow key={item.id}>
                        <TableBodyCell className="px-4 py-3 font-medium">
                          {index + 1}
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3 font-medium">
                          {item.courseName}
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3">
                          {item.creator}
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3">
                          <span
                            className={
                              item.status === "تکمیل شده"
                                ? "neu-chip neu-chip-success"
                                : "neu-chip neu-chip-warning"
                            }
                          >
                            {item.status}
                          </span>
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3 text-ink-muted">
                          {item.price.toLocaleString()} تومان
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3 text-ink-muted">
                          {item.created_at.slice(0, 10)}
                          <br />
                          {item.created_at.slice(11, 19)}
                        </TableBodyCell>
                        <TableBodyCell>
                          <UpdateCourseBtn data={item} />
                        </TableBodyCell>
                        <TableBodyCell>
                          <RemoveCourseBtn
                            data={item}
                            onDelete={deleteCourseHandler}
                          />
                        </TableBodyCell>
                      </TableBodyRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* <!-- pagination --> */}

              <Pagination
                allCourses={recivedData}
                itemsPerPage={3}
                paginatedCoures={(data) => setAllCourses(data)}
              />

              <div
                className="flex gap-x-3 w-fit mx-auto mt-6"
                id="pagination-container"
              >
                {/* <!-- Element Loaded From Js --> */}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Courses;
