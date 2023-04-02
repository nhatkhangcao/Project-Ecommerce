import React from 'react';
import SlideShow from '../../../layout/customer/SlideShow';

function Home(props) {
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
                            <img src={"images/fruit.png"} />
                        </figure>
                        <p className="card-excerpt">Choose your meals</p>
                    </article>
                    <article className="guide__container--card">
                        <figure>
                            <img src={"images/fruit.png"} />
                        </figure>
                        <p className="card-excerpt">We cook</p>
                    </article>
                    <article className="guide__container--card">
                        <figure>
                            <img src={"images/fruit.png"} />
                        </figure>
                        <p className="card-excerpt">Delivery</p>
                    </article>
                </div>
            </div>
            <div>
                <div className="diet">
                    <h1 className="diet__text">
                        DIET
                    </h1>
                    <div className="diet__container d-flex justify-content-center">
                        <article className="diet__container--card">
                            <figure>
                                <img src={"images/fruit.png"} />
                            </figure>
                            <p className="card-excerpt">Gain</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img src={"images/fruit.png"} />
                            </figure>
                            <p className="card-excerpt">Gain</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img src={"images/fruit.png"} />
                            </figure>
                            <p className="card-excerpt">Gain</p>
                        </article>
                        <article className="diet__container--card">
                            <figure>
                                <img src={"images/fruit.png"} />
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
                        <div className="latest-news__card-img"><img src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">1 hours ago</span>
                            <h2>Why breakfast is so important?</h2>
                            <p>When you wake up from your overnight sleep, you may not have eaten for up to 10 hours. Breakfast
                                replenishes the stores of energy and nutrients in your body.</p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img src={"images/fruit.png"} /></div>
                        <div className="latest-news__card-text">
                            <span className="date">4 days ago</span>
                            <h2>What is the eat clean diet?</h2>
                            <p>The basic principles of eat clean will encourage you to consume more whole foods such as: fruits,
                                vegetables, lean protein, whole grains and healthy fats and at the same time.</p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__card-img"><img src={"images/fruit.png"} /></div>
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