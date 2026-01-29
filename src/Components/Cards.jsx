import React, { useState } from "react";
import Card from "./Card";
import data from "../Card.json";

function Cards({ showSearch = false }) {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    const newArr = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase().trim())
    );

    setFilteredData(newArr);
  }

  return (
    <>
      <div className="container my-4">
        <div className={`d-flex align-items-center ${showSearch ? "justify-content-between" : "justify-content-center"}`}>
          <h3 className="fw-semibold mb-0">Products</h3>

          {showSearch && (<input type="search" value={text} onChange={handleChange} className="form-control rounded-pill w-25" placeholder="Search Item"/>)}
        </div>
      </div>

      <div className="d-flex flex-wrap gap-3">
        {filteredData.map((item) => (
          <Card key={item.id} name={item.name} image={item.image} description={item.description} price={item.price}/>
        ))}

        {filteredData.length === 0 && (<p className="text-muted">No cards found</p>)}
      </div>
    </>
  );
}

export default Cards;