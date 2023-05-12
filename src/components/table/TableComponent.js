import * as React from "react";
import ReactTable from "react-table";
import { heightOfTbl } from "../../util/Utils";
import "react-table/react-table.css";

export default function TableComponent({
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
}) {
  return (
    <ReactTable
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
  );
}
