import MyLayout from '../layouts/MyLayout';

const Post = ({ id }) => {
  return <h1>YOU ARE LOOKING AT POST #{id}</h1>;
};

Post.getInitialProps = async ({ query }) => {
  // console.log(query);
  return query;
};

export default Post;
Post.Layout = MyLayout;
