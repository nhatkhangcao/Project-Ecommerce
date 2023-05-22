import React, { useState, } from "react";
import { CDBBtn, CDBContainer } from "cdbreact";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Stepper(props) {
    // Initialize
    const navigate = useNavigate();
    const [data, setData] = useState({})
    const [total, setTotal] = useState(0)
    const item = props.item;
    const [activeStep, setActiveStep] = useState(1);
    // Handle Move Step
    const handleNextPrevClick = (step) => {
        setActiveStep(step);
    };
    const handleNext = () => {
        if (activeStep < 4) {
            setActiveStep(activeStep + 1);
        }
    };
    const handlePrev = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
        }
    };
    // Test Data
    const test = () => {
        console.log(123)
    }
    // Get Data By Combo
    const getDataByCombo = () => {
        axios.post("http://127.0.0.1:8000/api/customer/get-data-by-combo",
            { type: item.type }
        ).then((response) => {
            setData(response.data.data)
        })
    }
    // ----------Step One Logic----------
    const [radioValue, setRadioValue] = useState({
        day: '4',
        meal: '1'
    });
    const handleChangeDay = (data) => {
        setRadioValue((prevState) => ({
            ...prevState,
            day: data,
        }));
    }
    const handleChangeMeal = (data) => {
        setRadioValue((prevState) => ({
            ...prevState,
            meal: data,
        }));
    }
    const calculateCartPrice = () => {
        return (item.combo_price / 4) * totalOrder
    }
    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }
    const cartPrice = () => {
        return formatVND(calculateCartPrice())
    }
    //  ------------Step Two Logic------------- //
    const [quantity, setQuantity] = useState({});
    const incrementQuantity = (dayIndex, itemIndex) => {
        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [dayIndex]: {
                ...(prevQuantity[dayIndex] || {}),
                [itemIndex]: (prevQuantity[dayIndex]?.[itemIndex] || 0) + 1
            }
        }));
    };
    const decrementQuantity = (dayIndex, itemIndex) => {
        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [dayIndex]: {
                ...(prevQuantity[dayIndex] || {}),
                [itemIndex]: Math.max((prevQuantity[dayIndex]?.[itemIndex] || 0) - 1, 0)
            }
        }));
    };
    const totalMealOrder = () => {
        return radioValue.day * radioValue.meal;
    }
    const calculateTotal = (total) => {
        setTotal(total);
    };
    const totalOrder = totalMealOrder();
    //  ------------Step Three Logic------------- //
    const [fee, setFee] = useState(10)
    const shipFee = () => {
        return formatVND(fee * 1000)
    }
    const handleChangeFee = (e) => {
        setFee(e.target.value)
    }
    const feeTotal = () => {
        return formatVND(calculateCartPrice() + fee * 1000)
    }
    //  -----------Step Four Logic------------- //
    const {
        register,
        handleSubmit,
        // formState: { errors },
        setValue
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            note: '',
            address: '',
            email: '',
            paymentMethod: 'cod',
            totalFee: feeTotal(),
            order_name: item.combo_name,
        }
    });
    useEffect(() => {
        setValue('totalFee', feeTotal());
    }, [feeTotal, setValue]);

    // Payment
    const payment = (data) => {
        axios.post("http://127.0.0.1:8000/api/customer/payment", data).then((response) => {
            if (response.data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thanh toán thành công!',
                    text: 'Cảm ơn quý khách đã tin tưởng chúng tôi',
                    showConfirmButton: false,
                    timer: 2000,
                    didOpen: () => {
                        setTimeout(() => {
                            navigate('/')
                        }, 2000);
                    }
                });
            }
        })
    }
    useEffect(() => {
        feeTotal()
        getDataByCombo()
    }, []);
    return (
        <CDBContainer className="text-center">
            <span onClick={test}>Test:</span>
            <div className="d-flex justify-content-center mt-3">
                <CDBBtn
                    color={activeStep === 1 ? "danger" : "dark"}
                    className="me-3 turn-off-cursor"
                    disabled={activeStep === 1 || activeStep === 2 || activeStep === 3 || activeStep === 4}
                >
                    Chọn bữa
                </CDBBtn>
                <CDBBtn
                    color={activeStep === 2 ? "danger" : "dark"}
                    disabled={activeStep === 1 || activeStep === 2 || activeStep === 3 || activeStep === 4}
                    className="me-3"
                >
                    Chọn ngày
                </CDBBtn>
                <CDBBtn
                    color={activeStep === 3 ? "danger" : "dark"}
                    disabled={activeStep === 1 || activeStep === 2 || activeStep === 3 || activeStep === 4}
                    onClick={() => handleNextPrevClick(3)}
                    className="me-3"
                >
                    Hóa Đơn
                </CDBBtn>
                <CDBBtn
                    disabled={activeStep === 1 || activeStep === 2 || activeStep === 3 || activeStep === 4}
                    color={activeStep === 4 ? "danger" : "dark"}
                >
                    Thanh Toán
                </CDBBtn>
            </div>

            {activeStep === 1 && (
                <StepOne
                    cartPrice={cartPrice}
                    radioValue={radioValue}
                    handleNextPrevClick={handleNextPrevClick}
                    handleChangeDay={handleChangeDay}
                    handleChangeMeal={handleChangeMeal}
                />
            )}
            {activeStep === 2 && (
                <StepTwo
                    data={data}
                    quantity={quantity}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    handleNextPrevClick={handleNextPrevClick}
                    totalMealOrder={totalMealOrder}
                    totalMeal={calculateTotal}
                />
            )}
            {activeStep === 3 && (
                <StepThree
                    feeTotal={feeTotal}
                    fee={fee}
                    shipFee={shipFee}
                    item={item}
                    cartPrice={cartPrice}
                    handleChangeFee={handleChangeFee}
                    radioValue={radioValue}
                    handleNextPrevClick={handleNextPrevClick}
                />
            )}
            {activeStep === 4 &&
                <StepFour
                    feeTotal={feeTotal}
                    handleNextPrevClick={handleNextPrevClick}
                    register={register}
                    payment={payment}
                    handleSubmit={handleSubmit}
                />}

            <div className="d-flex justify-content-end">
                {activeStep > 1 && (
                    <button className="btn bg-dark text-white me-3" onClick={handlePrev}>
                        Previous
                    </button>
                )}
                {activeStep < 4 && (
                    <button
                        className={(activeStep === 2 && total !== totalOrder) ? 'btn bg-secondary text-white me-3' : 'btn bg-dark text-white me-3'}
                        onClick={handleNext}
                        disabled={activeStep === 2 && total !== totalOrder}
                    >
                        Next
                    </button>
                )}
            </div>
        </CDBContainer>
    );
}

export default Stepper;
