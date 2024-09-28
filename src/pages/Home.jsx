import React, { useEffect, useState } from 'react'
import Layout from './layout/Layout';
import Product from '../components/Product/Product';
import axios from 'axios';

function Home() {
 
  return (
   <Layout>
     <h1>hello</h1>
     <Product/>
   </Layout>
  )
}

export default Home;