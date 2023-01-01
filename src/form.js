import React, { useState } from "react";

function Form() {
  const [fdata, setFdata] = useState({
    naam1: "",
    naam2: ""
  });

  function Handle(event) {
    //alert("hua kya");
    const name = event.target.name;
    const val = event.target.value;
    // console.log(`${name}  ${val}`);

    setFdata((prev) => {
      console.log(prev);
      return { ...prev, [name]: val };
    });

    /* setFdata({ ...fdata, [name]: val }); */
  }
  return (
    <>
      <div>
        <br />
        Enter name here
        <input
          type="text"
          name="naam1"
          value={fdata.naam1}
          onChange={Handle}
        ></input>
        <br />
        Enter another here
        <input
          type="text"
          name="naam2"
          value={fdata.naam2}
          onChange={Handle}
        ></input>
        <br />
      </div>
    </>
  );
}

export default Form;
