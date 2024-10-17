import React from 'react';

export default function FunctionDestructing() {
  const add = (a: number, b: number): number => a + b;
  const subtract = ({ a, b }: { a: number; b: number }): number => a - b;
  
  const sum = add(1, 2);
  const difference = subtract({ a: 4, b: 2 });

  return (
    <div id="wd-function-destructing">
      <h2>Function Destructing</h2>
      sum = {sum}<br />
      difference = {difference}<br />
      <hr />
    </div>
  );
}
