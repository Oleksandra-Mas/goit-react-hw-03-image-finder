import { Component } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';

export default class App extends Component {
    handleSubmit = () => {
        console.log('hsbhbdsjf');
    };
    render() {
        return (
            <div className="App">
                <Searchbar onSubmit={this.handleSubmit} />
                <ImageGallery />
            </div>
        );
    }
}
