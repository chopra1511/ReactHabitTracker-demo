import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

const portalEle = document.getElementById("overlays");

const Modal = (props) => {
    return (
      <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEle)}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalEle
        )}
      </>
    );
}

export default Modal;