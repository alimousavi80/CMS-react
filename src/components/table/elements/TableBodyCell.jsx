import React from "react";

const TableBodyCell = ({ children, className }) => {
  return <td className={className}>{children}</td>;
};

export default TableBodyCell;
