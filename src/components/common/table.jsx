import React from 'react';
import TableHeaders from "./tableHeaders";
import TableBody from "./tableBody";

const Table = ({ columns, onSort, sortedColumn, data }) => {
  return (
    <React.Fragment>
      <table className="table">
        <TableHeaders
          columns={columns}
          onSort={onSort}
          sortedColumn={sortedColumn}
        />
        <TableBody data={data} columns={columns} />
      </table>
    </React.Fragment>
  );
};

export default Table;
