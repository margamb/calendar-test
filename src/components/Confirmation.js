import './Confirmation.css'
import Loading from './Loading'

const Confirmation = () => {
    return (
        <div className="confirmation">
            <div className="envelop">
                
                <div className="envelop_up"></div>
                <div className="envelop_up_1"></div>

                <div className="envelop_back">
                    
                    <div className="envelop_loading">
                        <Loading />  
                    </div>
                    <div className="envelop_bottom"></div>
                    <div className="envelop_left"></div>
                    <div className="envelop_right"></div>
                </div>
                

            </div>
            <h1 className="title">Almost there!</h1>
            <p className="explanation">Please, check your email to confirm your account</p>

            <button className="back">back</button>
        </div>
    )
}

export default Confirmation 