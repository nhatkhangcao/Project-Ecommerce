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
        </div>
    );
}

export default Home;