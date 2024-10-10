import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllvideoAPI, getSingleCategoryAPI, updateCategoryAPI, uploadVideoApi } from '../services/allApi'

const View = ({videoUploadResponse, removeVideoResponseFromCategory, setRemoveVideoResponseFromView}) => {
  
  const [deleteVideoResponse, setDeleteVideoResponse] = useState("")
  const [allVideos, setAllVideos] = useState([])

  useEffect(()=>{ 
    getAllVideos() //we cannot use async keyword directly in useEfect Hook. So we are assigning it in a function and calling that function 
  },[videoUploadResponse, deleteVideoResponse, removeVideoResponseFromCategory]) 

  const getAllVideos = async () =>{
    try{
     const response = await getAllvideoAPI()
    //  console.log(response);
     setAllVideos(response.data);
     
    }catch(err){

    }
  }
  // console.log(allVideos);

  const dragOverView = (e) => {
    e.preventDefault()
  }

  const categoryVideoDrop = async(e) => {
    const {categoryId, video} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(`Video id: ${video.id} from category id: ${categoryId} dropped in View component  `);
    //REMOVE VIDEO FROM CATEGORY
    //get category details from where we have to remove video
    const {data} = await getSingleCategoryAPI(categoryId)
    //update category after removing video
    const updatedAllVideos =  data.allVideos?.filter(item=>item.id!=video?.id)
    const updateCategoryDetails = {id:categoryId, categoryName:data.categoryName, allVideos:updatedAllVideos}
    const response = await updateCategoryAPI(categoryId, updateCategoryDetails)
    //pass response to catgeory
    setRemoveVideoResponseFromView(response)
    //video must be inserted to allVideos - call uploadVideoAPI
    await uploadVideoApi(video)
    getAllVideos()
  }

  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDrop(e)}>
        {
          allVideos.length>0? //if there are one or more datas are available
           allVideos?.map(video=>( //using array we can display array....?- means if data is present..then execute map to access and display datas   //use only paranthesis in body
            <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>           
             <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video}/>                          
            </Col>              //inorder to duplicate column, set key.. if video object is present then based on the id duplicate columns
                                //inorder to display it assign video in displayData key
                          
           ))
          :
          <div className="text-danger fw-bolder">No Videos are uploaded yet!!</div>
        }
      </Row>
    </>
  )
}

export default View