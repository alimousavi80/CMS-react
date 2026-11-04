import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Table from "../components/table/Table";
import TableHead from "../components/table/elements/TableHead";
import TableHeadRow from "../components/table/elements/TableHeadRow";
import TableHeaderCell from "../components/table/elements/TableHeaderCell";
import TableBody from "../components/table/elements/TableBody";
import TableBodyRow from "../components/table/elements/TableBodyRow";
import TableBodyCell from "../components/table/elements/TableBodyCell";
import Pagination from "../components/common/Pagination";
import Modal from "../components/common/Modal";
import AddUserFields from "../components/features/userspart/AddUserFields";
import UpdateUserBtn from "../components/table/components/UpdateUserBtn";
import RemoveBtn from "../components/table/components/RemoveBtn";
import toast from "react-hot-toast";

const usersTableHeaderCellData = [
  { id: crypto.randomUUID(), name: "شماره" },
  { id: crypto.randomUUID(), name: "نام نام خانوادگی" },
  { id: crypto.randomUUID(), name: "یوزرنیم" },
  { id: crypto.randomUUID(), name: "نقش" },
  { id: crypto.randomUUID(), name: "تلفن همراه" },
  { id: crypto.randomUUID(), name: "ایمیل" },
  { id: crypto.randomUUID(), name: "ویرایش" },
  { id: crypto.randomUUID(), name: "حذف" },
];
const ANONKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YWNteHJhY2Nrc3BwdWZwb2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMzY3MjUsImV4cCI6MjEwNjcxMjcyNX0.kEP8_cHV2uPuujkt_TvICmVd7y0H_U-KxrcQRAHIAjI";
const BASEURL = "https://yzacmxraccksppufpokc.supabase.co";

const Users = () => {
  const [recivedData, setRecivedData] = useState(useLoaderData());

  const [paginatedUsers, setPaginatedUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    role: "commonuser",
    userName: "",
  });

  const resetNewUser = () => {
    setNewUser({
      fullName: "",
      email: "",
      phoneNumber: "",
      role: "commonuser",
      userName: "",
    });
  };

  const addNewUserHandler = () => {
    fetch(`${BASEURL}/rest/v1/users`, {
      method: "POST",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        ...newUser,
        fullName: newUser.fullName.trim(),
        userName: newUser.userName.trim(),
        email: newUser.email.trim(),
        phoneNumber: Number(newUser.phoneNumber),
      }),
    }).then((res) => {
      if (res.status === 201) {
        toast.success("کاربر با موفقیت اضافه شد");
        res.json().then((data) => {
          setRecivedData((prev) => [data[0], ...prev]);
        });
        resetNewUser();
      } else {
        toast.error("خطایی رخ داده است");
      }
    });
  };

  const deleteUserHandler = (userId) => {
    fetch(`${BASEURL}/rest/v1/users?id=eq.${userId}`, {
      method: "DELETE",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        Prefer: "return=representation",
      },
    }).then((res) => {
      if (res.status === 200) {
        toast.success("کاربر با موفقیت حذف شد");
        setRecivedData((prev) => prev.filter((item) => item.id !== userId));
      } else {
        toast.error("خطایی رخ داده است");
      }
    });
  };

  const updateUserHandler = (userId) => {
    fetch(`${BASEURL}/rest/v1/users?id=eq.${userId}`, {
      method: "PATCH",
      headers: {
        apikey: ANONKEY,
        Authorization: `Bearer ${ANONKEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        ...newUser,
        fullName: newUser.fullName.trim(),
        userName: newUser.userName.trim(),
        email: newUser.email.trim(),
        phoneNumber: Number(newUser.phoneNumber),
      }),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("کاربر با موفقیت به روز رسانی شد");
        res.json().then((data) => {
          setRecivedData((prev) =>
            prev.map((item) => (item.id === userId ? data[0] : item)),
          );
        });
        resetNewUser();
      } else {
        toast.error("خطایی رخ داده است");
      }
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
                <h2 className="text-lg font-semibold">کابران اخیر</h2>
                <Modal
                  Triger={
                    <button
                      type="button"
                      id="open-modal-btn"
                      className="neu-btn"
                    >
                      افزودن کاربر
                    </button>
                  }
                  title={"افزودن کابر جدید"}
                  mainBtn={"افزودن"}
                  onSubmit={addNewUserHandler}
                  onClose={resetNewUser}
                >
                  <AddUserFields newUser={newUser} onChange={setNewUser} />
                </Modal>
              </div>

              {/* <!----------------------------------- table -----------------------------------> */}

              <div className="neu-well overflow-x-auto">
                <Table>
                  <TableHead>
                    <TableHeadRow>
                      {usersTableHeaderCellData.map((item) => (
                        <TableHeaderCell key={item.id} data={item.name} />
                      ))}
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    {paginatedUsers.map((item, index) => (
                      <TableBodyRow key={item.id}>
                        <TableBodyCell className="px-4 py-3 font-medium">
                          {index + 1}
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3 font-medium">
                          {item.fullName}
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3">
                          {item.userName}
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3">
                          <span
                            className={
                              item.role === "commonuser"
                                ? "neu-chip neu-chip-warning"
                                : "neu-chip neu-chip-success"
                            }
                          >
                            {item.role === "commonuser" ? "کاربر عادی" : "مدیر"}
                          </span>
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3 text-ink-muted">
                          {item.phoneNumber}
                        </TableBodyCell>
                        <TableBodyCell className="px-4 py-3 text-ink-muted">
                          {item.email}
                        </TableBodyCell>
                        <TableBodyCell>
                          <UpdateUserBtn
                            onUpdate={updateUserHandler}
                            data={item}
                            newUser={newUser}
                            onChange={setNewUser}
                            onClose={resetNewUser}
                          />
                        </TableBodyCell>
                        <TableBodyCell>
                          <RemoveBtn
                            data={item}
                            onDelete={deleteUserHandler}
                            title="کاربر"
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
                itemsPerPage={5}
                paginatedCoures={(data) => setPaginatedUsers(data)}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Users;
