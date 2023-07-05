import { createPortal } from "react-dom";

function Modal() {
  const modalContent = (
    <div className="detail">
      <div className="detail__img">
        Image
        <svg className="icon icon-cross" onClick="resetQuiz()">
          {/* <use xlink:href="images/sprite.svg#icon-cancel-circle"></use> */}
        </svg>
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
