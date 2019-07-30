import React, { Component } from 'react';

import Title from './Title';
import PhotoGallery from './PhotoGallery';

class Home extends Component {
    render() {
        return (
            <div>
                <Title value="Home"/>
                <PhotoGallery/>
            </div>
        );
    }
}

export default Home;
