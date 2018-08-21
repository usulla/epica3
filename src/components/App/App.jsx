import React, { Component } from 'react';
import FormBlock from '../Form/Form.jsx';
import Nav from '../Nav/Nav.jsx';
import HeaderLogo from '../HeaderBlock/HeaderLogo.jsx';
import HeaderText from '../HeaderBlock/HeaderText.jsx';
import AllWorks from '../AllWorks/AllWorks.jsx';
import VideoPage from '../VideoPage/VideoPage.jsx';
import ProductsEpica from '../ProductsEpica/ProductsEpica.jsx';
import './app.js';

class App extends Component {
    render() {
        return (
        <div>
            <HeaderLogo/>
            <HeaderText/>
            <FormBlock/>
            <AllWorks/>
            <VideoPage/>
            <ProductsEpica/>
        </div>
        );
    }
}

export default App;