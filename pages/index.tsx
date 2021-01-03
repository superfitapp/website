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
              {/* Headin */}
              <h1
                className="display-1 font-weight-bold"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                Send Workouts To{" "}
                <span className="text-primary">Personal Training Clients.</span>
              </h1>

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
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay={200}>
              {/* Video */}
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  className="embed-responsive-item rounded-lg bg-light shadow-lg"
                  src="/video/workout_builder.m4v"
                  autoPlay
                  loop
                  muted
                >
                  Sorry, your browser doesn't support embedded videos, but don't
                  worry, you can{" "}
                  <a href="https://vimeo.com/496499273">watch it</a>
                  with your favorite video player!
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
                  Introducing Paid Memberships. Powered by Stripe.
                </h2>
                {/* Text */}
                <div className="lead text-muted-80 mb-0">
                  Convert a workout schedule on SuperFit into a recurring (or
                  lifetime) membership with the flip of a switch.
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
                    <h3 className="text-white">Sign up for SuperFit</h3>
                    {/* Text */}
                    <p className="text-muted-80 mb-6 mb-md-0">
                      Creating paid memberships is a premium add-on. Why? Some
                      trainers prefer managing payments on their own.
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
                    <h3 className="text-white">Onboarding Call</h3>
                    {/* Text */}
                    <p className="text-muted-80 mb-6 mb-md-0">
                      We start with a friendly 20-min call to help set you up
                      with Stripe. Afterwards, we'll walk you through connecting
                      SuperFit and Stripe in the app.
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
                    <h3 className="text-white">Start Charging 💸</h3>
                    {/* Text */}
                    <p className="text-muted-80 mb-0">
                      Once complete, you can start charging a monthly
                      subscription or a lifetime membership for access to your
                      workouts!
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

      <div>
        {/* ABOUT */}
        <section className="pt-8 pt-md-11">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6 mb-5 mb-md-0">
                {/* Images */}
                <div className="row">
                  <div className="col-6 mr-n5">
                    <img
                      src="/img/photos/photo-23.jpg"
                      alt="..."
                      className="img-fluid mb-4 rounded"
                      data-aos="fade-right"
                      data-aos-delay={100}
                    />
                    <img
                      src="/img/photos/photo-25.jpg"
                      alt="..."
                      className="img-fluid rounded"
                      data-aos="fade-right"
                      data-aos-delay={150}
                    />
                  </div>
                  <div className="col-6 mt-8">
                    <img
                      src="/img/photos/photo-22.jpg"
                      alt="..."
                      className="img-fluid mb-4 rounded"
                      data-aos="fade-right"
                    />
                    <img
                      src="/img/photos/photo-24.jpg"
                      alt="..."
                      className="img-fluid rounded"
                      data-aos="fade-right"
                      data-aos-delay={50}
                    />
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
              <div className="col-12 col-md-6 col-lg-5" data-aos="fade-left">
                {/* Heading */}
                <h2 className="font-weight-bold">
                  Build workouts at the speed of thought.
                </h2>
                {/* Text */}
                <p className="font-size-lg text-muted mb-4">
                  Staying connected while traveling can be tough, but Landkit
                  makes it easy by automatically sharing your experiences.
                </p>
                {/* Button */}
                <a
                  className="btn btn-pill btn-primary shadow lift"
                  data-bigpicture='{"vimeoSrc": "496493129" }'
                  href="#"
                >
                  <span className="h6 text-uppercase font-weight-bold">
                    <i className="fe fe-play mr-2" /> See How
                  </span>
                </a>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
        {/* ABOUT */}
        <section className="py-8 py-md-11">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6 col-lg-7 order-md-2">
                {/* Image */}
                <img
                  src="/img/screenshots/ui/mobile-chat.png"
                  alt="..."
                  className="img-fluid mb-6 mb-md-8 mb-md-0"
                  data-aos="fade-left"
                />
              </div>
              <div
                className="col-12 col-md-6 col-lg-5 order-md-1"
                data-aos="fade-right"
              >
                {/* Heading */}
                <h2 className="font-weight-bold">
                  Use your phone number so you're easy to find.
                </h2>
                {/* Text */}
                <p className="font-size-lg text-muted mb-0">
                  Landkit uses your phone number for your account instead of an
                  email or username so you're super easy to find for all your
                  friends.
                </p>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
        {/* SHAPE */}
        <div className="position-relative">
          <div className="shape shape-top shape-fluid-x svg-shim text-white">
            {"{"}
            {"{"}&gt; waves/wave-1{"}"}
            {"}"}
          </div>
        </div>
        {/* VIDEO */}
        <section
          className="py-12 py-md-13 bg-cover"
          style={{ backgroundImage: "url(/img/covers/bottom_wide_hero.jpg)" }}
        >
          <div className="container py-md-13">
            <div className="row">
              <div className="col-12 text-center">
                {/* Button */}
                <a
                  className="btn btn-pill btn-white text-body shadow lift"
                  data-bigpicture='{"vimeoSrc": "399182178"}'
                  href="#"
                >
                  <span className="h6 text-uppercase font-weight-bold">
                    <i className="fe fe-play mr-2" /> Watch video
                  </span>
                </a>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
        {/* CTA */}
        <section className="pt-6 pt-md-8">
          <div className="container pb-6 pb-md-8 border-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md">
                {/* Heading */}
                <h3 className="font-weight-bold mb-1">
                  Download the free app!
                </h3>
                {/* Text */}
                <p className="text-muted mb-6 mb-md-0">
                  The fitness platform where workouts are built.
                </p>
              </div>
              <div className="col-auto">
                <a href="#!" className="text-reset d-inline-block mr-1">
                  <img
                    src="/img/buttons/button-app.png"
                    className="img-fluid"
                    alt="..."
                    style={{ maxWidth: "155px" }}
                  />
                </a>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
      </div>
    </Layout>
  );
}
