import React from "react";

const PureComponent = (props) => {
    const { name } = props;
    console.log('Rendering Pure Component'); 
  return(
       <h2>Hello, {name}!</h2>
    );
}

export default React.memo(PureComponent);