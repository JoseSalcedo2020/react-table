import React from "react";

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <span>
      <input
        placeholder={'Search'}
        value={globalFilter || ""}
        onChange={(e) => {
          setGlobalFilter(e.target.value);
        }}
      />
    </span>
  );
}

export default GlobalFilter;
