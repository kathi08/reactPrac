import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ContactForm from './ContactForm';
import ContactGrid from './ContactGrid';

export default function Contact() {

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
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
    <ContactForm toggleDrawer={setOpen} id={id} setid={setid} action={action} setActtion={setActtion}/>
      </Drawer>
    <ContactGrid open1={open} id={id} setid={setid} opende={opende} action={action} setActtion={setActtion}/>
    </div>
  )
}