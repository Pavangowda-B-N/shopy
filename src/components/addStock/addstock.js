import { useState } from "react";
import "./addstock.css"
import axios from "axios"

import {Button,Typography} from "@mui/material"
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
function AddStock(){
    const [title,settitle]=useState('')
    const [description,setdescription]=useState('')
    const [imgurl,setimgurl]=useState('')
    const [cost,setcost]=useState('')
    const [rate,setrate]=useState('')
    const [status,setStatus]=useState("Upload")
    const [datastatus,setdatastatus]=useState('')
    function updateTitle(event){
        settitle(event.target.value)
    }
    function updatedesc(event){
        setdescription(event.target.value)
    }
    function updateurl(event){
        setimgurl(event.target.value)
    }
    function updatecost(event){
        setcost(event.target.value)
    }
    function updaterate(event){
        setrate(event.target.value)
    }
 
    function upload(event){
        setStatus('Uploading....')
        event.preventDefault();
        const newdata={
            title:title,
            description:description,
            imgurl:imgurl,
            cost:cost,
            rate:rate
        }
        // axios.post("http://localhost:6060/addstock",newdata)
        axios.post('https://pavan-shopy-server.herokuapp.com/addstock',newdata)
        .then(res=>{
            // console.log(res)
            console.log("data sent")  
            settitle('');
            setdescription('')
            setcost('')
            setimgurl('')
            setrate('')
            setStatus('Upload')
            setdatastatus('sucess')
        })
        .catch(err=>{
            console.log(err)
            setStatus('Retry')
            setdatastatus('failure')
        });

    }
    return (
        <>
            <form className="addform" onSubmit={upload} autoComplete="off" >
                <Typography variant="h4" gutterBottom>Add New Stock</Typography>
                <div className="textfield">
                    <TextField label="Title" value={title} onChange={updateTitle} fullWidth />
                </div>
                <div className="textfield">
                    <TextField label="Description"value={description} onChange={updatedesc} fullWidth />
                </div>
                <div className="textfield">
                    <TextField label="image URL" value={imgurl} onChange={updateurl}   fullWidth/>

                </div>
                <div className="textfield">
                    <TextField label="cost"value={cost} onChange={updatecost} fullWidth />
                </div>
                <div className="textfield">
                    <TextField label="Rating"value={rate} onChange={updaterate} fullWidth />
                </div>
                <div className="textfield">
                    <Button type="submit" variant="contained" color={status==='Retry' ? 'error':status==='Uploading....'?'info':'success'} fullWidth disabled={!navigator.onLine }>{status}</Button>
                </div>
                {
                    datastatus==='sucess' &&
                    <Alert onClose={() => {setdatastatus('')}} variant='outlined'>Data uploaded successfully</Alert>
                }
                {
                    datastatus==='failure' &&
                    <Alert onClose={() => {setdatastatus('')}} variant='outlined' severity="error">Failed to upload data</Alert>
                }
            </form>
        </>
    )
}
export default AddStock;