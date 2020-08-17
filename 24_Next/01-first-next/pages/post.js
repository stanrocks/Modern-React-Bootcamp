// import { withRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '../layouts/MyLayout';

// option 1:
const Post = ({ id, comments }) => {
  return (
    <div>
      <h1>Comments for Post #{id}</h1>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id}></Comment>
      ))}
    </div>
  );
};

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);
// option 2:
// const Post = withRouter((props) => {
//   return <h1>YOU ARE LOOKING AT POST #{props.router.query.id}</h1>;
// });

Post.getInitialProps = async ({ query }) => {
  // console.log(query);
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  console.log(data[0]);
  return { ...query, comments: data };
};

export default Post;
Post.Layout = MyLayout;
