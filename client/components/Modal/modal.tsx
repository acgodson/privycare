import styles from "./styles.module.css";

const Modal = (props: {
  style: any;
  children: any;
  closeModal: any;
  big: any;
}) => {
  return (
    <>
      <div
        style={props.style}
        className={[
          styles.modal,
          props.big ? styles.modal__big : styles.modal__small,
        ].join(" ")}
      >
        {props.children}
      </div>
      <div className={styles.backdrop} onClick={props.closeModal}></div>
    </>
  );
};

export default Modal;
