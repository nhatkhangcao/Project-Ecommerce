import React from 'react';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function StepOne(props) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
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
    return (
        <div class="container">
            <div>
                <div class="row">
                    <span>1. Chọn số ngày trong tuần</span>
                </div>
                <div class="row py-2">
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
            <div>
                <div class="row">
                    <span>2. Chọn số bữa trong ngày</span>
                </div>
                <div class="row pt-3">
                    <ButtonGroup>
                        {days.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default StepOne;