import React, { Component } from 'react';
import { getAllImages } from '../redux/action/um_action';
import { connect } from 'react-redux';
import Header from './header';
import '../App.css';
import { Link } from 'react-router-dom';

class ImageList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: {
                title: ""
            }
        };

    }

    componentDidMount() {
        this.props.getAllImages()
    }

    render() {
        if (!this.props.images) {
            return <div>Loading....</div>
        }

        return (
            <div className="container">
                <div className="jumbotron">
                    <Header />
                </div>

                <ul className="list-group">
                    {
                        this.props.images.map(image => (<div key={image.id}>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div><strong>Title:</strong> {image.title}
                                    <Link to={{ pathname: `/imagedetails/${image.id}` }}>
                                        <img src={require(`../Images/${image.imagename}`)} height="150px;" width="150px;" /></Link>
                                </div>
                            </li>
                        </div>
                        )
                        )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.images)
    return {
        images: state.images
    }
}

export default connect(mapStateToProps, { getAllImages })(ImageList);