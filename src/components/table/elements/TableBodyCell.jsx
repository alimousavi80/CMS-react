import React from "react";

const TableBodyCell = ({ children, className, limit, title }) => {
  return (
    <td className={className} title={title}>
      {limit ? (
        <div className="mx-auto max-w-20 line-clamp-2 wrap-break-word">
          {children}
        </div>
      ) : (
        children
      )}
    </td>
  );
};

export default TableBodyCell;
