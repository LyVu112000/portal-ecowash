import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useState } from "react";
import { Button } from "@mui/material";
import DialogDetail from "src/components/dialogDetail/DialogDetail";
import { useDispatch } from "react-redux";
import { changeBg } from "src/reducers/bgColorReducer";
import { useStylesMui } from "src/css/makeStyles";

const TheHeaderPickColor = () => {
  const [color, setColor] = useState(
    sessionStorage.getItem("color") || "bg-gray"
  );
  const classes = useStylesMui();
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const pickColor = () => {
    sessionStorage.setItem("color", color);
    dispatch(changeBg({ type: "SET", bgColor: color }));

    handleClose();
  };
  const handleClose = () => {
    setOpen(!isOpen);
  };
  const activeColor = () => {
    return (
      <div style={{ position: "absolute", top: "25%" }}>
        <img src="/images/checked.png" height={"20"} alt="" />
      </div>
    );
  };
  return (
    <div>
      <button className="bg-transparent border-0" onClick={handleClose}>
        <img src="/images/color-wheel.png" height={"20"} alt="" />
      </button>
      <DialogDetail
        open={isOpen}
        handleClose={handleClose}
        title="Thiết lập màu sắc"
        maxWidth="md"
        onSave={pickColor}
      >
        <div className="row m-3 gap-3 flexCenter">
          <div
            className={`col-2 boxColor  ${
              color === "bg-gray" ? "boxColorActive" : ""
            } `}
            onClick={() => {
              setColor("bg-gray");
            }}
          >
            <div className="d-flex flex-row flexCenter bg-gray ">
              <div
                style={{ background: "#eceef1 " }}
                className="sizeColor"
              ></div>
              <div
                style={{ background: "#393a3d " }}
                className=" sizeColor"
              ></div>
              {color === "bg-gray" ? activeColor() : ""}
            </div>
            Ghi xám
          </div>
          <div
            className={`col-2 boxColor  ${
              color === "bg-purple" ? "boxColorActive" : ""
            } `}
            onClick={() => {
              setColor("bg-purple");
            }}
          >
            <div className="d-flex flex-row flexCenter bg-purple">
              <div
                style={{ background: "#d9e1fb " }}
                className=" sizeColor"
              ></div>
              <div
                style={{ background: "#5d6b99 " }}
                className=" sizeColor"
              ></div>
              {color === "bg-purple" ? activeColor() : ""}
            </div>
            Tím
          </div>
          <div
            className={`col-2 boxColor  ${
              color === "bg-turquoise" ? "boxColorActive" : ""
            } `}
            onClick={() => {
              setColor("bg-turquoise");
            }}
          >
            <div className="d-flex flex-row flexCenter bg-turquoise">
              <div
                style={{ background: "#d7edef " }}
                className=" sizeColor"
              ></div>
              <div
                style={{ background: "#0598a7 " }}
                className=" sizeColor"
              ></div>
              {color === "bg-turquoise" ? activeColor() : ""}
            </div>
            Xanh ngọc
          </div>
          <div
            className={`col-2 boxColor  ${
              color === "bg-green" ? "boxColorActive" : ""
            } `}
            onClick={() => {
              setColor("bg-green");
            }}
          >
            <div className="d-flex flex-row flexCenter bg-green">
              <div
                style={{ background: "#e4e9e7 " }}
                className=" sizeColor"
              ></div>
              <div
                style={{ background: "#2aa11c " }}
                className=" sizeColor"
              ></div>
              {color === "bg-green" ? activeColor() : ""}
            </div>
            Xanh lá cây
          </div>
          <div
            className={`col-2 boxColor  ${
              color === "bg-black-white" ? "boxColorActive" : ""
            } `}
            onClick={() => {
              setColor("bg-black-white");
            }}
          >
            <div className="d-flex flex-row flexCenter bg-black-white">
              <div
                style={{ background: "black " }}
                className=" sizeColor"
              ></div>
              <div
                style={{ background: "white " }}
                className=" sizeColor"
              ></div>
              {color === "bg-black-white" ? activeColor() : ""}
            </div>
            Trắng đen
          </div>
        </div>
      </DialogDetail>
    </div>
  );
};

export default TheHeaderPickColor;
