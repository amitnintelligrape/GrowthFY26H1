import React, { useState } from "react";
import PureComponent from "../Components/PureComponent";
const Home = () =>{
    const [age, setAge] = useState(0);
    return(
        <>
            <h1>Home</h1>
            <p>This a Home Page</p>
            <h3>Pure Component</h3>
            <PureComponent name="Hi Amit"/>
            <p>I have added the console on in pure component and when you click on below button this component will render not every time because I have nade this as a pure coponent by using <strong>React.memo()</strong></p>
            <button onClick={() => setAge(age + 1)}>Clicked {age} Age</button>
        </>
    );
}
export default Home;