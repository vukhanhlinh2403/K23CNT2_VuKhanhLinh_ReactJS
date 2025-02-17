import React from "react";
import HvtCompInfor from "./components/HvtCompInfor";

function App() {
  const person = {
    name: "Vũ Khánh Linh",
    age: 21,
    address: "Hà Nội, Việt Nam",
  };

  return (
    <div>
      <h1>Chào mừng đến với React</h1>
      <HvtCompInfor name={person.name} age={person.age} address={person.address} />
    </div>
  );
}


export default App;
