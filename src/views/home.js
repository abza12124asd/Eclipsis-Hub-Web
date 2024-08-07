import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero7 from '../components/hero7'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Eclipsis Hub</title>
        <meta property="og:title" content="Eclipsis Hub" />
      </Helmet>
      <Hero7
        action1={
          <Fragment>
            <span className="home-text thq-body-small">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noreferrer noopener"
              >
                Join Discord
              </a>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text2 thq-body-small">
              <a
                href="https://github.com/abza12124asd/EclipsisHub"
                target="_blank"
                rel="noreferrer noopener"
              >
                Get Script
              </a>
              <a
                href="https://github.com/abza12124asd/EclipsisHub"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text4 thq-body-large"></p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text5 thq-heading-1">Eclipsis Hub</h1>
          </Fragment>
        }
        rootClassName="hero7-root-class-name"
      ></Hero7>
    </div>
  )
}

export default Home
