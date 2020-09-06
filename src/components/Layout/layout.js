import React from 'react';

import Header from '../Header/header.js';
import Footer from '../Footer/footer.js'

import '../../styles/font.css';
import "../../styles/index.css"
import 'normalize.css'

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout;