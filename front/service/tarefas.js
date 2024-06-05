import axios from "axios"

const BASE_URL = "https://encouraging-blue-bee.cyclic.app";

export async function getTasks(){
    try{
        const response = await axios.get(`${BASE_URL}/tasks`);
        return response;
        // console.log(response);
    }catch(error){
        console.log(error)
    }
}