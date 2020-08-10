// import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CreatePost from '../../components/CreatePost'

const Post = () => {
    return (
        <div>
            <Head>
                <title>Create Post | BetterLifesavings</title>
            </Head>
            <div>
              <div className="addpostwrapper">
                <CreatePost />
              </div>
            </div>
        </div>
    )
}

export default Post;

