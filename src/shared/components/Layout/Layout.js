import React, { useEffect } from 'react';
import { useGlobalStore } from './../../utils/StoreApi';

import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  const { pageincrement } = useGlobalStore();
  useEffect(() => {
    pageincrement(1);
  }, []);

  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
