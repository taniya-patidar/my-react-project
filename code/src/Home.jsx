import React from "react";
import {useNavigate} from "react-router-dom";

let Home=()=>{
    let navigate=useNavigate()
    let okk=()=>{
        // alert("okk running.....")
        navigate('/contact')
    }
    return(
        <div>
            <h1>Hello Developers!!</h1>
            <p>kkkkkmds ksmc ss k  kds k k k  knk kmm k  lk kl k k </p>

            <button onClick={okk}>Go to Contact page</button>
                </div>
    )
}

export default Home;