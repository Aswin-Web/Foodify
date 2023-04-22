import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Avatar } from "@mui/material";



export default function BasicTable(props) {
    const {titledata, contentdata}=props
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {titledata.map((item, index) => (
              <TableCell align="left" key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {contentdata.map((item) => (
            <>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.sl_no}</TableCell>
                <TableCell component="th" sx={
                    {
                        display:'flex',
                        alignItems:'center',
                    }
                }>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sx={{
                    padding:'5px',
                    marginRight:"8px"
                  }}
                    />
                  {item.name}
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.status}</TableCell>
                {(item.edit)?<TableCell>
                  <BorderColorOutlinedIcon
                    sx={{
                      color: "#d01443",
                    }}
                  />
                </TableCell>:null}
                
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
