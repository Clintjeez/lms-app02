import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import ToastContainer from "react-notify-toast";
import { successAction, errorAction, infoAction, warningAction } from "../../redux/action/toastActions"

import './Toast.scss';
// Toast notification component
class DisplayToast extends PureComponent {

    render() {
            const { isValid, message, successAction, errorAction, infoAction, warningAction } = this.props;
            return (
                <div className={``}>
                    <ToastContainer options={{top: '50px', zIndex: 200}} timeout={2500} />
                </div>
            )
    }

}

const mapStateToProps = state => ({
    message: state.message,
})


const mapDispatchToProps = dispatch => ({
    successAction: () => dispatch(successAction()),
    errorAction: () => dispatch(errorAction()),
    infoAction: () => dispatch(infoAction()),
    warningAction: () => dispatch(warningAction())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayToast);
