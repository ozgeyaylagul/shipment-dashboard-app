import React from "react";
import { useParams } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function ShipmentDetail() {
  const { id } = useParams();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h1>{id}</h1>
    </DashboardLayout>
  );
}

export default ShipmentDetail;
