import React from 'react';
import Navbar from '../components/Navbar';

export default function MyLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
