import React from 'react';

const Test = () => (
    <div className="homeContent">
      <div className="mainContent">
        <h3 className="articlebody">
            <article></article>
        </h3>
        <h3 className="articlebody">
            <article></article>
        </h3>
        <h3 className="articlebody">
            <article></article>
        </h3>
        <h3 className="articlebody">
            <article></article>
        </h3>
      </div>
      <div className="asideContent">
        <h4>Other articles</h4>
      </div>
      <style jsx>
          {`
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
              background: red;
              justify-content: space-around;
              padding: 1.2rem;
          }
          .articlebody {
            border: 1px solid #eaeaea;
            border-radius: 10px;
            width: 45%;
            height: auto;
            // transition: color 0.15s ease, border-color 0.15s ease;
            height: 200px;
          }
          .asideContent {
              width: 25%;
              background: gold;
              // height: auto;
              align-items: flex-start;
          }
          `}
      </style>
    </div>
);

export default Test;
