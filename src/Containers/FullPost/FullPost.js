import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state={
        postClicked : null
    }
    componentDidMount(){
        console.log("FULL POST",this.props.number)
        if(this.props.number){
            if(!this.state.postClicked || this.props.id !== this.state.postClicked.id){
                axios.get('/posts/' + this.props.number)
                    .then(response =>{
                        console.log(response,"response full")
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
        else{ 
            return <p> Please select a Post!</p>
        }
    }
}

export default FullPost;