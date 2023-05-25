import React from 'react';
import SlideShow from '../../../layout/customer/SlideShow';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home(props) {
    const [dataList, setDataList] = useState();
    const getMealData = () => {
        axios.get('http://127.0.0.1:8000/api/customer/combo-list').then((response) => {
            setDataList(response.data)
        });
    }
    const textData = () => {
        console.log(dataList)
    }
    const formatVND = (money) => {
        const formatter = new Intl.NumberFormat("vi-VN");
        return formatter.format(money);
    }
    useEffect(() => {
        getMealData()
    }, []);
    return (
        <div>
            <SlideShow />
            <div className="guide">
                <h1 className="guide__text">
                    Eatclean hoạt động như thế nào?
                </h1>
                <div className="guide__container d-flex justify-content-center">
                    <article className="guide__container--card">
                        <figure>
                            <img alt='' src={"images/diet.png"} />
                        </figure>
                        <p className="card-excerpt">Bạn Hãy Chọn Gói Phù Hợp</p>
                    </article>
                    <article className="guide__container--card">
                        <figure>
                            <img alt='' src={"images/cooking.png"} />
                        </figure>
                        <p className="card-excerpt">Eatclean Chuẩn Bị</p>
                    </article>
                    <article className="guide__container--card">
                        <figure>
                            <img alt='' src={"images/food-delivery.png"} />
                        </figure>
                        <p className="card-excerpt">Món ăn đến với bạn</p>
                    </article>
                </div>
            </div>
            <div className="container mt-3" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                <h1 className="text-center py-3">COMBO</h1>
                <h4 onClick={textData} className="text-center pb-4">Tôi tin rằng các combo dưới đây sẽ phù hợp với bạn...</h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 text-decoration-none text-dark">
                    {dataList && dataList.length > 0 ? (
                        dataList.map((item, index) => (
                            <div style={{ cursor: 'pointer' }} className="col px-2 mb-4" key={item.id}>
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
                        <div className="text-danger text-center col-12">NO DATA!</div>
                    )}
                </div>
            </div>
            <div>
                <div className="diet">
                    <h1 className="diet__text">
                        Những chế độ diet các bạn nên thử!!!
                    </h1>
                    <div className="diet__container d-flex justify-content-center">
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/weight-scale.png"} />
                            </figure>
                            <p className="card-excerpt">Tăng cân</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/weight-loss.png"} />
                            </figure>
                            <p className="card-excerpt">Giảm cân</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/weight.png"} />
                            </figure>
                            <p className="card-excerpt">Giữ cân</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/vegan.png"} />
                            </figure>
                            <p className="card-excerpt">Chế độ ăn chay</p>
                        </article>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h1 className='text-center'>Tin tức HOT</h1>
                <div className="latest-news">
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img alt='' src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">1 giờ trước</span>
                            <h2>Tại sao bữa sáng quan trọng đến vậy?</h2>
                            <p>Khi bạn thức dậy sau giấc ngủ qua đêm, bạn có thể đã không ăn gì trong khoảng thời gian lên đến 10 giờ. Bữa sáng sẽ bổ sung năng lượng và dưỡng chất cho cơ thể.</p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img alt='' src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">4 ngày trước</span>
                            <h2>Ăn sạch là gì?</h2>
                            <p>Các nguyên tắc cơ bản của chế độ ăn sạch sẽ khuyến khích bạn tiêu thụ nhiều thực phẩm tự nhiên hơn như: trái cây, rau củ, protein gắn liền, các loại ngũ cốc nguyên hạt và chất béo lành mạnh cùng một lúc.</p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img alt='' src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">15 tháng 5, 2023</span>
                            <h2>Sữa hạng nhất so với sữa thông thường như thế nào?</h2>
                            <p>Chúng tôi đã xem xét kỹ hơn các loại sữa không chứa đạm để xem chúng có giá trị dinh dưỡng và cách sử dụng như thế nào trong nhà bếp để bạn có thể đưa ra quyết định thông minh trước khi đi mua sữa lần tới.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;