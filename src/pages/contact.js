import React from 'react';
import Layout from '../layouts/index';

const ContactPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Contact Us</h1>
                </header>

                <div className="entry-body">
                  <p> If you or anyone you know would like to be a part of this journey, please contact me!

                      How healthy can the world be?
                          <br></br>

                                <a href="tel:4436862271">443-686-2271 (Cornell Brown)</a>
                                <br></br>
                                <a href="mailto:utopiiaapp@gmail.com">utopiiaapp@gmail.com (Utopiia Team)</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;
