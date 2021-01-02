import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout user={null} loading={false}>
      {/* WELCOME */}
      <section className="py-8 py-md-11 border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Preheader */}
              <h6 className="text-uppercase text-primary" data-aos="fade-up">
                Mobile Fitness Platform
              </h6>
              {/* Headin */}
              <h1
                className="display-1 font-weight-bold"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                Send Workouts To{" "}
                <span className="text-primary">Personal Training Clients.</span>
              </h1>
              {/* Text */}
              <p
                className="lead text-muted mb-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Powerful workout builder. Simple client experience. Built-in
                signup forms. Seamless subscription features.
              </p>
              {/* Button */}
              <p
                className="mb-7 mb-md-9"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <a className="btn btn-primary shadow lift" href="#!">
                  Open an account <i className="fe fe-arrow-right ml-3" />
                </a>
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay={200}>
              {/* Video */}
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  className="embed-responsive-item rounded-lg bg-light shadow-lg"
                  src="/video/intro_superfit_trailer.mp4"
                  autoPlay
                  loop
                  muted
                >
                  Sorry, your browser doesn't support embedded videos, but don't
                  worry, you can{" "}
                  <a href="/video/intro_superfit_trailer.mp4">download it</a>
                  and watch it with your favorite video player!
                </video>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>

      <div>
        {/* STEPS */}
        <div className="position-relative mt-n12 mt-md-n15">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-black">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0h720v250H0V125h720z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* STEPS */}
        <div className="section bg-black pt-12 pt-md-15 pb-8 pb-md-11">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-5">
              <div className="col-12 col-md-4 order-md-2 text-center">
                {/* Image */}
                <img
                  className="img-fluid w-75 w-md-100 mb-6 mb-md-0"
                  src="/img/illustrations/illustration-1-dark.png"
                  alt="..."
                />
              </div>
              <div className="col-12 col-md-7 order-md-1">
                {/* Heading */}
                <h2 className="text-white" style={{ maxWidth: "450px" }}>
                  We start with your needs and deliver a full banking solution.
                </h2>
                {/* Text */}
                <div className="lead text-muted-80 mb-0">
                  Once you provide us with your company’s basic information, we
                  handle the remainder of the process without questions.
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-auto col-md-12">
                    {/* Step */}
                    <div className="row gx-0 align-items-center mb-md-5">
                      <div className="col-auto">
                        {/* Number */}
                        <a
                          className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                          href="#!"
                        >
                          <span>1</span>
                        </a>
                      </div>
                      <div className="col">
                        {/* Divider */}
                        <hr className="d-none d-md-block bg-gray-900-50 mr-n7" />
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="col col-md-12 ml-n5 ml-md-0">
                    {/* Heading */}
                    <h3 className="text-white">Fill out your intro survey</h3>
                    {/* Text */}
                    <p className="text-muted-80 mb-6 mb-md-0">
                      We start with a short 3-step online survey to help us
                      determine the best banking solution for your specific
                      startup.
                    </p>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-auto col-md-12">
                    {/* Step */}
                    <div className="row gx-0 align-items-center mb-md-5">
                      <div className="col-auto">
                        {/* Number */}
                        <a
                          href="#!"
                          className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                        >
                          <span>2</span>
                        </a>
                      </div>
                      <div className="col">
                        {/* Divider */}
                        <hr className="d-none d-md-block bg-gray-900-50 mr-n7" />
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="col col-md-12 ml-n5 ml-md-0">
                    {/* Heading */}
                    <h3 className="text-white">We build a banking stack.</h3>
                    {/* Text */}
                    <p className="text-muted-80 mb-6 mb-md-0">
                      From your information, we generate a banking stack well
                      suited to your company’s personalized needs.
                    </p>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-auto col-md-12">
                    {/* Step */}
                    <div className="row gx-0 align-items-center mb-md-5">
                      <div className="col-auto">
                        {/* Number */}
                        <a
                          href="#!"
                          className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                        >
                          <span>3</span>
                        </a>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="col col-md-12 ml-n5 ml-md-0">
                    {/* Heading */}
                    <h3 className="text-white">Registration and filings</h3>
                    {/* Text */}
                    <p className="text-muted-80 mb-0">
                      We handle the creation of your actual account including
                      registering with the financial and government agencies.
                    </p>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container*/}
        </div>
        {/* STEPS */}
        <div className="position-relative">
          <div className="shape shape-top shape-fluid-x shape-flip-x svg-shim text-black">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h2880v125h-720L720 250H0V0z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  );
}
