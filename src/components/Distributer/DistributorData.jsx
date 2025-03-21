import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Radio,
  IconButton,
  Pagination,
  Box,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import DistributerDetailModal from "./DetailModal"; // Import the Modal component

// Reusable style function for header and body cells
const cellStyle = {
  color: "#808199",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  padding: "8px", // Consistent padding for both header and body cells
};

const headerCellStyle = {
  color: "#808199",
  fontFamily: "Poppins",
  fontSize: "14px", // Increased font size
  fontStyle: "normal",
  // fontWeight: 400, // Made it bolder for emphasis
  lineHeight: "normal",
  padding: "12px", // Increased padding for better spacing
};

// Reusable style for the "Actions" column cell
const actionCellStyle = {
  textAlign: "center",
  color: "#808199",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  padding: "8px",
};

// Reusable style for the pagination component
const CustomPagination = styled(Pagination)({
  "& .Mui-selected": {
    backgroundColor: "#F0F6FA !important",
    color: "#000 !important",
    fontWeight: "bold !important",
  },
  "& .MuiPaginationItem-root": {
    color: "#A2A3C2",
  },
});

const DistributerData = () => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to track data fetch

  useEffect(() => {
    // Fetch data and set loading state
    fetch("/DistributerJsonData.json")
      .then((response) => response.json())
      .then((data) => {
        setRows(data.data);
        setLoading(false); // Data loaded, set loading to false
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false); // In case of an error, stop the loading spinner
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleViewClick = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  return (
    <div>
      {/* Display the loader if loading is true */}
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress size={50} />
        </Box>
      ) : (
        <TableContainer>
          <Table
            size="small"
            sx={{
              borderCollapse: "collapse", // Ensure border collapse for alignment
              width: "100%", // Make sure the table spans the full container width
            }}
          >
            <TableHead sx={{backgroundColor: "#DFE7ED"}}>
  <TableRow sx={{ backgroundColor: "#DFE7ED" }}>
    <TableCell
      sx={{
        ...headerCellStyle,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingLeft: 6,
        paddingRight: 10,
      }}
    >
      <b>Distributer ID</b>
    </TableCell>
    <TableCell sx={headerCellStyle}>
      <b>Distributer Name</b>
    </TableCell>
    <TableCell sx={headerCellStyle}>
      <b>Date</b>
    </TableCell>
    <TableCell sx={headerCellStyle}>
      <b>Email</b>
    </TableCell>
    <TableCell sx={{ ...headerCellStyle, textAlign: "center" }}>
      <b>Content</b>
    </TableCell>
    <TableCell sx={{ ...headerCellStyle, textAlign: "center" }}>
      <b>Status</b>
    </TableCell>
    <TableCell sx={{ ...headerCellStyle, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
      <b>Actions</b>
    </TableCell>
  </TableRow>
</TableHead>


            <TableBody>
              {rows
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      height: "24px",
                      "& td": {
                        borderBottom: "none",
                        padding: "4px 8px", // Ensuring consistent padding with TableHead cells
                      },
                    }}
                  >
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Radio
                          checked={selectedRow === index}
                          onChange={() => setSelectedRow(index)}
                        />
                        {row.id}
                      </Box>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell
                      sx={{ color: "#12CA95", cursor: "pointer", textAlign: "center" }}
                      onClick={() => handleViewClick(row)}
                    >
                      {row.content}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", width: "100px" }}>
                      <span
                        style={{
                          backgroundColor:
                            row.status === "Failed"
                              ? "#FDECEA"
                              : row.status === "Pending"
                              ? "#F5F5F5"
                              : "#E8F5E9",
                          color:
                            row.status === "Failed"
                              ? "#D32F2F"
                              : row.status === "Pending"
                                ? "#757575"
                                : "#12CA95",
                          borderRadius: "16px",
                          padding: "2px 12px",
                          display: "inline-block",
                          fontSize: "12px",
                        }}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell sx={actionCellStyle}>
                      <IconButton>
                        <img
                          src="/delete.svg"
                          alt="Delete"
                          style={{
                            width: "12.445px",
                            height: "14.002px",
                            flexShrink: 0,
                            fill: "#808199",
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="center" mt={2}>
            <CustomPagination
              count={Math.ceil(rows.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              shape="rounded"
              color="primary"
            />
          </Box>
        </TableContainer>
      )}

      {/* Pass the necessary props to the Modal */}
      <DistributerDetailModal open={openModal} onClose={handleCloseModal} row={selectedRow} />
    </div>
  );
};

export default DistributerData;
