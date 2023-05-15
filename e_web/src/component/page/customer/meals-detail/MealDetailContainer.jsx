import React from 'react';
import MealDetailModal from './modal/MealDetailModal';

function MealDetailContainer(props) {
    return (
        <div>
            <main>
                <section class="container mt-3">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="images/fruit.png" alt="Eat Clean Product Image" class="img-fluid w-75" />
                        </div>
                        <div class="col-md-6">
                            <h2 class="mb-3">Sản phẩm Eat Clean</h2>
                            <p>Mô tả: Sản phẩm Eat Clean là một combo tuyệt vời dành cho những người muốn ăn lành mạnh và bổ dưỡng. Nó bao gồm các thành phần tươi ngon và hữu cơ như rau xanh hữu cơ, thịt gà nướng, hạt diếp cá, cà chua cherry, dưa leo và nước sốt chanh.</p>
                            <p>Giá: $9.99</p>
                            <p>Một số điểm đặc biệt của sản phẩm Eat Clean:</p>
                            <ul>
                                <li>Thực đơn lành mạnh và giàu dinh dưỡng.</li>
                                <li>Sử dụng các nguyên liệu hữu cơ tươi ngon.</li>
                                <li>Thích hợp cho người muốn duy trì một lối sống lành mạnh.</li>
                                <li>Cung cấp nhiều chất dinh dưỡng và vitamin.</li>
                                <li>Giúp tạo cảm giác no lâu và hỗ trợ quá trình giảm cân.</li>
                            </ul>
                            <button className='btn btn-danger'><MealDetailModal>COMBO TUẦN</MealDetailModal></button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MealDetailContainer;