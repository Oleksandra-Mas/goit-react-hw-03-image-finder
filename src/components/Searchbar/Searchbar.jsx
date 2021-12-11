import PropTypes from 'prop-types';

import styles from './Searchbar.module.scss'
function Searchbar({onSubmit}) {
    return <header className={styles.Searchbar}>
  <form className={styles.SearchForm}>
    <button type="submit" className={styles['SearchForm-button']}>
                <span className={styles['SearchForm-button-label']}>Search</span>
    </button>

    <input
                className={styles['SearchForm-input']}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
export default Searchbar;