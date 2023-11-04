import css from "./ImageGalleryItem.module.css"
export const ImageGalleryItem = ({
    webformatURL,
    largeImageURL,
    id,
 setCurrentImg,
  onClose,}) => {
    return (
        <li className={css.ImageGalleryItem} onClick={onClose}>
            <img
                className= {css.ImageGalleryItemImage}
                src={webformatURL}
                alt={id}
                onClick={() => setCurrentImg(largeImageURL)} />
</li>
    )
}