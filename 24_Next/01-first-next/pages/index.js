import MyLayout from '../layouts/MyLayout';

const Index = () => {
  console.log('RUNNING INDEX COMPONENT');
  return (
    <div>
      <h1>Our Index Page!!!</h1>
    </div>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  console.log('FETCHING YOUR DATA INSIDE GETSTATICPROPS');

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time

  return {
    props: {},
  };
}

export default Index;
Index.Layout = MyLayout;
