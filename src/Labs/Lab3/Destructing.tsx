import React from 'react';

export default function Destructing() {
  const person = { name: "John", age: 25 };
  const { name, age } = person;
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;

  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      name = {name}<br />
      age = {age}<br />
      first = {first}<br />
      second = {second}<br />
      third = {third}<br />
      <hr />
    </div>
  );
}
