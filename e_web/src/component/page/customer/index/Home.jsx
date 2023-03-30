import React from 'react';

function Home(props) {
    return (
        <div>
            <div class="guide">
                <h1 class="guide__text">
                    How to order?
                </h1>
                <div class="guide__container">
                    <article class="guide__container--card">
                        <figure>
                            <img src={"images/fruit.png"} />
                        </figure>

                        <p class="card-excerpt">Choose your meals</p>

                    </article>

                    <article class="guide__container--card">
                        <figure>
                            <img src={"images/fruit.png"} />
                        </figure>
                        <p class="card-excerpt">We cook</p>

                    </article>

                    <article class="guide__container--card">
                        <figure>
                            <img src={"images/fruit.png"} />
                        </figure>
                        <p class="card-excerpt">Delivery</p>
                    </article>
                </div>
            </div>
            ok
        </div>

    );
}

export default Home;