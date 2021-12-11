import { Component } from 'react';
import Loader from 'react-loader-spinner';
export default class Spinner extends Component {
    render() {
        return (
            <Loader
                type="BallTriangle"
                color="#3f51b5"
                height={100}
                width={100}
                timeout={3000}
            />
        );
    }
}
