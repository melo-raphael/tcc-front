import React from 'react';

import loagingImage from '../../assets/loading.gif';

import './styles.css';

export default function Loading () {

    return (
        <div className="loading-container">
            <img src={loagingImage} />
        </div>
    );
}