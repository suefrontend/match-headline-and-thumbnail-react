import Image from "next/image";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Modal(props) {
  const { closeModal, item } = props;

  const handleCloseClick = (e) => {
    e.preventDefault();
    closeModal();
  };

  // Create div element so to access to HTML tags
  const tempElement = document.createElement("div");
  tempElement.innerHTML = item.content;

  const imgTag = tempElement.getElementsByTagName("img")[0];
  console.log("imgTag", imgTag);

  const src = imgTag.getAttribute("src");
  const alt = imgTag.getAttribute("alt");
  const width = imgTag.getAttribute("width");
  //   const title = imgTag.getAttribute("title");
  const height = imgTag.getAttribute("height");

  console.log("src: ", src);

  const pTag = tempElement.getElementsByTagName("p")[0];
  const pContent = pTag.innerHTML.trim();

  const modalContent = (
    <div className="detail">
      <div className="detail__img">
        <Image src={src} alt={alt} width={width} height={height} />
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
        <span className="detail__date">{item.pubDate.split(" ")[0]}</span>
        <h3 className="detail__heading">{item.title}</h3>
        {pContent}
        <div className="detail__link">
          <a className="btn btn-link" href={item.link} target="_blank">
            Read on CBC website
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default Modal;
