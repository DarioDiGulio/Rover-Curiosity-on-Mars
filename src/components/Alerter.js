import React, { useEffect } from "react";

function useIncreaseCount() {
  const [count, setCount] = React.useState(0);
  return [count, setCount];
}

function Alerter() {
  const [count, setCount] = useIncreaseCount();

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
      className="alerter"
    >
      Increase Count: {count}
    </button>
  );
}

export default Alerter;
