import React from "react";
import { useTable, useSortBy, useGlobalFilter} from "react-table";
import Data from "../data/8col-1000-rows";
import GlobalFilter from "./GlobalFilter";

function Table() {
  const data = React.useMemo(() => Data, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "FIRST NAME",
        accessor: "first_name",
      },
      {
        Header: "LAST NAME",
        accessor: "last_name",
      },
      {
        Header: "EMAIL",
        accessor: "email",
      },
      {
        Header: "GENDER",
        accessor: "gender",
      },
      {
        Header: "LANGUAGE",
        accessor: "language",
      },
      {
        Header: "COUNTRY",
        accessor: "country",
      },
      {
        Header: "CITY",
        accessor: "city",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useSortBy);

  const { globalFilter } = state;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          <tr>
            <GlobalFilter
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽   "
                        : " 🔼   "
                      : " ◀   "}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
