import React from 'react';
import Math, { add, subtract } from './Math';
import * as Matematica from './Math';

export default function DestructingImports() {
  return (
    <div id="wd-destructuring-imports">
      Math.add(2, 3) = {Math.add(2, 3)}<br />
      Matematica.add(2, 3) = {Matematica.add(2, 3)}<br />
      add(2, 3) = {add(2, 3)}<br />
      <hr />
    </div>
  );
}
