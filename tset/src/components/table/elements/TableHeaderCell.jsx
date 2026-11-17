import React from "react";

const TableHeaderCell = ({ data }) => {
  if (data === "ویرایش") {
    return (
      <th className="px-4 py-3 font-medium text-amber-700 dark:text-amber-400">
        {data}
      </th>
    );
  } else if (data === "حذف") {
    return (
      <th className="px-4 py-3 font-medium text-red-700 dark:text-red-400">
        {data}
      </th>
    );
  } else {
    return <th className="px-4 py-3 font-medium">{data}</th>;
  }
};

export default TableHeaderCell;
