import axios from "axios";

const commonAPI = async(httpMethod,url,reqBody)=>{ //creating a function to do api call
    const requestConfig = {  //object created
        method:httpMethod,
        url,
        data:reqBody
    }
    return await axios(requestConfig).then((res)=>{  //calling api using axios...result is promise...promise is resolved using "then" and return the response.
        return res                                   //All the returns are in promise..Inorder to return them from commonAPI, return should be given infront of the axios        
    }).catch(err=>{                                  //Axios is an asynchronus function but return will initiate immediatly. So inorder to make the return statement wait until the process completion, use async await
        return err
    })
}

export default commonAPI