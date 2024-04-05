import  axios  from "axios";

async function apiCall(url , data){
    try{
        const result = await axios.get(url,data);
        return result
    }
    catch(e){
        console.log(e)
        alert("api not working use VPN")
    }
}

export {apiCall};