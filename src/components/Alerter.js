import React, { useState, useEffect } from "react";

function Alerter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      alert(`Did clicked ${count} times`);
    }
  });

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
