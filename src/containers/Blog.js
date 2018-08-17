import React, { Component } from 'react';
import $ from 'jquery'
import { getPosts } from '../actions/postActions'
import { connect } from 'react-redux';
import './Blog.css'

class Blog extends Component {

  componentDidMount() {
    this.props.getPosts()
  }


  render() {
    return (
      <div>
      {this.props.posts.map(post =>
        <p> <img className="rounded mx-auto d-block" src={post.photos[0].alt_sizes[0].url} /> </p>
      )}
      </div>
    )
  }
 }



const mapStateToProps = (state) => {
  return ({
    posts: state.posts
  })
}
export default connect(mapStateToProps, { getPosts })(Blog);
