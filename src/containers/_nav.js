import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Quản lý tài nguyên']
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    route: "/dashboardReceipt",
    icon: "cil-puzzle",
    to: "/dashboardReceipt",
    style: {
      display: "flex"
    }
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Danh mục",
    route: "/resource",
    icon: "cil-puzzle",
    style: {
      display: "block"
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Phòng ban",
        to: "/department",
        style: {
          display:"block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Nhân viên",
        to: "/staff",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Xe",
        to: "/truck",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Khách hàng",
        to: "/customer",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tài khoản KH",
        to: "/account",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Nhóm hàng",
        to: "/productGroup",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Mặt hàng",
        to: "/productItem",
        style: {
          display: "block"
        }
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Kế Hoạch",
    route: "/resource",
    icon: "cil-puzzle",
    style: {
      display:"block"
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Hợp đồng",
        to: "/contracts",
        style: {
          display: "block"
        }
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Đơn hàng",
      //   to: "/orderManagement",
      // },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Khách hàng",
      //   to: "/customer1",
      // },
      {
        _tag: "CSidebarNavItem",
        name: "Kế hoạch sản xuất",
        to: "/planning",
        style: {
          display: "block"
        }
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Phiếu giao/nhận",
    route: "/order",
    icon: "cil-puzzle",
    style: {
      display: "block"
    },
    _children: [
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Tổng hợp phiếu",
      //   to: "/orders",
      // },
      {
        _tag: "CSidebarNavItem",
        name: "Phiếu nhận",
        to: "/receivedOrders",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Phiếu giao",
        to: "/deliveryOrders",
        style: {
          display: "block"
        }
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Phiếu lỗi",
    route: "/order",
    icon: "cil-puzzle",
    style: {
      display:"block"
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Phiếu nhận",
        to: "/receivedReceiptError",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Phiếu giao",
        to: "/deliveryReceiptError",
        style: {
          display: "block"
        }
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Báo cáo",
    route: "/order",
    icon: "cil-puzzle",
    style: {
      display: "block"
    },
    _children: [
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Báo cáo tổng hợp",
      //   to: "/billReport",
      //   style: {
      //     display: PermissionUtil.viewResourceMenu(menuRoleConstant.REPORT) ? "block" 
      //   }
      // },
      {
        _tag: "CSidebarNavItem",
        name: "Báo cáo tổng hợp V2",
        to: "/billReportV2",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quyết toán nợ",
        to: "/finalDebt",
        style: {
          display: "block"
        }
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Lịch sử đơn hàng",
      //   to: "/base/5",
      // },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Báo cáo tổng",
      //   to: "/report",
      // },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Tổng hợp theo khách",
      //   to: "/aggregated_by_customer",
      // },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Tổng hợp theo mặt hàng",
      //   to: "/aggregated_by_items",
      // },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Thiết lập",
    route: "/config",
    icon: "cil-puzzle",
    style: {
      display:"block"
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Phân quyền",
        to: "/role",
        style: {
          display: "block"
        }
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cấu hình",
        to: "/role",
        style: {
          display: "block"
        }
      },
    ],
  },
];

export default _nav;
