import Stock from "./stocks"
import axios from "axios"
import { useEffect, useState } from "react"

import "./stockCard.css"

import Spinner from "../spinner"
import Offline from "../offline"

function StockCard(){
    const [stock,setstock]=useState();
    useEffect(()=>{
        // axios.get("http://localhost:6060/viewstocks")
        axios.get('https://pavan-shopy-server.herokuapp.com/viewstocks')
        .then(res=>{
            setstock(res.data)
            console.log("data requested")
        })
    },[])
    return (
        <>
         <div className="stockConatner">
            {
                stock ?
                stock.map(eachElement=>{
                    return (
                        <Stock key={eachElement._id} className="stock" cost={eachElement.cost} rating={eachElement.rating} url={eachElement.imgurl} title={eachElement.title} Description={eachElement.Description} />
                    )
                })
                :
                navigator.onLine?<Spinner/>:<Offline/>

            }
            </div>
        </>
    )
}
export default StockCard;