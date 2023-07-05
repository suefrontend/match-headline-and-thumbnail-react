import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Modal(props) {
  const { showModal, openModal, closeModal } = props;

  const handleCloseClick = (e) => {
    e.preventDefault();
    closeModal();
  };

  const modalContent = (
    <div className="detail">
      <div className="detail__img">
        Image
        {/* <br /> */}
        {/* <svg >
           <use xlink:href="images/sprite.svg#icon-cancel-circle"></use> 
        </svg> */}
        <AiOutlineCloseCircle
          className="icon icon-cross"
          onClick={handleCloseClick}
        />
        {/* <span onClick={handleCloseClick}>X</span> */}
      </div>
      <div className="detail__content">
        <span className="detail__date">Published Date</span>
        <h3 className="detail__heading">Title</h3>
        Description
        <div className="detail__link">
          <a className="btn btn-link" href="" target="_blank">
            Read on CBC website
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default Modal;
