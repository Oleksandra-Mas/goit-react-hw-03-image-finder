// import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.scss'
function ImageGallery() {
    return <ul className={styles.ImageGallery}>
        <ImageGalleryItem />

</ul>
}
// ImageGallery.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };
export default ImageGallery;