import React from 'react';
import Layout from '../layouts/index';

const ApplyPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Apply Today!</h1>
                </header>

                <div className="entry-body">
                <p>If you’re interested, we can discuss the following in more detail:
                  <ul>
                      <li>Idea and vision of Utopiia</li>
                      <li>The Utopiia mockup (visual prototype)</li>
                      <li>Our current progress</li>
                      <li>Building a founding team/developing the platform</li>
                  </ul>
                </p>
                <h2>
                  <a href='/'>Apply from the main page</a>
                </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ApplyPage;
