import React, { Component } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
    state = { isToggleOnFooter : true }

    handleClickFooter = () => {
        this.setState({
            isToggleOnFooter : !this.state.isToggleOnFooter
        })
    }

    render() {
        const isToggleOnFooter = this.state.isToggleOnFooter;

        return (
            <div className='footer'>
                <Link to='/'>
                    <FaArrowLeft className='arrow-left'/>
                </Link>
                <Link to='/2'>
                    <FaArrowRight className='arrow-right'/>
                </Link>
                <FaPlus className={isToggleOnFooter ? 'rotate-right plus' : 'rotate-left plus'} onClick={this.handleClickFooter}/>
                <div className={isToggleOnFooter ? 'footer-text' : 'footer-text-none'}>2019 year copyright © Erh, Inc.</div>
            </div>
        )
    }
}

export default Footer;