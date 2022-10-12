import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// @mui material components
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import axios from "axios";

function ShipmentDetail() {
  const { id } = useParams();
  const [editable, setEditable] = useState(true);

  const [shipment, setShipment] = useState();

  const getShipment = async () => {
    const { data: shipments } = await axios("http://localhost:3000/shipments.txt");
    setShipment(shipments.at(id - 1));
  };

  useEffect(() => {
    getShipment().catch((err) => err);
  }, []);

  const handleEditable = () => {
    setEditable(false);
  };

  const handleSave = () => {
    setEditable(true);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <MDBox pt={3}>
          <Divider />
        </MDBox>
        <MDBox pt={2} px={2} display="flex" alignItems="center">
          <MDTypography variant="button" fontWeight="medium" textTransform="uppercase" color="text">
            Shipment Details
          </MDTypography>
        </MDBox>
        <MDBox p={3}>
          {shipment && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <MDBox display="flex" flexDirection="column" alignItems="left">
                  <MDTypography pb={1} variant="caption" color="dark" fontWeight="medium">
                    orderNo
                  </MDTypography>
                  <MDInput type="text" defaultValue={shipment.orderNo} disabled={editable} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDBox display="flex" flexDirection="column" alignItems="left">
                  <MDTypography pb={1} variant="caption" color="dark" fontWeight="medium">
                    date
                  </MDTypography>
                  <MDInput type="text" defaultValue={shipment.date} disabled={editable} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDBox display="flex" flexDirection="column" alignItems="left">
                  <MDTypography pb={1} variant="caption" color="dark" fontWeight="medium">
                    customer
                  </MDTypography>
                  <MDInput type="text" defaultValue={shipment.customer} disabled={editable} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDBox display="flex" flexDirection="column" alignItems="left">
                  <MDTypography pb={1} variant="caption" color="dark" fontWeight="medium">
                    trackingNo
                  </MDTypography>
                  <MDInput type="text" defaultValue={shipment.trackingNo} disabled={editable} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDBox display="flex" flexDirection="column" alignItems="left">
                  <MDTypography pb={1} variant="caption" color="dark" fontWeight="medium">
                    consignee
                  </MDTypography>
                  <MDInput type="text" defaultValue={shipment.consignee} disabled={editable} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDBox display="flex" flexDirection="column" alignItems="left">
                  <MDTypography pb={1} variant="caption" color="dark" fontWeight="medium">
                    status
                  </MDTypography>
                  <MDInput type="text" defaultValue={shipment.status} disabled={editable} />
                </MDBox>
              </Grid>
            </Grid>
          )}
        </MDBox>
        <Divider />
        <MDBox pb={2} px={1} display="flex" flexDirection="row-reverse" alignItems="center">
          <MDButton variant="gradient" color="dark" sx={{ m: 1 }} onClick={handleEditable}>
            <Icon sx={{ fontWeight: "bold" }}>edit</Icon>
            &nbsp;Edit
          </MDButton>
          <MDButton variant="gradient" color="info" onClick={handleSave}>
            <Icon sx={{ fontWeight: "bold" }}>save</Icon>
            &nbsp;Save
          </MDButton>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default ShipmentDetail;
