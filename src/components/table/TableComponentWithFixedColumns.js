import React from 'react'
import ReactTable from "react-table";
import {withFixedColumnsScrollEvent } from "react-table-hoc-fixed-columns";
import { heightOfTbl } from "../../util/Utils";
import 'react-table-hoc-fixed-columns/lib/styles.css'
import "react-table/react-table.css";

const ReactTableFixedColumns = withFixedColumnsScrollEvent(ReactTable);

const TableComponentWithFixedColumns = ({
    page,
    data,
    columns,
    onPageSizeChange,
    onPageChange,
    pageSize,
    loading = false,
    pages,
    showPagination = true,
    getTrProps
}) => {
  return (
    <ReactTableFixedColumns
      noDataText={"Không tìm thấy kết quả"}
      onPageSizeChange={(pageSize, pageIndex) => {
        onPageSizeChange(pageSize, pageIndex);
      }}
      onPageChange={(pageIndex) => {
        onPageChange(pageIndex);
      }}
      style={{ height: heightOfTbl, marginTop: "20px" }} //TODO
      data={data}
      resolveData={(data) => data.map((row) => row)}
      columns={columns}
      page={page}
      pages={pages}
      pageSize={pageSize}
      loading={loading}
      className="-striped -highlight margin-top-20"
      autoResetPage={false}
      manual
      showPagination={showPagination}
      getTrProps={getTrProps}
    />
  )
}

export default TableComponentWithFixedColumns