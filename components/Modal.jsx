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
  const height = imgTag.getAttribute("height");

  const pTag = tempElement.getElementsByTagName("p")[0];
  const pContent = pTag.innerHTML.trim();

  const modalContent = (
    <>
      <div className="detail fixed bg-white">
        <div className="detail__img">
          <Image src={src} alt={alt} width={width} height={height} />
          <AiOutlineCloseCircle
            className="w-8 h-8 absolute top-4 right-3 cursor-pointer text-white"
            onClick={handleCloseClick}
          />
        </div>
        <div className="detail__content p-5">
          <span className="text-grey text-sm">
            {item.pubDate.split(" ")[0]}
          </span>
          <h3 className="mb-3 leading-snug  text-xl font-medium">
            {item.title}
          </h3>
          {pContent}
          <div className="mt-5">
            <a
              className="btn btn-link flex items-center justify-center text-center py-2 transition duration-300 text-btnpink"
              href={item.link}
              target="_blank"
            >
              Read on CBC website
            </a>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </>
  );

  return createPortal(modalContent, document.body);
}

export default Modal;
