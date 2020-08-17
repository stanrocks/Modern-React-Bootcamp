import MyLayout from '../layouts/MyLayout';

const Index = () => {
  return (
    <div>
      <h1>Our Index Page!!!</h1>
    </div>
  );
};
Index.getInitialProps = async () => {
  console.log('GET INITIAL PROPS 2');
  return {};
};

Index.Layout = MyLayout;
export default Index;
