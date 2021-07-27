import { Link } from 'react-router-dom';

import './Confirmation.css'
import AnimatedLogo from './AnimatedLogo'

const Confirmation = () => {

    return (
        <div className="confirmation_container">

            <div className="confirmation">
                <div className="envelope">
                    <div className="envelope_up" />
                    <div className="envelope_up_1" />

                    <div className="envelope_back">
                        <div className="envelope_loading_up">
                            <AnimatedLogo />
                        </div>
                        <div className="envelope_bottom"></div>
                        <div className="envelope_left"></div>
                        <div className="envelope_right"></div>
                    </div>
                </div>

                <h1 className="title">Almost there!</h1>
                <p className="explanation">Please, check your email to confirm your account</p>    
            </div>
            
            <div className="back_container">
                <Link to="/">
                    <button className="back">Back</button>
                </Link>
            </div>
        
            
       </div>
           
        
    )
}

export default Confirmation