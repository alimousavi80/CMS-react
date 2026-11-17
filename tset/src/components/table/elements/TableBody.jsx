import React from "react";

const TableBody = ({ children }) => {
  return (
    <tbody className="divide-y divide-ink/10 *:text-center" id="table-wrapper">
      {children}
    </tbody>
  );
};

export default TableBody;
