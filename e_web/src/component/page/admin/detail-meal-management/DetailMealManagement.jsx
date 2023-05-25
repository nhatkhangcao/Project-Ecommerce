import React from 'react';

function DetailMealManagement(props) {
    return (
        <div>
            ok
        </div>
        // <div className="row">
        //     <div className="col-6">
        //         <div className="input-group form-group">
        //             <label className='col-sm-2 col-form-label '>Meal</label>
        //             <div className='col-sm-10'>
        //                 <input
        //                     type="text"
        //                     className="form-control"
        //                     {...register("meal_name", {
        //                         required: "Meal name is required",
        //                     })}
        //                 />
        //                 {errors.meal_name && (<span className="text-danger">{errors.meal_name.message}</span>)}
        //             </div>
        //         </div>
        //         <div className="input-group form-group pt-2">
        //             <label className='col-sm-2 col-form-label '>Price</label>
        //             <div className='col-sm-10'>
        //                 <input
        //                     type="text"
        //                     className="form-control"
        //                     {...register("meal_price", {
        //                         required: "Meal price is required",
        //                     })}
        //                 />
        //                 {errors.meal_price && (<span className="text-danger">{errors.meal_price.message}</span>)}
        //             </div>
        //         </div>
        //         <div className="input-group form-group pt-2">
        //             <label className='col-sm-2 col-form-label '>Detail</label>
        //             <div className='col-sm-10'>
        //                 <input
        //                     type="text"
        //                     className="form-control"
        //                     {...register("meal_detail")}
        //                 />
        //             </div>
        //         </div>
        //         <div className="input-group pt-2">
        //             <label className='col-sm-2 col-form-label'>Describe</label>
        //             <textarea
        //                 className="form-control"
        //                 rows="6"
        //                 {...register("meal_description")}
        //             />
        //         </div>
        //         <div className="input-group py-4">
        //             <label className='col-sm-2 col-form-label '>Status</label>
        //             <div className='col-sm-10'>
        //                 <select {...register("status")} className="form-select">
        //                     <option value="0">On Sale</option>
        //                     <option value="1">Stop Selling</option>
        //                     <option value="2">Sold Out</option>
        //                 </select>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="col-md-5 ms-auto">
        //         <label className='col-sm-2 col-form-label pe-4'>Image</label>
        //         <img alt='' className='img-fluid' style={{ maxWidth: '250px', maxHeight: '250px' }} src={checkImage()} />
        //         <div className="input-group mb-3 pt-3">
        //             <input ref={aRef} className="form-control" type="file" name='image' onChange={e => handleImage(e.target.files)} />
        //         </div>
        //     </div>
        // </div>
    );
}

export default DetailMealManagement;