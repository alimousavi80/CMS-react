import React from "react";

const Users = () => {
  return (
    <>
      {/* <!------------------------------------ svg sprite ------------------------------------> */}

      <svg className="hidden">
        <symbol id="sun-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </symbol>
        <symbol id="moon-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </symbol>
        <symbol id="bell-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </symbol>
        <symbol id="x-mark-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </symbol>
        <symbol id="edit-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </symbol>
        <symbol id="trash-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </symbol>
        <symbol id="bars-3-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </symbol>
      </svg>

      {/* <!------------------------------------ modal ------------------------------------> */}

      <div
        id="modal-container"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/40 p-4 backdrop-blur-xs"
      >
        {/* <!-- loaded from js --> */}
      </div>

      {/* <!----------------------------- toast nnotification -----------------------------> */}
      <article className="hidden fixed top-5 left-5 z-50 neu-card w-70 toest text-center overflow-hidden">
        <div className="progress h-3 rounded-card absolute bottom-0 left-0"></div>
        <p id="progress-text" className="">
          {/* <!-- loaded from js --> */}
        </p>
      </article>

      <div className="flex min-w-0 flex-1 flex-col gap-8">
        {/* <!------------------------------------ main ------------------------------------> */}

        <main className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          {/* <!-- Stats --> */}
          <section className="grid gap-8 grid-cols-2">
            <div className="neu-card">
              <p className="text-sm text-ink-muted">تعداد دوره ها</p>
              <p className="mt-2 text-3xl font-bold" id="courses-count">
                {/* <!-- loaded from js --> */}
              </p>
            </div>
            <div className="neu-card">
              <p className="text-sm text-ink-muted">تعداد کاربران</p>
              <p className="mt-2 text-3xl font-bold" id="users-count">
                {/* <!-- loaded from js --> */}
              </p>
            </div>
          </section>

          <div>
            {/* <!-- Recent content --> */}
            <section className="neu-card xl:col-span-2">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold">کاربران</h2>
                <button type="button" id="open-modal-btn" className="neu-btn">
                  افزودن کاربر
                </button>
              </div>

              {/* <!----------------------------------- table -----------------------------------> */}

              <div className="neu-well overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-ink-muted text-center">
                    <tr className="border-b border-ink/10">
                      <th className="px-4 py-3 font-medium">شماره</th>
                      <th className="px-4 py-3 font-medium">
                        نام و نام خانوادگی
                      </th>
                      <th className="px-4 py-3 font-medium">یوزرنیم</th>
                      <th className="px-4 py-3 font-medium">نقش</th>
                      <th className="px-4 py-3 font-medium">تلفن همراه</th>
                      <th className="px-4 py-3 font-medium">ایمیل</th>
                      <th className="px-4 py-3 font-medium neu-chip-warning">
                        ویرایش
                      </th>
                      <th className="px-4 py-3 font-medium neu-chip-delete">
                        حذف
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="divide-y divide-ink/10 *:text-center"
                    id="table-wrapper"
                  >
                    {/* <!-- loaded from js --> */}
                  </tbody>
                </table>
              </div>

              {/* <!-- pagination --> */}

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

      {/* <script src="./js/themeHandler.js"></script>
        <script src="./js/shared.js" type="module"></script>
        <script src="./js/users.js" type="module"></script> */}
    </>
  );
};

export default Users;
