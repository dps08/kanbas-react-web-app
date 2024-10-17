import React from 'react';

export default function FindIndex() {
  let numberArray1 = [1, 2, 4, 5, 6];
  const fourIndex = numberArray1.findIndex(a => a === 4);

  return (
    <div id="wd-find-index">
      <h4>Find Index</h4>
      fourIndex = {fourIndex} <br />
      <hr />
    </div>
  );
}
