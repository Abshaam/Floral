
import { useParams, } from "react-router-dom"
import React from "react";
import { getAll } from "../allData";
import AllFlowers from '../components/allFlowers'
  
       
export default function Flower (){

    const param = useParams()

   

    const data = getAll(+param.flowerId)

    // console.log(param.flowerId);

    console.log('param', param)
     
    return(
        <>
         <main style={{ padding: "1rem"}}>
            <div className="src" >{data.src}</div>
            <h2>
                Name: {data.title}
            </h2>
            <h3>
                {data.header}
            </h3>
            <p>
                {data.description}
            </p>            

           
            <AllFlowers/>

         </main>
  
        </>
    )
}