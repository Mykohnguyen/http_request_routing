import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state={
        postClicked : null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.postClicked || this.props.id !== this.state.postClicked.id){
                axios.get('/posts/' + this.props.id)
                    .then(response =>{
                        console.log("fullpost updated")
                        this.setState({
                            postClicked : response.data
                        })
                    })
            }
        }
    }
    deletePost = () =>{
        axios.delete('/posts/' + this.props.id)
            .then(
                response =>{
                    console.log(response)
                }
            )
    }
    render () {
        if(this.state.postClicked){
            return(
                <div className="FullPost">
                <h1>{this.state.postClicked.title}</h1>
                <p>{this.state.postClicked.body}</p>
                <div className="Edit">
                    <button onClick={this.deletePost} className="Delete">Delete</button>
                </div>
            </div>
            )
        }
        let post = <p> Please select a Post!</p>
        return post
    }
}

export default FullPost;