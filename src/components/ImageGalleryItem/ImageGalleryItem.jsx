// import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './ImageGalleryItem.module.scss';
export default class ImageGalleryItem extends Component {
    render() {
        const { webImage, largeImage, tags } = this.props;
        return (
            <li className={styles.ImageGalleryItem}>
                <img
                    className={styles['ImageGalleryItem-image']}
                    src={webImage}
                    alt={tags}
                />
            </li>
        );
    }
}
// ImageGallery.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };
