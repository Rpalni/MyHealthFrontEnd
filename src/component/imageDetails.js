import React, { Component } from 'react';
import { getImageDetails } from '../redux/action/um_action';
import { connect } from 'react-redux';
import Header from './header';
import '../App.css';

class ImageDetails extends Component {
    constructor(props) {
        super(props)

        debugger;
        this.state = {
            id: this.props.match.params.id
        };
    }

    componentDidMount() {
        debugger;
        this.props.getImageDetails(this.props.match.params.id);
    }

    render() {

        if (!this.props.image) {
            return <div>Loading....</div>
        }

        return (
            <div className="container">
                <div className="jumbotron">
                    <Header />
                </div>

                <div><strong>Title:</strong> {this.props.image.title}<br /><br />
                    <img src={require(`../Images/${this.props.image.imagename}`)} height="250px;" width="250px;" /><br /><br />
                    <strong>Description:</strong><br /> {this.props.image.description}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    console.log(state.image)
    return {
        image: state.image
    }
}

export default connect(mapStateToProps, { getImageDetails })(ImageDetails);