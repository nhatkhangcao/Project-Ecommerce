import React, { useEffect } from 'react';

function StepTwo(props) {
  const data = props.data
  const item = props.item
  const quantity = props.quantity
  const incrementQuantity = props.incrementQuantity
  const decrementQuantity = props.decrementQuantity

  return (
    <div className="container">
      <div className="sp-card">
        <div className="row">
          <div className="col-md cart">
            <div className="title h5 text-center text-danger fw-bold">Chọn Món</div>
            <div className='text-center'>
              <span className='text-danger'>*Vui lòng chọn đủ {item.meal_number} món</span>
            </div>
            {
              data && data.data && data.data.length > 0 ? data.data.map((item, index) =>
                <div key={index} className="row align-items-center">
                  <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <img className="img-fluid rounded-2" src={`http://localhost:8000/${item.meal_image}`} alt="Meal Image" />
                  </div>
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <div className="row fw-bold">{item.meal_name}</div>
                    <div className="row text-start text-secondary">{item.meal_detail}</div>
                  </div>
                  <div className="col col-md-4 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                    <button className="btn btn-outline-secondary me-2" onClick={() => decrementQuantity(index)}>-</button>
                    <span>{quantity?.[index] || 0}</span>
                    <button className="btn btn-outline-secondary ms-2" onClick={() => incrementQuantity(index)}>+</button>
                  </div>
                  <hr className="border-2 border-bottom border-secondary mt-3" />
                </div>
              ) : <span className='text-danger'>Không có dữ liệu!</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;