import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
export default class App extends Component {
    state = { filter: '' };

    handleSubmit = filter => {
        this.setState({ filter });
    };
    render() {
        return (
            <div className="App">
                <Searchbar onSubmit={this.handleSubmit} />
                <ImageGallery filter={this.state.filter} />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        );
    }
}
