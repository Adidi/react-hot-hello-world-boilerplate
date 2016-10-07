import React from 'react';

const img = require('../../img/cat.jpg');

const Images = () =>
    <div className="images">
        <div>
            <h2>Classic Img Tag</h2>
            <img src="/img/cat.jpg" />
        </div>
        <div>
            <h2>Classic Div Background Image</h2>
            <div className="cat-regular"></div>
        </div>
        <div>
            <h2>Webpack Image tag (base 64)</h2>
            <img src={img} />
        </div>
        <div>
            <h2>Webpack Div Background Image (base 64)</h2>
            <div className="cat-base"></div>
        </div>
    </div>;

export default Images;