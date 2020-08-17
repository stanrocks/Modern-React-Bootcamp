import axios from 'axios';
import Link from 'next/link';
import MyLayout from '../layouts/MyLayout';

const Index = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>Our Index Page!!!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
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
