import React, { useEffect, useState } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Radio, IconButton, Pagination, Box } from "@mui/material";
import { styled } from "@mui/system";
import DistributerDetailModal from "./DetailModal"; // Import the Modal component

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
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch("/DistributerJsonData.json")
      .then((response) => response.json())
      .then((data) => setRows(data.data))
      .catch((error) => console.error("Error loading data:", error));
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
      <TableContainer>
        <Table size="small" sx={{ borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F0F0F0" }}>
              <TableCell sx={{ backgroundColor: "#F0F0F0" }}><b>Distributer ID</b></TableCell>
              <TableCell sx={{ backgroundColor: "#F0F0F0" }}><b>Distributer Name</b></TableCell>
              <TableCell sx={{ backgroundColor: "#F0F0F0" }}><b>Date</b></TableCell>
              <TableCell sx={{ backgroundColor: "#F0F0F0" }}><b>Email</b></TableCell>
              <TableCell sx={{ backgroundColor: "#F0F0F0", textAlign: "center" }}><b>Content</b></TableCell>
              <TableCell sx={{ backgroundColor: "#F0F0F0", textAlign: "center" }}><b>Status</b></TableCell>
              <TableCell sx={{ borderTopRightRadius: 8, backgroundColor: "#F0F0F0", textAlign: "center" }}><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row, index) => (
              <TableRow key={index} sx={{ height: "24px", "& td": { borderBottom: "none", padding: "4px 8px" } }}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Radio checked={selectedRow === index} onChange={() => setSelectedRow(index)} />
                    {row.id}
                  </Box>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell sx={{ color: "#12CA95", cursor: "pointer", textAlign: "center" }} onClick={() => handleViewClick(row)}>{row.content}</TableCell>
                <TableCell sx={{ textAlign: "center", width: "100px" }}>
                  <span 
                    style={{ 
                      backgroundColor: row.status === "Failed" ? "#FDECEA" : row.status === "Pending" ? "#F5F5F5" : "#E8F5E9", 
                      color: row.status === "Failed" ? "#D32F2F" : row.status === "Pending" ? "#757575" : "#12CA95", 
                      borderRadius: "16px", 
                      padding: "2px 12px", 
                      display: "inline-block", 
                      fontSize: "12px" 
                    }}
                  >
                    {row.status}
                  </span>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <IconButton>
                    <img src="/delete.svg" alt="Delete" style={{ width: "12.445px", height: "14.002px", flexShrink: 0, fill: "#808199" }} />
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

      {/* Pass the necessary props to the Modal */}
      <DistributerDetailModal
        open={openModal}
        onClose={handleCloseModal}
        row={selectedRow}
      />
    </div>
  );
};

export default DistributerData;
