import React, { Component } from 'react';
import { Route, NavLink,Switch} from 'react-router-dom'
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost'
import Posts from '../Posts/Posts'
import './Blog.css';

class Blog extends Component {
    state = {
        posts:[],
        currentpost:null,
        error:false
    }
    changePost=(id)=>{
        this.setState({
            currentpost:id
        })
    }
    render () {
        return (
            <div>
                <header className="Header">
                    <ul>
                        <li><NavLink 
                                to="/"
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'purple',
                                    font:'serif'
                                }}>Home</NavLink></li>
                        <li><NavLink to="/new-post">New Post</NavLink></li>
                    </ul>
                </header>
                <section>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/:id" exact render = {props => <FullPost {...props} number={props.match.params.id}/> } />
                    {/* <Route path="/posts/" render={testing}/> */}
                </Switch>
                </section>
            </div>
        );
    }
}

export default Blog;