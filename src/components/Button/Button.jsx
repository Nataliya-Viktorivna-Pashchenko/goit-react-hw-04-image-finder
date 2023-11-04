import css from "./Button.module.css"
export const Button = ({ clickLoadMore }) => {
  return (
    <div className={css.ButtonWrap}>
    <button className={css.Button} type="button" onClick={clickLoadMore}>
      Load more...
      </button>
      </div>
  );
};