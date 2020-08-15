// import Navbar from '../components/Navbar';
import MyLayout from '../layouts/MyLayout';

const Index = () => {
  console.log('RUNNING INDEX COMPONENT');
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Our Index Page!!!</h1>
    </div>
  );
};
export default Index;
Index.Layout = MyLayout;
