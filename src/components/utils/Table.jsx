import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";



export default function BasicTable(props) {
    const { titledata, contentdata, tableData } = props;
    console.log(Object.values(contentdata[0]));
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

                {Object.values(item).map((row,index)=><TableCell key={index}>{row}</TableCell>)}
                
                
                {/* {(item.edit)?<TableCell>
                  <BorderColorOutlinedIcon
                    sx={{
                      color: "#d01443",
                    }}
                  />
                </TableCell>:null} */}
                
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
