import React, { Component } from 'react';
import classnames from 'classnames';
import NetlifyForm from 'react-netlify-form';

class NewsletterForm extends Component {
  state = {
    email: '',
  }

  render() {
    const { className, submit = 'Submit' } = this.props;
    const classNames = classnames(
      'newsletter-form field field-grouped is-revealing',
      className
    )

    return (
      // <form className={classNames} method="POST" data-netlify="true">
      //   <div className="control control-expanded">
      //     <input className="input" type="email" name="email" placeholder="Enter Email ID&hellip;" />
      //   </div>
      //   <div className="control">
      //     <button className="button button-primary button-block button-shadow" type="submit">{submit}</button>
      //   </div>
      // </form>
      <NetlifyForm name='Contact Form'>
      {({ loading, error, success }) => (
        <div className="control control-expanded">
          {loading &&
            <div>Loading...</div>
          }
          {error &&
            <div>Your information was not sent. Please try again later.</div>
          }
          {success &&
            <div>Thank you for contacting us!</div>
          }
          {!loading && !success &&
            <div className="control control-expanded">
                <input className="input" type="email" name="email" placeholder="Enter Email ID&hellip;" />
              
                 <button  className="control" className="button button-primary button-block button-shadow" type="submit">{submit}</button>
               </div>
             
          }
        </div>
      )}
    </NetlifyForm>
    )
  }
}

export default NewsletterForm;
