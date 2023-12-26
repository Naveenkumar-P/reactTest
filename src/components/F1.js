import Axios from "axios";
import { useEffect, useState } from "react";
function F1(){
    //HTTP request we need to place inside the lifecycle methods
    //But as we are working with function component there is no lifecycle methods
    //Instead we have the concept called Hooks which helps us to handle the HTTP request
    //useEffect() is used to handle side Effects

    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200){ // 200 - ok
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])
    const ListName = () => {
        return data.map((val)=>{return <h4>{val.name}</h4>})
    }
    return(
        <div>
            <h1>Hello</h1>
            {ListName()}
        </div>
    )
}
export default F1;