import React, { Component } from 'react';
import { addImage } from '../redux/action/um_action';
import { connect } from 'react-redux';
import Header from './header';
import { CameraFeed } from './takePhoto';
import '../App.css'

class PostImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            imagename: "",
            description: ""
        };
    }


    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleImageNameChange = (e) => {
        this.setState({
            imagename: e.target.value
        })
    }
    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addImage(this.state.title, this.state.imagename, this.state.description)
        this.setState({ title: '', imagename: '', description: '', message: 'Image Successfully Posted' })

    }
    render() {
        return (

            <div className="container">
                <div className="jumbotron">
                    <Header />
                </div>
                <div class="row">
                    <div className="col-sm-4">
                        <form class="list-group" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                    Title:
                        </div>
                                <div className="col-sm-1">
                                    <input type="text" onChange={this.handleTitleChange} value={this.state.title}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-sm-6">
                                    Saved Photo Name:
                        </div>
                                <div className="col-sm-1">
                                    <input type="text" onChange={this.handleImageNameChange} value={this.state.imagename}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-sm-6">
                                    Description:</div>
                                <div className="col-sm-1"><input type="text" onChange={this.handleDescriptionChange} value={this.state.description}></input>
                                </div>
                            </div ><br />
                            <p><input type="submit" value="Add Image"></input></p>
                            <p><label id="lblMessage">{this.state.message}</label></p>
                        </form >
                    </div>
                    <div className="App col-sm-8">
                        <h3>Take Your Photo</h3>
                        <p>Capture image from USB webcamera and save in below path <br />
                            <strong>"MyHealth\MyHealthFrontEnd\myhealth\src\Images" </strong></p>
                        <CameraFeed sendFile={uploadImage} />
                    </div>
                </div>
            </div>
        );
    }
}

const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);
    // Connect to a seaweedfs instance
};

const mapStateToProps = (state) => {
    console.log(state.images)
    return {
        images: state.images
    }
}

export default connect(mapStateToProps, { addImage })(PostImage);