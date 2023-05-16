import React, { useState } from "react";
import TableComponent from "../../components/table/TableComponent";
import { Link } from "@mui/material";
import DetailedReportPopup from "./DetailedReportPopup";
const DebtClosingTab = () => {
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState([]);
  const [billType, setBillType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const columns = [
    {
      Header: "STT",
      id: "code",
      width: 50,
      accessor: (data) => data.code,
      className: "center",
    },
    {
      Header: "Tên mặt hàng",
      id: "items",
      accessor: (data) => data.items,
      className: "center",
    },
    {
      Header: "Số lượng chốt công nợ",
      id: "number",
      className: "center",
      accessor: (data) => (
        <Link
          className="link-code"
          component="button"
          variant="body2"
          onClick={(e) => handleClickOpen(data)}
        >
          {data.number}
        </Link>
      ),
    },
  ];
  const data = [
    {
      code: "1",
      items: "Khăn body  (1pcs)",
      number: "10",
      id: 1,
      billType: "received",
      detailData: [
        {
          stt: 1,
          id: 684,
          code: "Elite_Q1-010323-002N",
          name: "Khăn body  (1pcs)",
          receivedDate: "20/12/2022 09:00",
          finishedDate: "01/01/2023 15:00",
          weight: "20",
          number: "4",
        },
        {
          stt: 2,
          id: 242,
          code: "Elite_Q1-010323-003N",
          name: "Khăn body  (1pcs)",
          receivedDate: "20/12/2022 10:00",
          finishedDate: "01/01/2023 16:30",
          weight: "20",
          number: "6",
        },
      ],
    },
    {
      code: "2",
      items: "Khăn mặt  (2pcs)",
      number: "5",
      id: 2,
      billType: "received",
      detailData: [
        {
          stt: 1,
          id: 684,
          code: "Elite_Q1-010323-004N",
          name: "Khăn mặt  (2pcs)",
          receivedDate: "20/12/2022 07:00",
          finishedDate: "01/01/2023 15:45",
          weight: "20",
          number: "5",
        },
      ],
    },
    {
      code: "3",
      items: "Mền  (1pcs)",
      number: "3",
      id: 3,
      billType: "received",
      detailData: [
        {
          stt: 1,
          id: 684,
          code: "Elite_Q1-010323-005N",
          name: "Mền  (1pcs)",
          receivedDate: "20/12/2022 09:50",
          finishedDate: "01/01/2023 14:45",
          weight: "20",
          number: "3",
        },
      ],
    },
  ];

  const handleClickOpen = (data) => {
    setSelectedId(data.id);
    setBillType(data.billType);
    setOpen(true);
    setDetailData(data.detailData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TableComponent data={data} columns={columns} />
      {open && (
        <DetailedReportPopup
          open={open}
          onOpenAndClose={handleClose}
          selectedId={selectedId}
          billType={billType}
          data={detailData}
          isDebt={true}
        />
      )}
    </div>
  );
};

export default DebtClosingTab
