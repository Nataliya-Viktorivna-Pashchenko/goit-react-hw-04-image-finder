import { useEffect, useState } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import  { getImg } from "./api";

export const App =() => {
  
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [img, setImg] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [total, setTotal] = useState(null);
 

  useEffect(() => {
    if (query) {
       const  fetchImg = async () => {
        try {
          setIsLoading(true);
          const { data } = await getImg(query, page)
          const totalImgs = data.totalHits;
          
          const imgArr = data.hits
          setImages(prevImg => [...prevImg, ...imgArr]);
          setTotal(totalImgs);
        }
        catch (error) {
          setError(error.message);
        }

        finally {
          setIsLoading(false);
        }
      };
      fetchImg()
    }
  },
     [query, page] );
    

   
  

const HandleSearchbarSubmit = query => {
  setQuery(query);
  setImages([]);
  setPage(1);
  setIsLoading(true)
  };


    const openModal = () => {
      setIsOpenModal(true);
    
    }
  

const closeModal = () => {
  setIsOpenModal(!isOpenModal);
  setImg('');
   
  };

const setCurrentImg = urlLarge => {
  setImg(urlLarge);
  };

const clickLoadMore = () => {
    setPage(prevPage => prevPage + 1)
}
  
    return (
      <div>
       
        {error !== null && (
          <p className="error-bage">
            Oops, some error occured... Error message: {error}
          </p>
        )}

        <Searchbar HandleSearchbarSubmit= {HandleSearchbarSubmit}/>
      
          {isLoading && <Loader/>}
        

        {images.length > 0 && (
          <ImageGallery
            images={images}
            onClick={openModal}
            setCurrentImg={setCurrentImg}
          />
        )}
         
        
        {img && ( 
          <Modal
            img = {img}
           closeModal={closeModal}
          />
        )}
       

        {images.length <total && !isLoading && (
          <Button clickLoadMore = {clickLoadMore} />
        )} 

      </div>
    );
  

    
  
};
