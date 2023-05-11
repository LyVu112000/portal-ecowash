import React from "react";
import StaffList from "./pages/staff/StaffList";
import DepartmentList from "./pages/department/DepartmentList";
import Dashboard from "./dashboard/Dashboard";
import AddRole from "./pages/role/DetailRole";
import TruckList from "./pages/truck/TruckList";

const ReceivedOrderList = React.lazy(() =>
  import("./order/recevied/ReceivedOrderList")
);
const Roles = React.lazy(() => import("./pages/role/roles"));
const OrderList = React.lazy(() => import("./order/order/OrderList"));
const DeliveryOrderList = React.lazy(() =>
  import("./order/delivery/DeliveryOrderList")
);
const CustomerList = React.lazy(() => import("./pages/customer/CustomerList"));
const AccountList = React.lazy(() => import("./pages/account/accountList"));
const Items = React.lazy(() => import("./pages/items/ProductItems"));
const Report = React.lazy(() => import("./pages/report/Report"));
const AggregatedByCustomer = React.lazy(() =>
  import("./pages/aggregatedByCustomer/AggregatedByCustomer")
);
const AggregatedByItems = React.lazy(() =>
  import("./pages/aggregatedByItems/AggregatedByItems")
);

const ProductGroupList = React.lazy(() =>
  import("./pages/productGroup/ProductGroupList")
);
const ContractList = React.lazy(() => import("./pages/contracts/ContractList"));

const Planning = React.lazy(() => import("./pages/planning/Planning"));
const ReceivedReceiptErrorList = React.lazy(() =>
  import("./pages/receivedReceiptError/ReceivedReceiptErrorList")
);
const DeliveryReceiptErrorList = React.lazy(() =>
  import("./pages/deliveryReceiptError/DeliveryReceiptErrorList")
);
const DashboardReceipt = React.lazy(() =>
  import("./pages/dashboard/DashboardReceipt")
);
const BillReportList = React.lazy(() =>
  import("./pages/BillReport/BillReportList")
);
const FinalDebtList = React.lazy(() =>
  import("./pages/finalDebt/finalDebt")
);

const BillReportListV2 = React.lazy(() => import("./pages/BillReportV2/BillReportListV2"))

const routes = [
  { 
    isAccess: true,
    path: "/", 
    exact: true, 
    name: "Home" 
  },
  {
    path: "/staff",
    exact: true,
    name: "StaffList",
    component: StaffList,
  },
  {
    path: "/department",
    exact: true,
    name: "Department",
    component: DepartmentList,
  },
  {
    path: "/truck",
    exact: true,
    name: "TruckList",
    component: TruckList,
  },
  {
    path: "/customer",
    exact: true,
    name: "CustomerList",
    component: CustomerList,
  },
  {
    path: "/receivedOrders",
    name: "receivedOrders",
    component: ReceivedOrderList,
  },
  { 
    path: "/role",
    name: "role", 
    component: Roles 
  },
  // { path: "/orders", name: "orders", component: OrderList },
  { 
    path: "/deliveryOrders",
    name: "orders", 
    component: DeliveryOrderList 
  },
  {
    path: "/account",
    name: "account",
    component: AccountList,
  },
  {
    path: "/productItem",
    name: "productItem",
    component: Items,
  },
  // {
  //   path: "/report",
  //   name: "Report",
  //   component: Report,
  // },
  // {
  //   path: "/aggregated_by_customer",
  //   name: "aggregatedByCustomer",
  //   component: AggregatedByCustomer,
  // },
  // {
  //   path: "/aggregated_by_items",
  //   name: "aggregatedByItems",
  //   component: AggregatedByItems,
  // },
  {
    path: "/productGroup",
    name: "ProductGroupList",
    component: ProductGroupList,
  },
  {
    path: "/planning",
    name: "planning",
    component: Planning,
  },
  {
    path: "/contracts",
    name: "contractList",
    component: ContractList,
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
  {
    path: "/receivedReceiptError",
    name: "receivedReceiptErrorList",
    component: ReceivedReceiptErrorList,
  },
  // { path: "/addRole", name: "addRole", component: AddRole },
  {
    path: "/deliveryReceiptError",
    name: "deliveryReceiptError",
    component: DeliveryReceiptErrorList,
  },
  {
    path: "/dashboardReceipt",
    name: "dashboardReceipt",
    component: DashboardReceipt,
  },
  // {
  //   isAccess: PermissionUtil.viewResourceMenu(menuRoleConstant.REPORT),
  //   path: "/billReport",
  //   name: "billReport",
  //   component: BillReportList,
  // },
  {
    path: "/finalDebt",
    name: "finalDebt",
    component: FinalDebtList,
  },
  {
    path: "/billReportV2",
    name: "billReportV2",
    component: BillReportListV2,
  },
];

export default routes;
