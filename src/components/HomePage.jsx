import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default class HomePage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Content/>
                <Footer/>
            </React.Fragment>
        )
    }
}