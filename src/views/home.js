import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import FooterGray from '../components/footer-gray'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PuckPuck: Make Your Services More Immune</title>
        <meta
          property="og:title"
          content="PuckPuck: Make Your Services More Immune"
        />
      </Helmet>
      <Header image_src="/playground_assets/puckpucklabs-logo.png-200h.png"></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">PuckPuck &quot;Experiment&quot;</h1>
            <h1 className="home-text01 headingOne">
              Make Your Services More Immune!
            </h1>
            <span className="home-text02">
              Find more stability issues for less cost by PuckPuck, let your
              services work as expected. 
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <Link to="/coming-soon" className="home-navlink">
                  <PrimaryPinkButton
                    button="Coming Soon"
                    className="home-component1"
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <a
                href="mailto:yincwengo@gmail.com?subject="
                className="home-link"
              >
                <OutlineGrayButton
                  button="Contact us"
                  className="home-component2"
                ></OutlineGrayButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="home-features">
        <a
          href="https://chaos-mesh.org"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link1"
        >
          <FeatureCard
            text="PuckPuck is rooted in Chaos Mesh, providing a more comprehensive and fine-grained fault type and extending its capabilities, and using the same familiar Chaos Mesh user interface."
            title="Components"
            new_prop="Build on Chaos Mesh"
            image_alt="Chaos Mesh"
            image_src="/playground_assets/logo-mini.svg"
            className="home-component3"
          ></FeatureCard>
        </a>
        <FeatureCard
          text="The PuckPuck team draws from deep experience to ensure enterprise-grade Chaos Mesh implementation."
          new_prop="Creators of  Chaos Mesh"
          image_src="/playground_assets/team-200h.png"
        ></FeatureCard>
        <FeatureCard
          text='PuckPuck is designed for Cloud,  supported Multi-cloud, and use cloud infra to be "agentless" and reduce the operations and maintenance cost (weeks to minutes).'
          title="Less Code"
          new_prop="Designed for Cloud"
          image_src="/playground_assets/cloud-service-200h.png"
        ></FeatureCard>
        <FeatureCard
          text="Auto-generated experiment scenarios using AI + ML, In-depth and in-context immunity reports and recommendations."
          title="Fully Responsive"
          new_prop="Auto Scenarios"
          image_src="/playground_assets/settings-200h.png"
        ></FeatureCard>
      </section>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image"
      />
      <div className="home-banner">
        <h1 className="home-text03">
          Powered by Chaos Mesh and the Chaos Mesh Community
        </h1>
        <span className="home-text04">
          <span className="home-text05">
            Chaos Mesh is an open source cloud-native Chaos Engineering
            platform. Using Chaos Mesh, you can conveniently simulate various
            abnormalities that might occur in reality during the development,
            testing, and production environments and find potential problems in
            the system. To lower the threshold for a Chaos Engineering project,
            Chaos Mesh provides you with a visualization operation. You can
            easily design your Chaos scenarios on the Web UI and monitor the
            status of Chaos experiments. Chaos Mesh is a Cloud Native Computing
            Foundation (CNCF) incubating project and is trusted in production by
            leading enterprises around the world.
          </span>
          <br></br>
        </span>
        <a
          href="https://chaos-mesh.org/docs/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link2 button"
        >
          Chaos Mesh Docs
        </a>
      </div>
      <div className="home-container04">
        <div className="home-container05">
          <div className="home-stats">
            <div className="home-stat">
              <h1 className="home-text07">5.2k+</h1>
              <span className="home-text08">GitHub Stars</span>
            </div>
            <div className="home-stat1">
              <h1 className="home-text09">180+</h1>
              <span className="home-text10">Contributors</span>
            </div>
            <div className="home-stat2">
              <h1 className="home-text11">10M+</h1>
              <span className="home-text12">Downloads</span>
            </div>
            <div className="home-stat3">
              <h1 className="home-text13">
                <span>24/7</span>
              </h1>
              <span className="home-text15">Support</span>
            </div>
          </div>
        </div>
      </div>
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image01"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
        <div className="home-container06">
          <div className="home-container07">
            <div className="home-container08">
              <h2 className="home-text16 headingOne">Ecosystem Integrations</h2>
              <p className="home-text17 lead">
                <br></br>
                <span>
                  Leverage PuckPuck in your workflow with the tools your team
                  uses every day! 
                </span>
              </p>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container09">
              <div className="home-container10">
                <div className="home-container11">
                  <img
                    alt="image"
                    src="/playground_assets/prometheus_software_logo-200h.png"
                    className="home-image02"
                  />
                </div>
                <div className="home-container12">
                  <img
                    alt="image"
                    src="/playground_assets/logo-slack.svg"
                    className="home-image03"
                  />
                </div>
                <div className="home-container13">
                  <img
                    alt="image"
                    src="/playground_assets/argo-200h.png"
                    className="home-image04"
                  />
                </div>
              </div>
              <div className="home-container14">
                <div className="home-container15">
                  <img
                    alt="image"
                    src="/playground_assets/grafana-200w.png"
                    className="home-image05"
                  />
                </div>
                <div className="home-container16">
                  <img
                    alt="image"
                    src="/playground_assets/logo-mini.svg"
                    className="home-image06"
                  />
                </div>
                <div className="home-container17">
                  <img
                    alt="image"
                    src="/playground_assets/datadog-200h.png"
                    className="home-image07"
                  />
                </div>
              </div>
              <div className="home-container18">
                <div className="home-container19">
                  <img
                    alt="image"
                    src="/playground_assets/github-200h.png"
                    className="home-image08"
                  />
                </div>
                <div className="home-container20">
                  <img
                    alt="image"
                    src="/playground_assets/jenkins_logo-200w.png"
                    className="home-image09"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-contaier">
        <div className="home-container21">
          <div className="home-container22">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text20">PuckPuck</h2>
          <h3 className="home-text21 headingTwo">
            <span>Find Stability Issues and PoC Verification</span>
            <br></br>
          </h3>
          <span className="home-text24">
            We’re constantly trying to express ourselves and actualize our
            dreams. Don&apos;t stop.
          </span>
        </div>
      </section>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Home
