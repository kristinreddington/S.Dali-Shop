import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://api.tumblr.com/v2/blog/violentdelights1971.tumblr.com/posts/photo?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1534134287&oauth_nonce=vB3KXh&oauth_version=1.0&oauth_signature=l3UOWPW1GXHI616cQ6enosymB8k=&api_key=fZ6DymUqbEteBsS6GGvexSWDuE8AtLgPSOjjYWxx6OHwJU1Ww8')
    .then(res => res.json())
    .then(posts => this.setState({ posts }))
  }


  render() {
    console.log(this.state.posts)
    return (
      <div>
      
      </div>
    )
  }
}
export default Blog;
