import Link from 'next/link';
const Index = () => {
  console.log('RUNNING INDEX COMPONENT');
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <h1>Our Index Page!!!</h1>
    </div>
  );
};
export default Index;
