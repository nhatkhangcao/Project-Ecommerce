import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Calculator(props) {
    const [calories, setCalories] = useState({
        goal: "",
        moderateCarb: "",
        higherCarb: "",
        lowerCarb: ""
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            gender: "male",
            age: "20",
            height: "170",
            weight: "60",

        }
    });
    const handleCalculate = (data) => {
        axios.post('http://127.0.0.1:8000/api/customer/calories-calculate', data)
            .then((response) => {
                setCalories({
                    goal: response.data.goal,
                    moderateCarb: response.data.marco.moderateCarb,
                    lowerCarb: response.data.marco.lowerCarb,
                    higherCarb: response.data.marco.higherCarb,
                })
            })
    }
    return (
        <div className='container my-4'>
            <h2 className='text-center'>Learn How Many Calories You Burn Every Day</h2>
            <h6 className='text-center' >Use the TDEE calculator to learn your Total Daily Energy Expenditure, a measure of how many calories you burn per day. This calorie calculator will also display your BMI, BMR, Macros & many other useful statistics!</h6>
            <div className='container-fluid pt-4 w-75 '>
                <div className="box-info mb-5" id="bmr">
                    <form onSubmit={handleSubmit(handleCalculate)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Gender</label>
                                    <div className="col-sm-3 mt-1">
                                        <input type="radio" {...register("gender")} id="genderRadio1" value="male" />
                                        <span>Male</span>
                                    </div>
                                    <div className="col-sm-3 mt-1">
                                        <input type="radio" {...register("gender")} name="gender" id="genderRadio2" value="female" />
                                        <span>Female</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Age</label>
                                    <div className="col-sm-8">
                                        <input
                                            name="age"
                                            className="form-control w-100"
                                            {...register("age", { min: 0 })}
                                        />
                                        {errors.age && <span className='text-danger'>Age must be a positive number</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Weight</label>
                                    <div className="col-sm-8">
                                        <input
                                            name="weight"
                                            placeholder='kg'
                                            className="form-control w-100"
                                            {...register("weight", { min: 0 })}
                                        />
                                        {errors.weight && <span className='text-danger'>Weight must be a positive number</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Height</label>
                                    <div className="col-sm-8">
                                        <input
                                            name="height"
                                            placeholder='cm'
                                            className="form-control w-100"
                                            {...register("height", { min: 0 })}
                                        />
                                        {errors.height && <span className='text-danger'>Weight must be a positive number</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Activity</label>
                                    <div className="col-sm-8">
                                        <select {...register("activity")} className="form-select">
                                            <option value="1.2">Sedentary (office job)</option>
                                            <option value="1.375">Light Exercise (1-2 days/week)</option>
                                            <option value="1.55">Moderate Exercise (3-5 days/week)</option>
                                            <option value="1.725">Heavy Exercise (6-7 days/week)</option>
                                            <option value="1.9">Athlete (2x per day) </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Goal</label>
                                    <div className="col-sm-8">
                                        <select {...register("goal")} className="form-select">
                                            <option value="0">Lose weight</option>
                                            <option value="1">Maintenance</option>
                                            <option value="2">Gain weight</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group row">
                                    <div className="col-sm-12 text-center mt-3">
                                        <button type="submit" className="btn btn-success">CALCULATE</button>
                                    </div>
                                </div>
                            </div>
                            {calories.goal ? (
                                <div className='text-start h4'>
                                    <hr />
                                    Calories per day: <span className='text-danger h4'> {calories.goal}</span>
                                    <br />
                                    <div className='row pt-2'>
                                        <span className='text-center h4'>Marco</span>
                                        <div className='col-sm-4'>
                                            <span style={{ fontSize: '15px' }}>Moderate Carb</span>
                                            <div className='macrobox'>
                                                <div>
                                                    <span>{calories.moderateCarb.protein}</span>
                                                    <br />
                                                    <span>Protein</span>
                                                </div>
                                                <hr />
                                                <div>
                                                    <span>{calories.moderateCarb.fat}</span>
                                                    <br />
                                                    <span>Fat</span>
                                                </div>
                                                <hr />
                                                <div>
                                                    <span>{calories.moderateCarb.carb}</span>
                                                    <br />
                                                    <span>Carb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <span style={{ fontSize: '15px' }}>Lower Carb</span>
                                            <div className='macrobox'>
                                                <div>
                                                    <span>{calories.lowerCarb.protein}</span>
                                                    <br />
                                                    <span>Protein</span>
                                                </div>
                                                <hr/>
                                                <div>
                                                    <span>{calories.lowerCarb.fat}</span>
                                                    <br />
                                                    <span>Fat</span>
                                                </div>
                                                <hr />
                                                <div>
                                                    <span>{calories.lowerCarb.carb}</span>
                                                    <br />
                                                    <span>Carb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <span style={{ fontSize: '15px' }}>Higher Carb</span>
                                            <div className='macrobox'>
                                                <div>
                                                    <span>{calories.higherCarb.protein}</span>
                                                    <br />
                                                    <span>Protein</span>
                                                </div>
                                                <hr/>
                                                <div>
                                                    <span>{calories.higherCarb.fat}</span>
                                                    <br />
                                                    <span>Fat</span>
                                                </div>
                                                <hr />
                                                <div>
                                                    <span>{calories.higherCarb.carb}</span>
                                                    <br />
                                                    <span>Carb</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                            }
                        </div>
                    </form>
                </div >
            </div >
        </div >
    );
}

export default Calculator;