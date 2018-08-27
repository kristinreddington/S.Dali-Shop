import $ from 'jquery'

// ** Async Actions ** //

const setPosts = posts => {

  return {
    type: 'GET_POSTS_SUCCESS',
    posts
  }
}

export const getPosts = () => {
  return (dispatch) => {
    $.ajax({
      url:"https://api.tumblr.com/v2/blog/kristinreddington.tumblr.com/posts/photo?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1534134287&oauth_nonce=vB3KXh&oauth_version=1.0&oauth_signature=l3UOWPW1GXHI616cQ6enosymB8k=&api_key=fZ6DymUqbEteBsS6GGvexSWDuE8AtLgPSOjjYWxx6OHwJU1Ww8",
      type: "GET",
      context: this,
      success: function(result) {
        let posts = result.response.posts;
        dispatch(setPosts(posts));

      }
    })
  }
}


// return fetch("https://api.tumblr.com/v2/blog/violentdelights1971.tumblr.com/posts/photo?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1534134287&oauth_nonce=vB3KXh&oauth_version=1.0&oauth_signature=l3UOWPW1GXHI616cQ6enosymB8k=&api_key=fZ6DymUqbEteBsS6GGvexSWDuE8AtLgPSOjjYWxx6OHwJU1Ww8")
//   .then(res => res.json())
//   .then(posts => dispatch(setPosts(posts)))
//   .catch(error => console.log(error))
