import ErrorImg from "../assets/img/error404.jpg";
import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <img alt="Error Image" 
                 className="error-img"
                 src={ErrorImg}/>
            <h1>{err.status+" : "+err.statusText}</h1>
        </div>
    )
}

export default Error;