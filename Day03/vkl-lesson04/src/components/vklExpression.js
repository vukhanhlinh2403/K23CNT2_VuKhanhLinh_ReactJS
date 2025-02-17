import React from 'react'

export default function vklJsxExpression()
{
    // bien
    const name="Vu Khanh Linh";
    // bien doi tuong
    const user = {
        firstName:"Vu",
        lastName:"Linh"
    }
    // ham
    const fullName=(user)=>{
        return   user.firstName + '' + user.lastName ;
    }
    // element 
    const element =(
        <div>
            {/* bieu thuc js */}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3>welcome to, {name}</h3>
        </div>
    );
    // ham 
    const sayWelcom = (name)=>{
        if(name){
            return <h3>welcome to {name}</h3>
        }else{
            return <h3>welcome to - K23CNT2 </h3>
        }
    }
    return (
        <div>
            <h1> VKL -  Expression </h1>
            {/* su dung bien element */}
            {element}

            <hr/>
            {sayWelcom()}
            <hr/>
            {sayWelcom("Vu Khanh Linh24032005")}
        </div>
    )
}