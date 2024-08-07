import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero7 from '../components/hero7'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Imperfect Merry Mallard</title>
        <meta property="og:title" content="Imperfect Merry Mallard" />
      </Helmet>
      <Hero7
        action1={
          <Fragment>
            <span className="home-text thq-body-small">
              <span>Join Discord</span>
              <br></br>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text3 thq-body-small">
              <span>Get Script</span>
              <br></br>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text6 thq-body-large"></p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text7 thq-heading-1">Eclipsis Hub</h1>
          </Fragment>
        }
      ></Hero7>
    </div>
  )
}

export default Home
