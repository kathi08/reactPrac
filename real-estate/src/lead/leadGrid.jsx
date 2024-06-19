import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import authFetch from "../custom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const LeadGrid = (props) => {
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "leadName", headerName: "leadName", width: 90 },
    { field: "leadEmail", headerName: "leadEmail", width: 90 },

    {
      field: "leadPhoneNumber",
      headerName: "leadPhoneNumber",
      width: 150,
      type: "number",
      editable: true,
    },
    {
      field: "leadStatus",
      headerName: "leadStatus",
      type: "text",
      width: 90,
    },
    {
      field: "",
      headerName: "action",
      renderCell: (params) => {
        return (
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={(event) => {
              handleClick(event, params);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        );
      },
    },
  ];

  const { open1, id, setid, opende , action , setActtion } = props;
  const [data, setData] = useState([]);
  const [dopen, dsetOpen] = React.useState(false);

  const dhandleClose = () => {
    dsetOpen(false);
  };
  const deleteData = () => {
    authFetch.post(`/lead/deleteMany`, id).then((y) => {
      console.log(y);
    });

    dhandleClose();
  };

  const handleDeleteOpen = () => {
    dsetOpen(true);
    handleClose();
  };

  useEffect(() => {
    authFetch.get("/lead").then((y) => {
      setData(
        y.data.map((p) => {
          return { ...p, id: p._id };
        })
      );
    });
  }, [dopen, open1]);

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, params) => {
    setAnchorEl(event.currentTarget);

    console.log(params);
    setid([params.row._id]);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const manageEdit = (e) => {
    setActtion('edit')
    opende();
    handleClose();
  };

  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />

        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem onClick={manageEdit}>Edit</MenuItem>

          <MenuItem onClick={handleDeleteOpen}>Delete</MenuItem>
        </Menu>
      </Box>

      <Dialog
        open={dopen}
        onClose={dhandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are u sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dhandleClose}>no</Button>
          <Button onClick={deleteData} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeadGrid;
