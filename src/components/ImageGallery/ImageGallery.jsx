import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGaller.module.css"
export const ImageGallery = ({ images, setCurrentImg, onClose }) => {

      return (
        <ul className={css.ImageGallery} >
          {images.map(({ id, webformatURL, largeImageURL }) =>
          (<ImageGalleryItem
            key={id}
            id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          setCurrentImg={setCurrentImg}
          onClose={onClose}
            />
          ))}
 
</ul>
       )
    
}