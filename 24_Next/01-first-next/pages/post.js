import { withRouter } from 'next/router';
import MyLayout from '../layouts/MyLayout';

// option 1:
// const Post = ({ id }) => {
//   return <h1>YOU ARE LOOKING AT POST #{id}</h1>;
// };

// option 2:
const Post = withRouter((props) => {
  return <h1>YOU ARE LOOKING AT POST #{props.router.query.id}</h1>;
});

Post.getInitialProps = async ({ query }) => {
  // console.log(query);
  return query;
};

export default Post;
Post.Layout = MyLayout;
