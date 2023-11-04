import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import axios from 'axios';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '39494389-0cbffb7df999a91ec2d35df03';

export class App extends Component {
  
  
  state = {
     page: 1,
    query: '',
    isLoading: false,
    images: [],
    error: null,
    img: '',
    isOpenModal: false,
    total:'',
    // modalData: null,
    };
    
   componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      
      this.DisplayImg();
    }
  }

  async fetchImg (query, page) {
   const params = {
    key: API_KEY,
    q: query, 
    image_type: 'photo',
    orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 12,
      
  };

    try {

      this.setState({ isLoading: true });
      const { images } = this.state;

      const { data } = await axios(BASE_URL, { params });
      const totalImgs = data.totalHits;

      const imgArr = data.hits
      this.setState({
        images: [...images, ...imgArr],
        total: totalImgs
        })
    }
    
    catch (error) {
    this.setState({ error: error.message });
    }

     finally {
      this.setState({
        isLoading: false,
      });
    }
 };

 
  DisplayImg = () => {
    const {  page, query } = this.state;
    this.fetchImg(query, page);
  
  }

  HandleSearchbarSubmit = query => {
    this.setState({ query, images: [], page: 1, isLoading: true });
  };


    openModal = () => {
    this.setState({
      isOpenModal: true,
        // !this.state.isOpenModal,
      // img: imgToModal,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      img: "",
    });
  };

setCurrentImg = urlLarge => {
    this.setState({ img: urlLarge });
  };

  clickLoadMore = () => {
    this.setState(prevState => ({
    page:prevState.page+1
  }))
}
  render() {
    return (
      <div>
       
        {this.state.error !== null && (
          <p className="error-bage">
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}

        <Searchbar HandleSearchbarSubmit= {this.HandleSearchbarSubmit}/>
      
          {this.state.isLoading && <Loader/>}
        

        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            onClick={this.openModal}
            setCurrentImg={this.setCurrentImg}
          />
        )}
         
        
        {this.state.img && ( 
          <Modal
            img = {this.state.img}
           closeModal={this.closeModal}
          />
        )}
       

        {this.state.images.length < this.state.total && !this.state.isLoading && (
          <Button clickLoadMore = {this.clickLoadMore} />
        )} 

      </div>
    );
  
}
    
  
};
