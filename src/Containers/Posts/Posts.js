import React, { Component } from 'react'
import axiosInstance from '../../instance'
import Post from '../../Components/Post/Post'
import './Posts.css'
import { Link} from 'react-router-dom'
class Posts extends Component {
    state = {
        posts:[],
        error:false,
        currentpost:null
    }
    componentDidMount(){
        console.log(this.props)
        axiosInstance.get("/posts")
            .then( response =>{
                console.log('RESPONSE:',response)
                const  temp = response.data.splice(0,9)
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
    changePost=(id)=>{
        this.setState({
            currentpost:id
        })
        this.props.history.push('/' + id)
    }
    render(){
        let posts = <p style={{color:'red'}}> Something went wrong</p>
        if(this.state.error === false){
            posts = this.state.posts.map(x=>{
                return(
                <Link to={x.id + ""}
                    key={x.id}>
                <Post
                {...this.props}
                    title={x.title}
                    author={x.author}
                    click={()=>{this.changePost(x.id)}}/>
                </Link>
                )
            })
        }
        return(
            <div className="Posts">
                {posts}
            </div>
        )
    }
}

export default Posts