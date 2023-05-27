import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AddMealDetail from './modal/AddMealDetail';
import EditMealDetail from './modal/EditMealDetail';

function DetailMealManagementComponent(props) {
    const getMealDetail = props.getMealDetail
    const setDataList = props.setDataList
    const handleDeleteMeal = props.handleDeleteMeal
    const paginate = props.paginate
    const dataList = props.dataList
    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }
    const {
        register,
        reset,
        handleSubmit,
    } = useForm();
    const searchMeal = (data) => {
        if (data.meal_name) {
            axios.post('http://127.0.0.1:8000/api/admin/search-meal-detail', data).then((response) => {
                setDataList(response.data)
                paginate(response)
            });
        }
    }
    const clearSearch = (data) => {
        getMealDetail();
    }
    useEffect(() => {
        getMealDetail()
    }, []);
    return (
        <div className='container-fluid'>
            <div className="card shadow-style">
                <div className="card-header bg-white">
                    <form onSubmit={handleSubmit(searchMeal)}>
                        <div className="row row-cols-auto">
                            <div className="col-3">
                                <span className='fw-bold'>Meal</span>
                                <input
                                    {...register("meal_name")}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row row-cols-auto d-flex justify-content-between pt-3">
                            <div className="col">
                                <button className='btn bg-primary text-white'>
                                    <AddMealDetail getMealDetail={getMealDetail} />
                                </button>
                            </div>
                            <div className="col">
                                <button type='submit' className="btn bg-dark text-white me-4">
                                    <i className="px-3 fas fa-search"></i>
                                </button>
                                <button type='button' onClick={() => reset(clearSearch)} className="btn bg-secondary text-white">
                                    <i className="px-3 fas fa-eraser"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        {dataList && dataList.data && dataList.data.length > 0 ? (
                            dataList.data.map((item, index) => (
                                <div className="col" key={item.id}>
                                    <div className="card border-1">
                                        <div className="image-container">
                                            <img
                                                src={`http://localhost:8000/${item.meal_image}`}
                                                className="card-img-top img-fluid"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.meal_name}</h5>
                                            <h5 className="card-title text-white combo-style bg-success">{item.combo_type_text}</h5>
                                        </div>
                                        <div className="card-body d-flex justify-content-center">
                                            <div className="btn bg-light border text-primary me-2">
                                                <EditMealDetail getMealDetail={getMealDetail} mealList={item} />
                                            </div>
                                            <div
                                                onClick={(e) => handleDeleteMeal(item, e)}
                                                className="btn bg-light border text-danger"
                                            >
                                                <i className="fas fa-trash-alt">&nbsp;<span>Delete</span></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-danger text-center col col-lg-12">Không có dữ liệu!</div>
                        )}
                    </div>
                </div>
                <nav aria-label="Page navigation example" className=''>
                    <ul className="pagination d-flex justify-content-center">
                        {paginate && paginate.last_page >= 2 && paginate.links && paginate.links.map((link) => {
                            let url = link.url === null ? paginate.links[1].url : link.url;
                            let className = link.active === true ? "page-item active" : "page-item"
                            return (
                                <li className={className} key={link.label}>
                                    <button className="page-link" onClick={e => getMealDetail(url)}>{link.label}</button>
                                </li>
                            )
                        })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default DetailMealManagementComponent;