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
import RemoveBtn from "../components/table/components/RemoveBtn";
import Pagination from "../components/common/Pagination";
import Modal from "../components/common/Modal";
import AddCourseFields from "../components/features/coursespart/AddCourseFields";
import toast from "react-hot-toast";

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
  const [recivedData, setRecivedData] = useState(useLoaderData());
  const [paginatedCourses, setPaginatedCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    creator: "",
    price: "",
    status: "در حال ضبط",
    category: "فرانت اند",
  });

  const resetNewCourse = () => {
    setNewCourse({
      courseName: "",
      creator: "",
      price: "",
      status: "در حال ضبط",
      category: "فرانت اند",
    });
  };

  const addNewCourseHandler = () => {
    fetch(`${BASEURL}/rest/v1/courses`, {
      method: "POST",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        ...newCourse,
        courseName: newCourse.courseName.trim(),
        creator: newCourse.creator.trim(),
        price: Number(newCourse.price),
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          toast.success("دوره با موفقیت اضافه شد");
          res.json().then((data) => {
            setRecivedData((prev) => [data[0], ...prev]);
          });
          resetNewCourse();
        } else {
          toast.error("افزودن دوره نا موفق بود");
        }
      })
      .catch(() => {
        toast.error("ارتباط با سرور بر قرار نشد");
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
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("دوره با موفقیت حذف شد");
          setRecivedData((prev) => prev.filter((item) => item.id !== courseId));
        } else {
          toast.error("حذف دوره نا موفق بود");
        }
      })
      .catch(() => {
        toast.error("ارتباط با سرور بر قرار نشد");
      });
  };

  const updateCourseHandler = (courseId) => {
    fetch(`${BASEURL}/rest/v1/courses?id=eq.${courseId}`, {
      method: "PATCH",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        ...newCourse,
        courseName: newCourse.courseName.trim(),
        creator: newCourse.creator.trim(),
        price: Number(newCourse.price),
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("دوره با موفقیت به روزرسانی شد");
          res.json().then((data) => {
            setRecivedData((prev) =>
              prev.map((item) => (item.id === courseId ? data[0] : item)),
            );
          });
          resetNewCourse();
        } else {
          toast.error("ویرایش دوره نا موفق بود");
        }
      })
      .catch(() => {
        toast.error("ارتباط با سرور بر قرار نشد");
      });
  };

  return (
    <>
      <div className="flex min-w-0 flex-1 flex-col gap-8">
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
                  onClose={resetNewCourse}
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
                    {paginatedCourses.map((item, index) => (
                      <TableBodyRow key={item.id}>
                        <TableBodyCell className="px-4 py-3 font-medium">
                          {index + 1}
                        </TableBodyCell>
                        <TableBodyCell
                          className="px-4 py-3 font-medium"
                          limit
                          title={item.courseName}
                        >
                          {item.courseName}
                        </TableBodyCell>
                        <TableBodyCell
                          className="px-4 py-3"
                          limit
                          title={item.creator}
                        >
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
                        <TableBodyCell
                          className="px-4 py-3 text-ink-muted"
                          limit
                          title={item.price.toLocaleString()}
                        >
                          {item.price.toLocaleString()} تومان
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3 text-ink-muted">
                          {item.created_at.slice(0, 10)}
                          <br />
                          {item.created_at.slice(11, 19)}
                        </TableBodyCell>
                        <TableBodyCell>
                          <UpdateCourseBtn
                            onUpdate={updateCourseHandler}
                            data={item}
                            newCourse={newCourse}
                            onChange={setNewCourse}
                            onClose={resetNewCourse}
                          />
                        </TableBodyCell>
                        <TableBodyCell>
                          <RemoveBtn
                            data={item}
                            onDelete={deleteCourseHandler}
                            title="دوره"
                          />
                        </TableBodyCell>
                      </TableBodyRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* <!-- pagination --> */}

              <Pagination
                allData={recivedData}
                itemsPerPage={5}
                paginatedData={(data) => setPaginatedCourses(data)}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Courses;
