import React, { Component } from 'react';
import Loader from '../../loader/loader.js';
import Footer from '../../footer/footer.js';
import Typer from '../../typer/typer.js';
import './second-page.css';

class SecondPage extends Component{
    render() {
        return (
            <>
                <Loader/>
                <div className='second-page'>
                    <div className="strips">
                        <div className="second-one"></div>
                        <div className="second-two"></div>
                        <div className="second-three"></div>
                    </div>

                    <Typer
                        heading={'Who am I? '}
                        dataText={[  
                        'The Developer who wants to become famous', 
                        'The Creator who wants to construct perfect project.',
                        'The Foolish Person with his foolish dreams.',
                        'The Designer. At least I am trying.',
                        'The Black hole where you feel hopeless.'
                        ]} 
                    />
                    <Footer/>
                </div>
            </>
        )
    }
}

export default SecondPage;