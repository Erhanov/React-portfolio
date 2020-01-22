import React from 'react';
import { FaFacebook, FaInstagram, FaGoogle, FaUser } from 'react-icons/fa';
import Footer from '../../footer/footer.js';
import Loader from '../../loader/loader.js';
import avatar from './Avatar.jpg';
import './first-page.css';

class FirstPage extends React.Component {
    state = { isToggleOnBurger : true }

	handleClickBurger = () => {
		this.setState({
			isToggleOnBurger : !this.state.isToggleOnBurger
		})
    }
    
    render() {
        const { isToggleOnBurger } = this.state;

        return (
            <>
                <Loader/>
                <div className='first-page'>
                    <div className="strips">
                        <div className="first-one"></div>
                        <div className="first-two"></div>
                        <div className="first-three"></div>
                    </div>

                    <div className='account'>
                        <FaUser/> Account
                    </div>

                    <div className='logo'>Erhanov Era</div>

                    <div>
                        <div className='burger-button' onClick={this.handleClickBurger}>
                            <div className={isToggleOnBurger ? 'burger-button__up rotate-burger-after' : 'burger-button__up rotate-burger-after__open'}></div>
                            <div className={isToggleOnBurger ? 'burger-button__bottom rotate-burger-before' : 'burger-button__bottom rotate-burger-before__open'}></div>
                        </div>
                        <ul className={isToggleOnBurger ? 'slide-bottom burger-menu' : 'slide-top burger-menu'}>
                            <li className='burger-menu__list'><a href='https://www.facebook.com/profile.php?id=100033730937239&ref=bookmarks' target='_blank' rel="noopener noreferrer"><FaFacebook/></a></li>
                            <li className='burger-menu__list'><a href='https://instagram.com/erhanov_era_web' target='_blank' rel="noopener noreferrer"><FaInstagram/></a></li>
                            <li className='burger-menu__list'><a href='http://google.com' target='_blank' rel="noopener noreferrer"><FaGoogle/></a></li>
                        </ul>
                    </div>

                    <div className='text'>
                        You're not lucky, <br/> You worth it
                    </div>

                    <div>
                        <img className='image' src={avatar} alt='avatar'/>
                    </div>

                    <Footer/>
                </div>
            </>
            
        )
    }
}

export default FirstPage;