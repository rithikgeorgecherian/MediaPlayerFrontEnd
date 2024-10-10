import React from 'react'
import { useState } from "react"
import { Button, Modal } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoApi } from '../services/allApi';

const Add = ({setVideoUploadResponse}) => {

  const [isInvalidLink, setIsInvalidLink] = useState(false)
  
  const [videoDetails, setVideoDetails] = useState({
    caption:'', url:'', link:''
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(videoDetails);

  const getEmbedLink = (YoutubeLink) => {
     if(YoutubeLink.includes("v=")){
        const videoId = YoutubeLink.split("v=")[1].slice(0,11)
        // console.log(videoId);
        setVideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
        setIsInvalidLink(false)
     }else{
      setIsInvalidLink(true)
      console.log("Invalid Youtube Link");
      setVideoDetails({...videoDetails,link:''})
     }
  }

  const handleUploadVideo = async () => {  //async is used because we are doing api call
    const {caption,url,link} = videoDetails
    if(caption && url && link){
      //  alert('call api')
      try{ //the problem of api call is that we may get output or we may not get it...So to fix any kind of errors use try catch block
        const response = await uploadVideoApi(videoDetails)   //if await is used we can assign api call into a variable
        // console.log(response);
        if(response.status>=200 && response.status<300){ //to check whether the response is successful or not and execute below commands
          handleClose() //to automatically close the modal after succesfully uploading video
          setVideoDetails({...videoDetails, caption:'', url:'', link:''})  //to make the state values to initial value or empty value after succesful uploading
          setVideoUploadResponse(response.data)
          alert("Video uploaded successfully!!!")
        }
      } catch(err){
        // console.log(err);
      }
    }else{
       alert('please fill the form completely')
    }
  }
  
  return (
    <>
     <div className="d-flex align-items-center">
      <h5>Upload New Video </h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fs-5 fw-bolder'>+</button>
     </div>
      
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
           <FloatingLabel
            controlId="floatingInputCaption"
            label="Video Caption"
            className="mb-3"
           >
           <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
           </FloatingLabel>
           <FloatingLabel
            controlId="floatingInputUrl"
            label="Image URL"
            className="mb-3"
           >
           <Form.Control onChange={e=>setVideoDetails({...videoDetails,url:e.target.value})} type="text" placeholder="Image URL" />
           </FloatingLabel>
           <FloatingLabel
            controlId="floatingInputLink"
            label="Youtube Link"
           >
           <Form.Control onChange={e=>getEmbedLink(e.target.value)} type="text" placeholder="Youtube Link" />
           </FloatingLabel>
           { isInvalidLink &&
            <div className='mt-3 text-danger fw-bolder'>
            Invalid Youtube Link
           </div>
           }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal> 
    </>
  )
}

export default Add