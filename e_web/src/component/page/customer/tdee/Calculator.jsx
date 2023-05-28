import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Calculator(props) {
    const account = JSON.parse(localStorage.getItem('account_user'))?.user?.account;
    const [recommend, setRecommend] = useState({})
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
            account: account ?? ''
        }
    });
    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }
    const handleCalculate = (data) => {
        axios.post('http://127.0.0.1:8000/api/customer/calories-calculate', data)
            .then((response) => {
                setCalories({
                    goal: response.data.goal,
                    moderateCarb: response.data.marco.moderateCarb,
                    lowerCarb: response.data.marco.lowerCarb,
                    higherCarb: response.data.marco.higherCarb,
                })
                setRecommend(response.data.recommend)
            })
    }
    return (
        <div className='container my-4'>
            <h2 className='text-center'>Tìm hiểu số calo bạn đốt hàng ngày</h2>
            <h6 className='text-center' >Sử dụng TDEE để tìm hiểu chỉ số tổng hợp năng lượng tiêu thụ hàng ngày của bạn, một đơn vị đo lường số calo bạn đốt hàng ngày. TDEE cũng sẽ hiển thị Macros - thông số giúp bạn có thể chọn chế độ phù hợp!</h6>
            <div className='container-fluid pt-4 w-75 '>
                <div className="box-info mb-5" id="bmr">
                    <form onSubmit={handleSubmit(handleCalculate)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Giới tính</label>
                                    <div className="col-sm-3 mt-1">
                                        <input type="radio" {...register("gender")} id="genderRadio1" value="male" />
                                        <span>Nam</span>
                                    </div>
                                    <div className="col-sm-3 mt-1">
                                        <input type="radio" {...register("gender")} name="gender" id="genderRadio2" value="female" />
                                        <span>Nữ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Tuổi</label>
                                    <div className="col-sm-7">
                                        <input
                                            name="age"
                                            className="form-control w-100"
                                            {...register("age", { min: 0 })}
                                        />
                                        {errors.age && <span className='text-danger'>Vui lòng nhập tuổi là số dương</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Cân nặng</label>
                                    <div className="col-sm-7">
                                        <input
                                            name="weight"
                                            placeholder='kg'
                                            className="form-control w-100"
                                            {...register("weight", { min: 0 })}
                                        />
                                        {errors.weight && <span className='text-danger'>Vui lòng nhập cân nặng là số dương</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Chiều cao</label>
                                    <div className="col-sm-7">
                                        <input
                                            name="height"
                                            placeholder='cm'
                                            className="form-control w-100"
                                            {...register("height", { min: 0 })}
                                        />
                                        {errors.height && <span className='text-danger'>Vui lòng nhập chiều cao là số dương</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-7">
                                    <input
                                        type='hidden'
                                        name='account'
                                        {...register("account")}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Hoạt động</label>
                                    <div className="col-sm-7">
                                        <select {...register("activity")} className="form-select">
                                            <option value="1.2">Ít vận động</option>
                                            <option value="1.375">Vận động nhẹ (1-2 ngày/tuần)</option>
                                            <option value="1.55">Vận động trung bình (3-5 ngày/tuần)</option>
                                            <option value="1.725">Vận động nặng (6-7 ngày/tuần)</option>
                                            <option value="1.9">Vận động viên (2 lần/ngày) </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-4">Mục tiêu</label>
                                    <div className="col-sm-7">
                                        <select {...register("goal")} className="form-select">
                                            <option value="0">Giảm cân</option>
                                            <option value="1">Giữ cân</option>
                                            <option value="2">Tăng cân</option>
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
                                <div>
                                    <div className='text-start h4'>
                                        <hr />
                                        Bạn nên nạp mỗi ngày: <span className='text-danger h4'> {calories.goal} calories</span>
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
                                                    <hr />
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
                                                    <hr />
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
                                    <hr />
                                    <div>
                                        <span className='h4'>Một số combo phù hợp với bạn: </span>
                                        <div className="pt-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 text-decoration-none text-dark">
                                            {recommend && recommend.length > 0 ? (
                                                recommend.map((item, index) => (
                                                    <div style={{ cursor: 'pointer' }} className="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-4" key={item.id}>
                                                        <Link to={{ pathname: `/detail/${item.combo_name}` }} state={{ item }} className="nav-link">
                                                            <div className="card border-1">
                                                                <img
                                                                    style={{
                                                                        maxHeight: '230px',
                                                                        minHeight: '200px',
                                                                        height: '230px',
                                                                    }}
                                                                    src={`http://localhost:8000/${item.combo_image}`}
                                                                    className="card-img-top"
                                                                    alt="..."
                                                                />
                                                                <div className="card-body">
                                                                    <h5 className="card-title text-success">{item.combo_name}</h5>
                                                                    <h6>{item.detail}</h6>
                                                                    <p className="card-text text-danger">{formatVND(item.combo_price)} VNĐ</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-danger text-center ">Hiện tại chưa có combo nào phù hợp với bạn!</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                            }
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default Calculator;