import { useState } from 'react';
import css from './Seachbar.module.css'
import { Notify } from "notiflix";

export const Searchbar = ({HandleSearchbarSubmit}) => {
  const [query, setQuery] = useState('');
  //   state = {
  //   query:"",
  // }
  const handleChange = event => {
    setQuery(event.target.value.toLowerCase())
    // this.setState({
    // query: event.target.value.toLowerCase(),
    // });
  };

     const handleSubmit = event => {
        event.preventDefault();
        if (!query) {
          Notify.info('Please enter your request.');
          return
       }
       HandleSearchbarSubmit(query);
       setQuery('')
    // this.setState({query:''});
  };

  

    return (
        <header className ={css.Searchbar}>
  <form className = {css.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className ={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className ={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}

    />
  </form>
</header>
    )

}
