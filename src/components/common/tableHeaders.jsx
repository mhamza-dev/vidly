import React, { Component } from 'react'

class TableHeaders extends Component {
  sortRaised = (path) => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (sortedColumn.path === path) {
      sortedColumn.order = sortedColumn.order == "asc" ? "desc" : "asc";
    } else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };

  handleSortIcon = (column) => {
    const sortedColumn = this.props.sortedColumn
    if (column.path !== sortedColumn.path) return null;
    if (sortedColumn.order === "asc")
      return <i className="fa fa-solid fa-sort-up"></i>;
    return <i className="fa fa-solid fa-sort-down"></i>;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => (
            <th
              className="clickable"
              key={col.path || col.key}
              onClick={() => this.sortRaised(col.path)}
              scope="col"
            >
              {col.label} {this.handleSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
 
export default TableHeaders;