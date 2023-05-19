import React, { useState } from 'react';

function StepTwo(props) {
  const item = props.item
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div class="container">
      <div class="sp-card">
        <div class="row">
          <div class="col-md cart">
            <div class="title h5 text-center text-danger fw-bold">Chọn Món</div>

            <div class="text-success">
              <div class="title">
                <div class="row">
                  <div class="col">
                    <h4><b>Thứ 2</b></h4>
                  </div>
                  <div class="col align-self-center text-right text-muted">3 item</div>
                </div>
              </div>
              <div class="row align-items-center pb-2">
                <div class="col-12 col-md-3 mb-3 mb-md-0">
                  <img class="img-fluid" src={`http://localhost:8000/${item.meal_image}`} alt="Meal Image" />
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0">
                  <div class="row text-muted">Hulk</div>
                  <div class="row">JD</div>
                </div>
                <div class="col col-md-4 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                  <button class="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                  <span>{quantity}</span>
                  <button class="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-12 col-md-3 mb-3 mb-md-0">
                  <img class="img-fluid" src={`http://localhost:8000/${item.meal_image}`} alt="Meal Image" />
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0">
                  <div class="row text-muted">Hulk</div>
                  <div class="row">JD</div>
                </div>
                <div class="col col-md-4 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                  <button class="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                  <span>{quantity}</span>
                  <button class="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                </div>
              </div>
            </div>
            <hr class="border-2 border-top border-bottom border-secondary" />
            <div class="text-info">
              <div class="title">
                <div class="row">
                  <div class="col">
                    <h4><b>Thứ 3</b></h4>
                  </div>
                  <div class="col align-self-center text-right text-muted">3 item</div>
                </div>
              </div>
              <div class="row align-items-center pb-2">
                <div class="col-12 col-md-3 mb-3 mb-md-0">
                  <img class="img-fluid" src={`http://localhost:8000/${item.meal_image}`} alt="Meal Image" />
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0">
                  <div class="row text-muted">Hulk</div>
                  <div class="row">JD</div>
                </div>
                <div class="col col-md-4 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                  <button class="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                  <span>{quantity}</span>
                  <button class="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-12 col-md-3 mb-3 mb-md-0">
                  <img class="img-fluid" src={`http://localhost:8000/${item.meal_image}`} alt="Meal Image" />
                </div>
                <div class="col-12 col-md-4 mb-3 mb-md-0">
                  <div class="row text-muted">Hulk</div>
                  <div class="row">JD</div>
                </div>
                <div class="col col-md-4 ms-3 d-flex align-items-center justify-content-center justify-content-md-end">
                  <button class="btn btn-outline-secondary me-2" onClick={decrementQuantity}>-</button>
                  <span>{quantity}</span>
                  <button class="btn btn-outline-secondary ms-2" onClick={incrementQuantity}>+</button>
                </div>
              </div>
            </div>

            <hr class="border-2 border-top border-bottom border-secondary" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default StepTwo;