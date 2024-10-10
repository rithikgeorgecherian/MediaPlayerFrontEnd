//define all api for project, it calls commonApi function

import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


//uploadVideo api - api must call by add component

export const uploadVideoApi = async (video) =>{   //creating function
   return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)
}

//getAllVideoAPI - called by view component
export const getAllvideoAPI = async () => {
     return await commonAPI('GET',`${SERVER_URL}/allVideos`, "")
}

//saveHistoryAPI - called by VideoCard
export const saveHistoryAPI = async (videoDetails)=>{
   return await commonAPI('POST', `${SERVER_URL}/history`, videoDetails)
}

//getHistoryAPI -called by History
export const getHistoryAPI = async () =>{
   return await commonAPI('GET', `${SERVER_URL}/history`, "")
}

//removeHistoryAPI - called by history
export const removeHistoryAPI = async (id) => {
   return await commonAPI('DELETE', `${SERVER_URL}/history/${id}`, {}) //in the case of DELETE it will expect empty object {}
}

//removeVideoAPI - called by VideoCard
export const removeVideoAPI = async (id) => {
   return await commonAPI('DELETE', `${SERVER_URL}/allVideos/${id}`, {}) //in the case of DELETE it will expect empty object {}
}

//addCategoryAPI - called by category
export const addCategoryAPI = async (categoryDetails) => {
   return await commonAPI('POST', `${SERVER_URL}/categories` , categoryDetails )
}


//getAllCategoryAPI - called by category
export const getAllCategoryAPI = async () => {
   return await commonAPI('GET', `${SERVER_URL}/categories` , "")
}

//removeCategoryAPI - called by VideoCard
export const removeCategoryAPI = async (id) => {
   return await commonAPI('DELETE', `${SERVER_URL}/categories/${id}`, {}) //in the case of DELETE it will expect empty object {}
}

//getSingleVideoAPI - called by category
export const getSingleVideoAPI = async (id) => {
   return await commonAPI('GET', `${SERVER_URL}/allVideos/${id}`, "" )
}

//updateCategoryAPI - called by category
export const updateCategoryAPI = async (categoryId, updateCategoryDetails) => {
   return await commonAPI('PUT', `${SERVER_URL}/categories/${categoryId}` , updateCategoryDetails)
}

//getSingleCategoryAPI - called by View
export const getSingleCategoryAPI = async (id) => {
   return await commonAPI('GET', `${SERVER_URL}/categories/${id}`)
}