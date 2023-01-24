import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {

    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)

    const dispatch = useDispatch()

    //store only as much state as you need in the redux store, everything else can be local component state, instead of pass a value to the restocked funtion, let's allow the user to enter a restock value, because the input value does not have to be part of the redux store
    const [value, setValue] = React.useState(1)

    return (
        <div>
            <h2>Number of Ice Creams: {numOfIceCreams} </h2>
            <button onClick={()=>dispatch(ordered())}>Order Ice Creams</button>

            <input 
            type='number' 
            value={value} 
            onChange={(e)=>setValue(parseInt(e.target.value))} />
            
            <button onClick={()=>dispatch(restocked(value))}>Restock Ice Creams</button>
        </div>
    )
}