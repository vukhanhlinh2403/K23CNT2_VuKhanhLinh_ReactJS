import React from "react";

export default function vklFuncComp(props) {
    return (
        <div>
            <h2>Demo: Function Component Props</h2>
            <p>lay du lieu tu Props de hien thi </p>
            <p>Name: {props.name}</p>
            <p>address: {props.address}</p>
            <p>company: {props.company}</p>
            <p>node: {props.node}</p>
        </div>
    )
}