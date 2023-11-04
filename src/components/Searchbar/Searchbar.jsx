import { Component } from 'react';
import css from './Seachbar.module.css'
import { Notify } from "notiflix";

export class Searchbar extends Component {
    state = {
    query:"",
  }
   handleChange = event => {
    this.setState({
    query: event.target.value.toLowerCase(),
    });
  };

      handleSubmit = event => {
        event.preventDefault();
        if (!this.state.query) {
          Notify.info('Please enter your request.');
          return
       }
        this.props.HandleSearchbarSubmit(this.state.query);
    this.setState({query:''});
  };

  
render(){
    return (
        <header className ={css.Searchbar}>
  <form className = {css.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className ={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className ={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}

    />
  </form>
</header>
    )
}
}
