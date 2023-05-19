import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBBtn, CDBContainer } from "cdbreact";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

function Stepper(props) {
    const item = props.item
    const [activeStep, setActiveStep] = useState(1);

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
    return (
        <CDBContainer className="text-center">
            <div className="d-flex justify-content-center mt-3">
                <CDBBtn
                    color={activeStep === 1 ? "primary" : "secondary"}
                    onClick={() => handleNextPrevClick(1)}
                    className="me-3"
                >
                    Chọn bữa
                </CDBBtn>
                <CDBBtn
                    color={activeStep === 2 ? "primary" : "secondary"}
                    onClick={() => handleNextPrevClick(2)}
                    className="me-3"
                >
                    Chọn ngày
                </CDBBtn>
                <CDBBtn
                    color={activeStep === 3 ? "primary" : "secondary"}
                    onClick={() => handleNextPrevClick(3)}
                    className="me-3"
                >
                    Hóa Đơn
                </CDBBtn>
                <CDBBtn
                    color={activeStep === 4 ? "primary" : "secondary"}
                    onClick={() => handleNextPrevClick(4)}
                >
                    Thanh Toán
                </CDBBtn>
            </div>

            {activeStep === 1 && <StepOne handleNextPrevClick={handleNextPrevClick} />}
            {activeStep === 2 && (
                <StepTwo item={item} handleNextPrevClick={handleNextPrevClick} />
            )}
            {activeStep === 3 && <StepThree handleNextPrevClick={handleNextPrevClick} />}
            {activeStep === 4 && <StepFour handleNextPrevClick={handleNextPrevClick} />}
            <div className="d-flex justify-content-end">
                {activeStep > 1 && (
                    <CDBBtn color="secondary" onClick={handlePrev} className="me-3">
                        Previous
                    </CDBBtn>
                )}
                {activeStep < 4 && (
                    <CDBBtn color="secondary" onClick={handleNext} className="me-3">
                        Next
                    </CDBBtn>
                )}
            </div>
        </CDBContainer>
    );
};

export default Stepper;

// const FlexColumnContainer = styled('div')`
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   width: ${props => props.width};
//   justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
//   align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
//   box-sizing: border-box;
// `;
// const StepContainer = styled('div')`
//   width: 100%;
//   height: 100%;
// `;