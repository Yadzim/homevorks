import React from 'react'

export default function CartItem({item, value}) {
  const {id, title, img, price, total, count} = item;
  const {incrument, decrument, removeItem} = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="product" className="img-fluid" style={{width:"5rem",height:"5rem"}}/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span> $ {price}
      </div>
      <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <button className="btn btn-outline-secondary mx-1" onClick={()=>incrument(id)}>-</button>
            <span className="btn btn-outline-secondary mx-1">{count}</span>
            <button className="btn btn-outline-secondary mx-1" onClick={()=>decrument(id)}>+</button>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={()=> removeItem(id)}>
          <i className="fas fa-trash text-warning cursor-pointer"/>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 fw-bolder">
        <strong>item total: $ {total}</strong>
      </div>

    </div>
  )
}
