import React from 'react';
import circle from 'uswds/img/circle-124.png';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            Freedom to Create
            </h3>
            <p>
            WEB.mil provides customer organizations with the American Forces Public Information Management System
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            CMS Training
            </h3>
            <p>
           Online training is available and required for all of our customers before they are provided access to build or maintain their web site.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            Government Compliance
            </h3>
            <p>
            WEB.mil maintains the infrastructure and robust distribution system that meets all DoD standards for information security of DoD web sites
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={circle} alt="Alt text" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            Performance Tracking
            </h3>
            <p>
            WEB.mil offers the SiteGauge web statistics analysis program as a means for our webhosting customers to analyze statistics for their respective website(s)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
