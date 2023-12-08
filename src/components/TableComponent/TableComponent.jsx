import { Table } from "antd";
import React, { useState } from "react";
import Loading from "../LoadingComponent/Loading";
const TableComponent = (props) => {
  const {
    handleDeleteMany,
    selectionType = "checkbox",
    data = [],
    isLoading = false,
    columns = [],
  } = props;

  const [rowSelectedKeys, setRowSelectedKeys] = useState([]);
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSelectedKeys(selectedRowKeys);
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === "Disabled User",
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
  };
  const handleDeleteAll = () => {
    handleDeleteMany(rowSelectedKeys);
  };

  return (
    <>
      {rowSelectedKeys.length > 0 && (
        <div
          style={{
            color: "#fff",
            fontWeight: "bold",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={handleDeleteAll}
        >
          Delete All
        </div>
      )}

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        {...props}
      />
    </>
  );
};

export default TableComponent;
