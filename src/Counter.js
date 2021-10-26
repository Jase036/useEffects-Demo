import { useState, useEffect } from "react";
import styled from "styled-components";

function Counter() {
  const [count1, setCount1] = useState(0); // This is used in 1 dependancy array
  const [count2, setCount2] = useState(0); // This is not used in any dependancy array

  // Empty dependancy array
  // runs on when component is mounted
  // return function runs only when component is unmounted
  useEffect(() => {
    console.log(
      "useEffect with Empty [], useEffect starts. Counter Component is mounted (1st render)"
    );

    return () => {
      console.log(
        "useEffect with Empty [], useEffect return. Counter Component is unmounted"
      );
    };
  }, []);

  // Dependancy array with the dependancy "count1" only
  // runs on when component is mounted (1st render) & anytime count1 updates (not count 2)
  // return function runs when right before component is unmounted or right before count1 updated
  useEffect(() => {
    console.log(
      "useEffect with [count1], useEffect start. Counter Component is mounted (1st render and updates)"
    );

    return () => {
      console.log(
        "useEffect with [count1], useEffect return. Right before Counter Component is updated/unmounted"
      );
    };
  }, [count1]);

  const handleClick = (ev, count, setCount) => {
    setCount(count + 1);
  };

  // No dependancy array
  // runs on when component is mounted or updated (any state change)
  // return function runs when component is unmounted or before count1/count2 is updated
  useEffect(() => {
    console.log(
      "useEffect with NO [], useEffect starts. Counter Component is mounted/updated (1st render and updates)"
    );

    return () => {
      console.log(
        "useEffect with NO [], useEffect returns. Right before Counter Component is updated/unmounted"
      );
    };
  });

  return (
    <Wrapper>
      <Button
        onClick={(ev) => {
          handleClick(ev, count1, setCount1);
        }}
      >
        {count1}
      </Button>
      <Button
        onClick={(ev) => {
          handleClick(ev, count2, setCount2);
        }}
      >
        {count2}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  /* border: solid orange; */
`;

const Button = styled.button`
  height: 50px;
  width: 100px;
  margin: 15px 0;
`;

export default Counter;
