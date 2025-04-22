import React from 'react';

export default function ShowCart(props) {
  const { id, count, isSale, category, name, price } = props.data;
  const { delete: deleteElement, update: updateCount, less: lessCount } = props;

  return (
    <div className="col-md-4">
      <div className="rounded-4 bg-dark p-3 m-3 text-white position-relative">
        <p>ID: {id}</p>
        <h5>Name: {name}</h5>
        <h5>Category: {category}</h5>
        <h5 className="text-success">Price: ${price}</h5>
        <h5>Count: {count}</h5>
        {isSale && <div className="bg-danger rounded-3 p-2 position-absolute top-0 end-0">Sale</div>}

        <button className="btn btn-outline-danger w-100 my-1" onClick={() => deleteElement(id)}>Delete</button>
        <button className="btn btn-outline-success w-100 my-1" onClick={() => updateCount(props.data)}>+</button>
        <button className="btn btn-outline-warning w-100 my-1" onClick={() => lessCount(props.data)}>-</button>
      </div>
    </div>
  );
}
