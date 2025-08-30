import React from "react";

const Hoc = (WrappedComponent) =>{
    return(props)=>(
        <>
            <p>Hello This is HOC Component</p>
            <WrappedComponent {...props} />
        </>
    )
}

export default Hoc;