// import PropTypes from 'prop-types';

import Spinner from '../Loader/Loader';
import styles from './ImageGalleryItem.module.scss'
function ImageGalleryItem() {
    return <li className={styles.ImageGalleryItem}>
        <img className={styles['ImageGalleryItem-image']} src="" alt="" />
        <Spinner/>
</li>
}
// ImageGallery.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };
export default ImageGalleryItem;