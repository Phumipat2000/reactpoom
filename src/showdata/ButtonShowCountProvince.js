
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ButtonShowCountProvince extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowCountProvince'}> <button type="button" className="btn btn-primary">ShowCountProvince</button> </Link>
            </div>
        );
    }
}
export default ButtonShowCountProvince;