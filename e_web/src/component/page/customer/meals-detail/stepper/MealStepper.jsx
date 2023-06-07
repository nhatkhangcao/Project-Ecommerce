import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CDBBtn, CDBContainer } from "cdbreact";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import axios from "axios";

function Stepper(props) {
    //Account
    const loginResponse = JSON.parse(localStorage.getItem('account_user'));
    const account = loginResponse?.user?.account;
    // Initialize
    const item = props.item;
    const navigate = useNavigate();
    const [data, setData] = useState({})
    const [activeStep, setActiveStep] = useState(1);

    // Move Step
    const handleNextPrevClick = (step) => {
        setActiveStep(step);
    };
    const handleNext = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1);
        }
    };
    const handlePrev = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
        }
    };

    // Get Data By Combo
    const getDataByCombo = () => {
        axios.post("http://127.0.0.1:8000/api/customer/get-data-by-combo",
            { combo_name: item.combo_name }
        ).then((response) => {
            if (response.data.status) {
                setData(response.data)
            }
        })
    }

    //Transfer VND
    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }

    // Calculator total quantity
    const [quantity, setQuantity] = useState({});
    const incrementQuantity = (itemIndex) => {
        setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [itemIndex]: (prevQuantity[itemIndex] || 0) + 1,
        }));
    };
    const decrementQuantity = (itemIndex) => {
        setQuantity((prevQuantity) => {
            const updatedQuantity = {
                ...prevQuantity,
            };
            if (updatedQuantity[itemIndex] > 0) {
                updatedQuantity[itemIndex] -= 1;
            }
            return updatedQuantity;
        });
    };
    const totalMealSelect = () => {
        return Object.values(quantity).reduce((total, itemQuantity) => total + itemQuantity, 0);
    };
    const mealSelect = totalMealSelect()
    useEffect(() => {
        totalMealSelect();
    }, [quantity]);

    // Handle Ship
    const [fee, setFee] = useState(10)
    const shipFee = () => {
        return formatVND(fee * 1000)
    }
    const handleChangeFee = (e) => {
        setFee(e.target.value)
    }
    //Total Fee (Ship+Combo)
    const totalFee = () => {
        return item.combo_price + fee * 1000
    }
    //  -----------Step Four Logic------------ //
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            note: '',
            address: '',
            email: '',
            paymentMethod: 'COD',
            totalFee: totalFee(),
            order_name: item.combo_name,
            account: account ?? ''
        }
    });
    // Payment
    const payment = (data) => {
        axios.post("http://127.0.0.1:8000/api/customer/payment", data).then((response) => {
            if (data.paymentMethod === 'COD') {
                Swal.fire({
                    icon: 'success',
                    title: 'Đặt hàng thành công!',
                    text: 'Cảm ơn quý khách đã tin tưởng chúng tôi',
                    showConfirmButton: false,
                    timer: 2000,
                    didOpen: () => {
                        setTimeout(() => {
                            navigate('/')
                        }, 2000);
                    }
                });
            } else {
                window.location.href = response.data.url;
            }
        })
    }

    useEffect(() => {
        getDataByCombo()
    }, []);
    return (
        <CDBContainer className="text-center">
            <div className="d-flex justify-content-center mt-3">
                <CDBBtn
                    color={activeStep === 1 ? "danger" : "dark"}
                    disabled={activeStep === 1 || activeStep === 2 || activeStep === 3}
                    className="me-3"
                >
                    Chọn ngày
                </CDBBtn>
                <CDBBtn
                    color={activeStep === 2 ? "danger" : "dark"}
                    disabled={activeStep === 1 || activeStep === 2 || activeStep === 3 || activeStep === 4}
                    onClick={() => handleNextPrevClick(3)}
                    className="me-3"
                >
                    Hóa Đơn
                </CDBBtn>
                <CDBBtn
                    disabled={activeStep === 1 || activeStep === 2 || activeStep === 3}
                    color={activeStep === 3 ? "danger" : "dark"}
                >
                    Thanh Toán
                </CDBBtn>
            </div>

            {activeStep === 1 && (
                <StepTwo
                    data={data}
                    item={item}
                    quantity={quantity}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    handleNextPrevClick={handleNextPrevClick}
                />
            )}
            {activeStep === 2 && (
                <StepThree
                    totalFee={totalFee}
                    formatVND={formatVND}
                    fee={fee}
                    shipFee={shipFee}
                    item={item}
                    handleChangeFee={handleChangeFee}
                    handleNextPrevClick={handleNextPrevClick}
                />
            )}
            {activeStep === 3 &&
                <StepFour
                    errors={errors}
                    totalFee={totalFee}
                    formatVND={formatVND}
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
                {activeStep < 3 && (
                    <button
                        className={(activeStep === 1 && mealSelect !== item.meal_number) ? 'btn bg-secondary text-white me-3' : 'btn bg-dark text-white me-3'}
                        onClick={handleNext}
                        disabled={activeStep === 1 && mealSelect !== item.meal_number}
                    >
                        Next
                    </button>
                )}
            </div>
        </CDBContainer >
    );
}

export default Stepper;
