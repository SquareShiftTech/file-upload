import React, { useEffect, useState } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Radio, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DistributerData = () => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch("/DistributerJsonData.json")
      .then((response) => response.json())
      .then((data) => setRows(data.data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3, borderRadius: 2, overflow: "hidden" }}>
      <Table size="small" sx={{ borderCollapse: "collapse" }}>
        <TableHead sx={{ backgroundColor: "#F0F0F0", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
          <TableRow sx={{ "& th": { borderBottom: "none" } }}>
            <TableCell sx={{ borderTopLeftRadius: 8 }}></TableCell>
            <TableCell><b>Distributer ID</b></TableCell>
            <TableCell><b>Distributer Name</b></TableCell>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Email</b></TableCell>
            <TableCell><b>Content</b></TableCell>
            <TableCell><b>Status</b></TableCell>
            <TableCell sx={{ borderTopRightRadius: 8 }}><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ height: "30px", "& td": { borderBottom: "none" } }}>
              <TableCell>
                <Radio 
                  checked={selectedRow === index} 
                  onChange={() => setSelectedRow(index)}
                />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell sx={{ color: "#12CA95", cursor: "pointer" }}>{row.content}</TableCell>
              <TableCell sx={{ backgroundColor: "#E8F5E9", color: "#12CA95", borderRadius: 1, textAlign: "center", width: "80px" }}>{row.status}</TableCell>
              <TableCell>
                <IconButton>
                  <DeleteIcon sx={{ color: "gray" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DistributerData;