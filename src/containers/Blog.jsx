import React, { Component } from 'react';
import { getPosts } from '../actions/postActions'
import { connect } from 'react-redux';
import './Blog.css'

class Blog extends Component {

  componentDidMount() {
    if (!this.props.posts.length > 0) {
      this.props.getPosts();
    }
    console.log(this.props.posts);
  }


  render() {
    return (
      <div>
      {this.props.posts.map(post =>
        <p> <img key={post.id} className="rounded mx-auto d-block" alt={''} src={post.photos[0].alt_sizes[0].url} /> </p>
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
