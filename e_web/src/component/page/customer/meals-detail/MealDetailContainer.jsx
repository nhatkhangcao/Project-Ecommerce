import React from 'react';
import MealDetailModal from './modal/MealDetailModal';
import { useLocation } from 'react-router-dom';

function MealDetailContainer(props) {
    const location = useLocation();
    const { item } = location.state || {};
    if (!item) {
        // Handle the case when the item is not available
        return <div>Loading...</div>;
    }
    const test = () => {
        console.log(item)
    }
    return (
        <div>
            <main>
                <section class="container mt-3">
                    <div class="row">
                        <div class="col-md-6">
                            <img
                                onClick={test} src={`http://localhost:8000/${item.meal_image}`}
                                alt="Eat Clean Product Image" class="img-fluid w-75"
                            />
                        </div>
                        <div class="col-md-6">
                            <h2 class="mb-3">{item.meal_name}</h2>
                            <p>{item.meal_detail}</p>
                            <p>Giá:</p>
                            <p>Một số điểm đặc biệt của sản phẩm Eat Clean:</p>
                            <ul>
                                <li>Thực đơn lành mạnh và giàu dinh dưỡng.</li>
                                <li>Sử dụng các nguyên liệu hữu cơ tươi ngon.</li>
                                <li>Thích hợp cho người muốn duy trì một lối sống lành mạnh.</li>
                                <li>Cung cấp nhiều chất dinh dưỡng và vitamin.</li>
                                <li>Giúp tạo cảm giác no lâu và hỗ trợ quá trình giảm cân.</li>
                            </ul>
                            <button className='btn btn-danger'><MealDetailModal item={item} /></button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MealDetailContainer;