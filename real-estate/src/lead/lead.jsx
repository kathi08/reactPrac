import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import LeadGrid from "./leadGrid";
import LeadForm from "./leafForm";
import Drawer from "@mui/material/Drawer";
import authFetch from "../custom";


export default function Lead() {
  const [open, setOpen] = React.useState(false);
  const [id, setid] = React.useState([]);
  const [action , setActtion] = React.useState('');

  console.log(action);

  const toggleDrawer = (newOpen) => () => {
    if(newOpen == 1){
      setActtion('add')
    }
    setOpen(newOpen);
  };

  const opende =() => {

    setOpen(true);
  }


  return (
    <div>
      <LeadGrid open1={open} id={id} setid={setid} opende={opende} action={action} setActtion={setActtion}/>
      <Button onClick={toggleDrawer(true)}>add lead</Button>
      <Drawer  open={open} onClose={toggleDrawer(false)} anchor="right">
        <LeadForm  toggleDrawer={setOpen} id={id} setid={setid} action={action} setActtion={setActtion}/>
      </Drawer>
    </div>
  );
}
