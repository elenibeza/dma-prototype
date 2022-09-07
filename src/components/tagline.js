import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
          What We Provide
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          Web Enterprise Business (WEB.mil) provides a government PUBLIC FACING 
          enterprise hosting solution and robust distribution system that meets all 
          Department of Defense standards for information security. This solution is built for the Public Affairs mission in mind to professionally create web sites for public viewing. Customers enjoy the user experience with our content management system: Value, Ease of Use, and Enjoyment to Use. Check out our "Testimonials" page to see what our customers had to say about us!
        </p>
       <p>
       Web Enterprise Business (WEB.mil) provides customer organizations with a website content management system (CMS) and hosting solution referred to as AFPIMS, built with the Public Affairs (PA) mission in mind. The WEB.mil CMS is not meant to be an online publications library or document management system. It may not be feasible for our customers to use the CMS for this purpose.
        </p> 
      </div>
    </div>
  </section>
);

export default Tagline;
