import {useState} from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.init);
    const increment = () => setCount(count + props.incBy);

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+{props.incBy}</button>
        </div>
    );
}

export default Counter;