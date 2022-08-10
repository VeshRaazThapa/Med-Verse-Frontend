import "./Counter.css";
import CounterItem from "./CounterItem";

function Counter() {
  return (
    <div className="counter-block">
      <CounterItem />
      <CounterItem />
      <CounterItem />
    </div>
  );
}

export default Counter;
