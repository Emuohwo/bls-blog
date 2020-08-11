import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fire from '../config/fire-conf';

import Footer from '../components/footer/index';
import Navbar from '../components/Header/Navbar';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, [])
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>

      <Navbar />

      <section>
        <h1>BetterLifesavings News </h1>
        <main>
          <div className="homeContent">
            <article className="container mainContent">
              {
              blogs.map(blog => <header className="articlebody card" key={blog.id}>
                
                <Link href="/blog/[id]" as={'/blog/' + blog.id}>
                  <h4><a>{blog.title}</a>   &#8594; </h4>
                </Link>
              
              </header>
              )}
            </article>
          </div>
        </main>
      </section>
      <Link href="/blog/post">
        <a>Create Post</a>
      </Link>
      <Footer />
      <style jsx>
        {`
        a {
          cursor: pointer;
        }
        h1 {
          text-align: center;
        }
        .container {
          padding: 1rem 5%;
        }
        
        .homeContent {
          display: flex;
          flex-wrap: wrap;
          margin-top: 3rem;
          justify-content: space-around;
        }
        .mainContent {
            display: flex;
            flex-wrap: wrap;
            width: 70%;
            justify-content: space-around;
            padding: 1.2rem;
        }
        .articlebody {
          color: green;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          width: 48%;
          height: auto;
          margin: 0.4rem auto;
          padding: 1% 4%;
          transition: background-color 0.15s ease, color 0.15s ease;
        }
        .articlebody:hover {
          background-color: green;
          color: #fff;
        }
        @media screen and (max-width: 600px) {
          .mainContent {
            display: block;
            width: 100%;
            margin: 0;
          }
          .mainContent,
          header {
            display: block;
            width: 90%;
          }
          .articlebody {
            width: 100%;
            margin: 0.4rem auto;
            padding: 0.2rem 5%;
          }
          .articlebody:nth-child {
            background-color: grey;
          }
        }
        `}
      </style>
    </div>
  )
}

export default Home;
