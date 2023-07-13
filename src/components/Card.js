import React from "react";

const Card=({name,age})=>{
    return(
        <div className="my-8 bg-slate-400 text-white grid grid-rows-2 grid-cols-2 p-4 rounded-md shadow-lg">
            <h1 className="m-2">Name</h1>
            <h1 className="m-2">{name}</h1>
            <h1 className="m-2">Age</h1>
            <h1 className="m-2">{age}</h1>
        </div>
    );
}

export default Card;