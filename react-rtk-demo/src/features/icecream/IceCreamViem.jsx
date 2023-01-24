import React from "react";
import { useSelector } from "react-redux";

export const IceCreamView = () => {

    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)

    return (
        <div>
            <h2>Number of Ice Creams - {numOfIceCreams} </h2>
            <button>Order Ice Creams</button>
            <button>Restock Ice Creams</button>
        </div>
    )
}