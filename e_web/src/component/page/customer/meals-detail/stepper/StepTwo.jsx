import React, { useEffect } from 'react';

function StepTwo(props) {
  const data = props.data
  const quantity = props.quantity
  const incrementQuantity = props.incrementQuantity
  const decrementQuantity = props.decrementQuantity
  const totalMealOrder = props.totalMealOrder
  const totalMeal = props.totalMeal

  const calculateTotal = () => {
    let total = 0;
    Object.values(quantity).forEach(comboItems => {
      Object.values(comboItems).forEach(itemQuantity => {
        total += itemQuantity;
      });
    });
    return total
  };
  totalMeal(calculateTotal());
  const test = () => {
    // console.log(total)
  }

  useEffect(() => {
    totalMeal(calculateTotal());
  }, [quantity, totalMeal]);
  return (
    <div className="container">
      <div className="sp-card">
        <div className="row">
          <div className="col-md cart">
            <div onClick={test} className="title h5 text-center text-danger fw-bold">Chọn Món</div>
            <div className='text-center'>
              <span className='text-danger'>*Vui lòng chọn đủ {totalMealOrder()} món</span>
            </div>
            {
              Object.values(data).map((comboItem, dayIndex) => (
                <div key={dayIndex} className="text-success">
                  <div className="row">
                    <h4 className='text-start'><b>Thứ {dayIndex + 2}</b></h4>
                  </div>
                  {
                    comboItem && comboItem.length > 0 ? comboItem.map((item, index) =>
                      <div key={index} className="row align-items-center pb-2">
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                          <img className="img-fluid" src={`http://localhost:8000/${item.meal_image}`} alt="Meal Image" />
                        </div>
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                          <div className="row text-muted"></div>
                          <div className="row">{item.meal_detail}</div>
                        </div>
                        <div className="col col-md-4 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                          <button className="btn btn-outline-secondary me-2" onClick={() => decrementQuantity(dayIndex, index)}>-</button>
                          <span>{quantity?.[dayIndex]?.[index] || 0}</span>
                          <button className="btn btn-outline-secondary ms-2" onClick={() => incrementQuantity(dayIndex, index)}>+</button>
                        </div>
                      </div>
                    ) : <span className='text-danger'>No Data!</span>}
                  <hr className="border-2 border-top border-bottom border-secondary" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default StepTwo;