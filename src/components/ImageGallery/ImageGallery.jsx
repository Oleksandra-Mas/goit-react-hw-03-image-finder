// import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';

import Spinner from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.scss';
import ApiService from '../../services/apiService';
const apiService = new ApiService();

const STATUS = {
    idle: 'idle',
    pending: 'pending',
    resolved: 'resolved',
};

export default class ImageGallery extends Component {
    state = { status: STATUS.idle };
    async componentDidUpdate(prevProps, prevState) {
        const nextFilter = this.props.filter;
        const curFilter = prevProps.filter;
        if (curFilter !== nextFilter) {
            this.setState({ status: STATUS.pending });
            apiService.searchQuery = nextFilter;
            const photos = await apiService.searchPhoto();
            if (photos.total === 0) {
                this.setState({ status: STATUS.idle });
                return toast.warning('Nothing found');
            }
            this.setState({ photos, status: STATUS.resolved });
        }
    }
    render() {
        const { photos, status } = this.state;
        if (status === STATUS.idle) {
            return null;
        }
        if (status === STATUS.pending) {
            return <Spinner />;
        }
        if (status === STATUS.resolved) {
            return (
                <ul className={styles.ImageGallery}>
                    {photos.hits.map(
                        ({ id, largeImageURL, webformatURL, tags }) => (
                            <ImageGalleryItem
                                key={id}
                                webImage={webformatURL}
                                largeImage={largeImageURL}
                                tags={tags}
                            />
                        ),
                    )}
                </ul>
            );
        }
    }
}
// ImageGallery.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };
