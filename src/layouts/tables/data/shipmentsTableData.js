/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import { useState, useEffect } from "react";
import axios from "axios";

export default function data() {
  const [shipmentsData, setShipmentsData] = useState([]);

  const getShipments = async () => {
    await axios("http://localhost:3000/shipments.txt").then((response) =>
      setShipmentsData(response.data)
    );
  };

  useEffect(() => {
    getShipments().catch((error) => error);
  }, []);
  console.log(shipmentsData);

  const rows = shipmentsData.map((shipment) => ({
    orderNo: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {shipment.orderNo}
      </MDTypography>
    ),
    date: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {shipment.date}
      </MDTypography>
    ),
    customer: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {shipment.customer}
      </MDTypography>
    ),
    trackingNo: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {shipment.trackingNo}
      </MDTypography>
    ),
    status: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {shipment.status}
      </MDTypography>
    ),
    consignee: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {shipment.consignee}
      </MDTypography>
    ),
    action: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        edit
      </MDTypography>
    ),
  }));
  return {
    columns: [
      { Header: "orderNo", accessor: "orderNo" },
      { Header: "deliveryDate", accessor: "date" },
      { Header: "customer", accessor: "customer" },
      { Header: "trackingNo", accessor: "trackingNo" },
      { Header: "status", accessor: "status" },
      { Header: "consignee", accessor: "consignee" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows,
  };
}
