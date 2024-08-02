import React, { Component } from 'react';
import { getPosts } from '../actions/postActions'
import { connect } from 'react-redux';

class Blog extends Component {

  componentDidMount() {
    if (!this.props.posts.length > 0) {
      this.props.getPosts();
    }
    console.log(this.props.posts);
  }


  render() {
    return (
      <div className='bg-[#FFFAF0] w-full py-4 max-w-[1000px] mx-auto grid lg:grid-cols-3 relative gap-0'>
      {this.props.posts.map(post =>
        <p> <img key={post.id} className="max-w-[75%] items-center mx-3 py-2 shadow-lg shadow-transparent hover:scale-105 duration-300" alt={'tumblr image'} src={post.photos[0].alt_sizes[0].url} /> </p>
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
