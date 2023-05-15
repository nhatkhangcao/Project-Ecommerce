import React from 'react';
import SlideShow from '../../../layout/customer/SlideShow';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home(props) {
    const [dataList, setDataList] = useState();
    const getMealData = () => {
        axios.get('http://127.0.0.1:8000/api/customer/list').then((response) => {
            setDataList(response.data)
        });
    }
    const textData = () => {
        console.log(dataList)
    }

    useEffect(() => {
        getMealData()
    }, []);
    return (
        <div>
            <SlideShow />
            <div className="guide">
                <h1 className="guide__text">
                    How it works?
                </h1>
                <div className="guide__container d-flex justify-content-center">
                    <article className="guide__container--card">
                        <figure>
                            <img alt='' src={"images/fruit.png"} />
                        </figure>
                        <p className="card-excerpt">Choose your meals</p>
                    </article>
                    <article className="guide__container--card">
                        <figure>
                            <img alt='' src={"images/fruit.png"} />
                        </figure>
                        <p className="card-excerpt">We cook</p>
                    </article>
                    <article className="guide__container--card">
                        <figure>
                            <img alt='' src={"images/fruit.png"} />
                        </figure>
                        <p className="card-excerpt">Delivery</p>
                    </article>
                </div>
            </div>
            <div className='container mt-3' style={{ paddingRight: '30px', paddingLeft: '30px' }} >
                <h1 className='text-center py-3'>
                    MENU
                </h1>
                <h4 onClick={textData} className='text-center pb-5'>
                    All of our products are so fresh...
                </h4>
                <Link to="detail" className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 text-decoration-none text-dark">
                    {
                        dataList && dataList.length > 0 ? dataList.map((item, index) =>
                            <div className="col px-3" key={item.id}>
                                <div className="card border-1">
                                    <img style={{ maxHeight: '230px', minHeight: '200px', height: '230px' }} src={`http://localhost:8000/${item.meal_image}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-success">{item.meal_name}</h5>
                                        <h6>{item.meal_detail}</h6>
                                        <p className="card-text">{item.meal_price} $</p>
                                    </div>
                                </div>
                            </div>
                        ) :
                            <div className="text-danger text-center col col-lg-12">NO DATA!</div>
                    }
                </Link>
            </div>
            <div>
                <div className="diet">
                    <h1 className="diet__text">
                        DIET
                    </h1>
                    <div className="diet__container d-flex justify-content-center">
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/fruit.png"} />
                            </figure>
                            <p className="card-excerpt">Gain</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/fruit.png"} />
                            </figure>
                            <p className="card-excerpt">Gain</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/fruit.png"} />
                            </figure>
                            <p className="card-excerpt">Gain</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img alt='' src={"images/fruit.png"} />
                            </figure>
                            <p className="card-excerpt">Gain</p>
                        </article>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h1 className='text-center'>Latest News</h1>
                <div className="latest-news">
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img alt='' src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">1 hours ago</span>
                            <h2>Why breakfast is so important?</h2>
                            <p>When you wake up from your overnight sleep, you may not have eaten for up to 10 hours. Breakfast
                                replenishes the stores of energy and nutrients in your body.</p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img alt='' src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">4 days ago</span>
                            <h2>What is the eat clean diet?</h2>
                            <p>The basic principles of eat clean will encourage you to consume more whole foods such as: fruits,
                                vegetables, lean protein, whole grains and healthy fats and at the same time.</p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img alt='' src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">Apr 21, 2022</span>
                            <h2>How Do The Top Milks Stack Up?</h2>
                            <p>We took a closer look at the non-dairy shelves to see how they stack up nutritionally and in uses
                                in the kitchen so you can make an informed decision before your next
                                milk run.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;