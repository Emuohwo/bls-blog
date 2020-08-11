import React, { useState } from 'react';
import ReactMde from "react-mde";
import * as Showdown from "showdown";



import fire from '../config/fire-conf';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const CreatePost = () => {
    const [ title, setTitle ] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [selectedTab, setSelectedTab] = useState("write" | "preview">("write"));

    const [notification, setNotification] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            "title": title,
            "content": content,
        });

        fire.firestore()
         .collection('blog')
         .add({
            title: title,
            content: content,
            author: author,
            date: new Date().toISOString(),
         });

        setTitle('');
        setContent('');

        setNotification(
            <div className="successMessage">
                <h4>Success</h4>
                <p>Blog was published successfully</p>
            </div>
        );

        setTimeout(() => {
            setNotification('')
        }, 5000)
    }
    return (
        <div>
            
            <div className="FormWrapper">
                <h2>Add Blog</h2>
            
            

                {notification}
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input 
                        type="text"
                        placeholder="Blog Title"
                        className="form-control title-input"
                        autoFocus
                        required
                        value={title}
                        onChange={({target}) => setTitle(target.value === '' ? false : target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <input 
                        type="text"
                        placeholder="Author's Name"
                        className="form-control title-input"
                        value={author}
                        onChange={({target}) => setAuthor(target.value)}
                        />
                    </div>
                    <div className="container">
                        <ReactMde
                            value={content}
                            onChange={setContent}
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                            generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                    </div>
                    <button type="submit" className="btn" >Save Post</button>
                <p><b>Note:</b> Kindly preview your write up before saving it</p>
                </form>
                <style jsx>
                    {`
                    /* Post Page */
                    .addpostwrapper{
                      max-width: 45rem;
                      margin: 1rem auto;
                    }
                    
                    
                    
                    /* Create Post Page */
                    .successMessage{
                      color: #fff;
                      background-color: green;
                      text-align: center;
                      width: 20rem;
                      position: absolute;
                      top: 10%;
                      right: 0;
                    }
                    
                    .FormWrapper {
                      width:  100%;
                      margin:  1rem auto;
                      padding: 1rem;
                    }
                    
                    .btn {
                      border: none;
                      color: #fff;
                      background-color: green;
                      padding: 0.7rem 1.5rem;
                      margin-top: 1rem;
                      cursor: pointer;
                    }
                    
                    .input-container {
                      margin: 1rem 0;
                    }
                    
                    .form-control {
                      width: 100%;
                      border-radius: 5px;
                      padding: 0.7rem;
                    }
                    
                    .title-input {
                      font-size: large;
                    }
                    .content {
                      min-height: 18rem;
                      font-size: medium;
                    }
                    `}
                </style>
            </div>
        </div>
    )
}

export default CreatePost;
