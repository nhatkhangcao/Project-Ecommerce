import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const Stepper = () => {
    const [active, setActive] = useState(1);

    const handleNextPrevClick = a => {
        setActive(a);
    };
    return (
        <CDBContainer className="text-center">
            <div className="d-flex justify-content-center">
                <CDBStepper direction="horizontal" activeColor="#666666" completeColor="#505050" incompleteColor="#666666">
                    <CDBStep
                        id={1}
                        name="Basic Information"
                        handleClick={() => handleNextPrevClick(1)}
                        active={active}
                        component={<StepOne handleNextPrevClick={handleNextPrevClick} />}
                    />
                    <CDBStep
                        id={2}
                        name="Personal Data"
                        handleClick={() => handleNextPrevClick(2)}
                        active={active}
                        component={<StepTwo handleNextPrevClick={handleNextPrevClick} />}
                    />
                    <CDBStep
                        id={3}
                        name="Terms and Conditions"
                        handleClick={() => handleNextPrevClick(3)}
                        active={active}
                        component={<StepThree handleNextPrevClick={handleNextPrevClick} />}
                    />
                    <CDBStep
                        id={4}
                        name="Finish"
                        handleClick={() => handleNextPrevClick(4)}
                        active={active}
                        component={<StepFour handleNextPrevClick={handleNextPrevClick} />}
                    />
                </CDBStepper>
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