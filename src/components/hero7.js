import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero7.css'

const Hero7 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero7-max-width thq-section-max-width">
        <div className="hero7-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero7-text7 thq-heading-1">
                  Catchy and engaging hero headline here
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero7-text5 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </Fragment>
            )}
          </p>
          <div className="hero7-actions">
            <div className="hero7-container">
              <button className="thq-button-filled hero7-button">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero7-text4 thq-body-small">
                        Main action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="hero7-container1">
              <button className="thq-button-outline hero7-button1">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero7-text6 thq-body-small">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero7.defaultProps = {
  action1: undefined,
  content1: undefined,
  action2: undefined,
  heading1: undefined,
  rootClassName: '',
}

Hero7.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Hero7
