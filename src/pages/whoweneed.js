import React from 'react';
import Layout from '../layouts/index';

const WhoWeNeedPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Who We Need</h1>
                </header>

                <div className="entry-body">
                  <p>Those who specialize in the development of mobile apps and are ambitious enough to be an element within a founding technical team</p>
                </div>
                <header className="entry-header">
                  <h1 className="entry-title">Skills needed</h1>
                </header>
                <div className="entry-body">
                  <p>
                  HTML, CSS, Javascript, React Native, React.js, Python, C++
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default WhoWeNeedPage;
