import $ from "jquery";

// ** Async Actions ** //

const setPosts = (posts) => {
  return {
    type: "GET_POSTS_SUCCESS",
    posts,
  };
};

let posts = [];
let postsTwo = [];
export const getPosts = () => {
  return (dispatch) => {
    let limit = 50; // set this to any value you want up to 50.
    const retrieveMore = function (offset) {
      const OAUTH_API_KEY = import.meta.env.OAUTH_API_KEY
      $.ajax({
        url: `https://api.tumblr.com/v2/blog/somewhatadrift.tumblr.com/posts/photo?offset=${offset}&limit=${limit}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1534134287&oauth_nonce=vB3KXh&oauth_version=1.0&oauth_signature=l3UOWPW1GXHI616cQ6enosymB8k=&api_key=${OAUTH_API_KEY}`,
        type: "GET",
        context: this,
        success: function (result) {
          console.log(result);
          const totalPosts = result.response.total_posts;
          const postLength = result.response.posts.length;
          const filteredPosts = result.response.posts.filter(
            (post) => post.type === "photo"
          );
          filteredPosts.forEach((post) => postsTwo.push(post));
          if (offset < totalPosts) {
            offset += 51;
            console.log(offset);
            return retrieveMore(offset);
          } else {
            posts = postsTwo;
            dispatch(setPosts(posts));
          }
        },
      });
    };
    retrieveMore(0);
  };
};
