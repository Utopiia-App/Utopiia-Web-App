import React from 'react';
import Layout from '../layouts/index';

const AboutPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">About Utopiia</h1>
                </header>

                <div className="entry-body">
                  <p>
                  ‘Utopiia’, a personalized health networking application with a built-in search engine. The app will automatically facilitate resources (information, news, products, services, events, professionals, organizations, and communities) in any health-related area (sleep, fitness, hygiene, mental health, nutrition, etc.) based on the user’s personal health problems, interests, and needs.

We’ve been working on Utopiia since early 2018 and have spoken to many industry leaders/professionals. We now feel as if we need to facilitate our concept at its highest level.
                </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
