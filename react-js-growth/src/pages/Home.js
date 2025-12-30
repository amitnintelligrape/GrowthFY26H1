import React, { useState } from "react";
import PureComponent from "../Components/PureComponent";
import HOC from "../Components/Hoc";
import ErrorBoundary from "../Components/ErrorBoundary";
import Counter from "../features/counter/Counter";
const HocExample = HOC(PureComponent);
const Home = () =>{
    const [age, setAge] = useState(0);
    return(
        <>
            <h1>Home</h1>
            <p>This a Home Page</p>
            <h3>Pure Component Example</h3>
            <PureComponent name="Hi Amit"/>
            <p>I have added the console on in pure component and when you click on below button this component will render not every time because I have nade this as a pure coponent by using <strong>React.memo()</strong></p>
            <button onClick={() => setAge(age + 1)}>Clicked {age} Age</button>

            <h3>HOC Component Example</h3>
            <HocExample name="Saurabh" />
            <ErrorBoundary>
            <Counter />
            </ErrorBoundary>
        </>
    );
}
export default Home;