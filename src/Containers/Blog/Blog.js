import React, { Component } from 'react';

import Post from '../../Components/Post/Post';
import FullPost from '../../Components/FullPost/FullPost';
import NewPost from '../../Components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios'
import axiosInstance from '../../instance'

class Blog extends Component {
    state = {
        posts:[],
        currentpost:null,
        error:false
    }
    componentDidMount(){
        axiosInstance.get("/posts")
            .then( response =>{
                const  temp = response.data.splice(0,4)
                const updatedTemp = temp.map(i=>{
                    return{
                        ...i,
                        author:"Michael"
                    }
                })
                this.setState({
                    posts: updatedTemp
                })
            })
            .catch(error =>{
                console.log(error)
                this.setState({error:true})
            })
    }
    componentDidUpdate(){
        console.log(['blog compoennt: updated'])
    }
    changePost=(id)=>{
        this.setState({
            currentpost:id
        })
    }
    render () {
        let posts = <p style={{color:'red'}}> Something went wrong</p>
        if(this.state.error === false){
            posts = this.state.posts.map(x=>{
                return(
                <Post
                    key={x.id}
                    title={x.title}
                    author={x.author}
                    click={()=>{this.changePost(x.id)}}/>
                )
            })
        }
        
        let testing = <FullPost/>;
        if(this.state.currentpost){
            testing = 
                <FullPost
                    id={this.state.currentpost}/>;
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    {testing}
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;