import axios from 'axios';
import MyLayout from '../layouts/MyLayout';

const Index = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>Our Index Page!!!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
Index.getInitialProps = async () => {
  // https://jsonplaceholder.typicode.com/posts
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  // console.log(data[0]);
  return { posts: data };
};

Index.Layout = MyLayout;
export default Index;
