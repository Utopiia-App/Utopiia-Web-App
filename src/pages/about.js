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
                  <h3 className="entry-title">About Utopiia and Our Mission</h3>
                </header>

                <div className="entry-body">
                  <p>
We’ve been working on Utopiia since early 2018 and have spoken to many industry leaders/professionals. We now feel as if we need to facilitate our concept at its highest level.
Utopiia’s mission is to improve the progression of world health. This means benefiting the well-being of humanity and the planet we live on. We wish to create new norms through our creativity with technology in the attempt to create a better, healthier future, and ultimately push society closer to a utopia.
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
