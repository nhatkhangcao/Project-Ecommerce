import React from 'react';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function StepOne(props) {
    const radioValue = props.radioValue
    const handleChangeMeal = props.handleChangeMeal
    const handleChangeDay = props.handleChangeDay
    const cartPrice = props.cartPrice
    const radios = [
        { name: '6 ngày', value: '6' },
        { name: '5 ngày', value: '5' },
        { name: '4 ngày', value: '4' },
    ];
    const days = [
        { name: '3 bữa', value: '3' },
        { name: '2 bữa', value: '2' },
        { name: '1 bữa', value: '1' },
    ];
    const test = () => {
        console.log(radioValue)
    }
    return (
        <div className="container text-start">
            <div>
                <div onClick={test} className="row">
                    <span>1. Chọn số ngày trong tuần</span>
                </div>
                <div className="row py-2">
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio-day"
                                value={radio.value}
                                checked={radioValue.day === radio.value}
                                onChange={(e) => handleChangeDay(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
            <div>
                <div className="row">
                    <span>2. Chọn số bữa trong ngày</span>
                </div>
                <div className="row pt-3">
                    <ButtonGroup>
                        {days.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`meal-radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio-meal"
                                value={radio.value}
                                checked={radioValue.meal === radio.value}
                                onChange={(e) => handleChangeMeal(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
            <div className='row text-end mt-2'>
                <span className='text-danger'><i className="fas fa-shopping-basket"></i> {cartPrice()}VNĐ</span>
            </div>
        </div>
    );
}

export default StepOne;