import React from 'react'

function Card(obj) {
  return (
    <>

      <div className='d-flex justify-content-between'>
      <div className="card" style={{ width: '23rem' }}>
        <img src={obj.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{obj.name}</h5>
          <p className="card-text">
            {obj.description}
            </p>
            <p className="card-text">
            {obj.price}
          </p>
            <a href="#" className="btn btn-primary">Explore More</a>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;