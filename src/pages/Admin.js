import React, { useState, useEffect } from "react";
import {} from "mdb-react-ui-kit";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Button,
  Typography,
  Stack,
  Box,
} from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Admin = () => {
  const [userData, setUserData] = useState([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:3001/register", {
      method: "GET",
    });
    const data = await response.json();
    setUserData(data);
    console.log(data);
  };
  useEffect(() => {
    getUser();
  });

  // for tabs

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddEmployee = () => {
    window.location.href = "/addEmployee";
  };

  return (
    <>
      <Header />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 20, borderColor: "lightgrey" }}>
          <Tabs value={value} onChange={handleChange} aria-label="Data base">
            <Tab
              label="User Data"
              {...a11yProps(0)}
              style={{ color: "#fa204c" }}
            />
            <Tab label="Sales executive data" {...a11yProps(1)} />
            <Tab label="Sales data" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* user data */}
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="medium"
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <TableCell> Database id</TableCell>
                  <TableCell> Firstname</TableCell>
                  <TableCell>Lastname</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Blance</TableCell>
                  <TableCell>createdAt</TableCell>
                  <TableCell>updatedAt</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {userData.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.FirstName}</TableCell>
                    <TableCell>{row.LastName}</TableCell>
                    <TableCell>{row.DOB}</TableCell>
                    <TableCell>{row.Gender}</TableCell>
                    <TableCell>{row.Email}</TableCell>
                    <TableCell>{row.Phone}</TableCell>
                    <TableCell>{row.Password}</TableCell>
                    <TableCell>{row.Blance}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>{row.updatedAt}</TableCell>
                    <TableCell>
                      <Button variant="outlined" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* // seles executive data Item Two */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Emloye id</TableCell>
                  <TableCell>Emloye Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Date crated</TableCell>
                  <TableCell>Date Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>1</TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            style={{ backgroundColor: "#fa204c" }}
            onClick={handleAddEmployee}
          >
            Add Employee
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {/* sales data */}
        </CustomTabPanel>
      </Box>
      <Footer />
    </>
  );
};

export default Admin;
