import React from 'react';

export default function FindFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  const four = numberArray1.find((a) => a === 4);

  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four} <br />
      <hr />
    </div>
  );
}
