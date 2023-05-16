import React, { useState } from "react";
import {
  CBadge,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdownNotif = () => {
  const [check, setCheck] = useState(false);
  const itemsCount = 5;
  return (
    <CDropdown inNav className="c-header-nav-item mx-2">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell" />
        <CBadge shape="pill" color="danger">
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu
        placement="bottom-end"
        className="pt-0 pb-0 drop_down_menu"
        style={{ overflow: "hidden scroll", height: "50vh" }}
      >
        {/* <CDropdownItem header tag="div" className="text-center" color="light">
          <strong>You have {itemsCount} notifications</strong>
        </CDropdownItem> */}
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          1 2 3 4 5 6 7 8 9 1 1 1 1 1 1 12 3 54 3 2 23 4321 4321 432144321
          43214321 1 2 3 4 5 6 7 8 9 1 1 1 1 1 1 12 3 54 3 2 23 4321 4321
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(!check);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
        <CDropdownItem
          onClick={() => {
            setCheck(true);
          }}
          className={check ? "seen" : "unSeen"}
        >
          New user registered
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdownNotif;
