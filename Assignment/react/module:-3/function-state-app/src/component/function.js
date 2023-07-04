import React from "react";
import { useState } from "react";


function State(){
    const[name,SetName]= useState({

        id : "1001",
        name:"axit",
        salary:45000,
        address:"150 feet ring road rajkot"
});

    const Test = ()=>{
        SetName({ 

            id:1002,
            name:"hardik",
            salary:55000,
            address:"nanamava circle "
        });
        
    }



return(


    <>
        <div>
            <h1>empolyee id :{name.id}<br/>
            empolyee name : {name.name}<br/>
            empolyee salary : {name.salary}<br/>
            empolyee address : {name.address}
            </h1>


            {/* <button type="button" onClick={() => SetName("1002")} */}
{/* >update id</button> */}

            <button type="button" onClick={Test}>update</button>
        </div>
    </>
)}


export default State ;