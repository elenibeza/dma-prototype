import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">News:</span>DOD Releases First Departmentwide Social Media Policy 
        </h2>
        <p>
        The Defense Department released a policy about how DOD should use official social media 
        accounts to best advance the mission of 
        the U.S. military and further instill trust in the credibility of the DOD 
        </p>
        <a className="usa-button" href="https://www.web.dma.mil/News/Article/3131081/dod-releases-first-departmentwide-social-media-policy/">
          Read More
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
