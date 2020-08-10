import fire from '../../config/fire-conf';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import Head from 'next/head';

import Header from '../../components/Header/Navbar';
import Footer from '../../components/footer/index';

const Blog = (props) => {
  return (
    <>
      <Head>
        {/* {props.title ? <title></title> : null} */}
      </Head>
      <Header />
      <div>
        <div className="mainBlog">
          <h2>{props.title}</h2>
          {props.date ? <span>{props.date}</span> : null}
          {props.author ? <span>Written by: {props.author}</span>: null }
          <Markdown>
            {props.content}
          </Markdown>
          <Link href="/">
            <a> &#8592; Back</a>
          </Link>
          <style jsx>{`
            .mainBlog {
              margin: 50px auto;
              max-width: 50rem;

            }
            p {
              background-color: black;
              color: green;
            }
            a {
              color: blue;
            }
          `}</style>
        </div>

      </div>
      <>
        <Footer />
      </>
    </>
  )
}
export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().title;
      content['author'] = result.data().author;
      content['content'] = result.data().content;
      content['date'] = result.data().date;
    });
return {
    props: {
      title: content.title,
      content: content.content,
      date: content.date,
    }
  }
}
export default Blog
