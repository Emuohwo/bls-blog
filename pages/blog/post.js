// import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CreatePost from '../../components/CreatePost';
 import Header from '../../components/Header/Navbar';
 import Footer from '../../components/footer/footerDetails';

const Post = () => {
    return (
        <div>
            <Head>
                <title>Create Post | BetterLifesavings</title>
            </Head>
            <div>
              <Header />
              <div className="addpostwrapper">
                <CreatePost />
              </div>
            </div>
              <Footer />
        </div>
    )
}

export default Post;

