import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/layout";
import Curves from "@/partials/shapes/curves/curve-1.svg";
import Waves from "@/partials/shapes/waves/wave-1.svg";

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
                Send Workouts To Your{" "}
                <span className="text-primary">Fitness Clients</span>.
              </h1>
              <p
                className="lead text-muted mb-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Powerful workout builder. Simple client app. Built-in signup
                forms. Integrated subscription billing.
              </p>
              <p
                className="mb-7 mb-md-9"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <a className="btn btn-primary shadow lift" href="#!">
                  Download the Free App
                  <i className="fe fe-arrow-right ml-3" />
                </a>
              </p>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay={100}>
              <div
                className="py-12 py-md-13 bg-cover rounded-lg bg-light shadow-lg"
                style={{
                  backgroundImage: "url(/img/covers/workout_builder_cover.jpg)",
                }}
              >
                <div className="row">
                  <div className="col-12 text-center">
                    {/* Button */}
                    <a
                      className="btn btn-pill btn-white text-body shadow lift"
                      data-bigpicture='{"vimeoSrc": "496499273"}'
                      href="#"
                    >
                      <span className="h6 text-uppercase font-weight-bold">
                        <i className="fe fe-play mr-2" /> See In Action
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            </div>
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
            </div>
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
                <div className="row">
                  <div className="col-6 mr-n5">
                    {/* <img
                      src="/img/photos/carousel-4.jpg"
                      alt="..."
                      className="img-fluid mb-4 rounded"
                      data-aos="fade-right"
                      data-aos-delay={100}
                    /> */}
                    <img
                      src="/img/photos/carousel-2.jpg"
                      alt="..."
                      className="img-fluid rounded"
                      data-aos="fade-right"
                      data-aos-delay={150}
                    />
                  </div>
                  <div className="col-6 mt-8">
                    {/* <img
                      src="/img/photos/carousel-3.jpg"
                      alt="..."
                      className="img-fluid mb-4 rounded"
                      data-aos="fade-right"
                    /> */}
                    <img
                      src="/img/photos/carousel-1.jpg"
                      alt="..."
                      className="img-fluid rounded"
                      data-aos="fade-right"
                      data-aos-delay={50}
                    />
                  </div>
                </div>{" "}
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
            </div>
          </div>
        </section>

        {/* FLEXIBILITY */}
        <section className="pt-8 pt-md-11 bg-gradient-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                {/* Badge */}
                <span className="badge rounded-pill bg-success-soft mb-3">
                  <span className="h6 text-uppercase">Flexibility</span>
                </span>
                {/* Heading */}
                <h1>Built For Your Specialty</h1>
                {/* Text */}
                <p className="font-size-lg text-gray-700 mb-5 mb-md-7">
                  SuperFit works for many fitness spaces. From home-pilates
                  routines to traditional strength regimens, you can build the
                  workout on our app.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-4 my-2" data-aos="fade-up">
                <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                  <img
                    src="/img/photos/photo-4.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body position-relative">
                    {/* Badge */}
                    <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                      <span className="badge rounded-pill bg-success">
                        <span className="h6 text-uppercase">$49/mo</span>
                      </span>
                    </div>
                    {/* Heading */}
                    <h3>Shared Coworking</h3>
                    {/* Text */}
                    <p className="text-muted">
                      Open seating is available weekdays from 7am - 7pm and
                      weekends from 9am - 5pm.
                    </p>
                    {/* Link */}
                    <a
                      href="#!"
                      className="font-weight-bold text-decoration-none"
                    >
                      Tour the space <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-4 my-2"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                {/* Card */}
                <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-5.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves />
                    </div>
                  </div>

                  <div className="card-body position-relative">
                    {/* Badge */}
                    <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                      <span className="badge rounded-pill bg-warning">
                        <span className="h6 text-uppercase">$99/mo</span>
                      </span>
                    </div>
                    {/* Heading */}
                    <h3>Designated Desk</h3>
                    {/* Text */}
                    <p className="text-muted">
                      A personal space to leave your computer, monitor, and
                      supplies with unlimited access.
                    </p>
                    {/* Link */}
                    <a
                      href="#!"
                      className="font-weight-bold text-decoration-none"
                    >
                      Find a desk <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-4 my-2"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Card */}
                <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-6.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body position-relative">
                    {/* Badge */}
                    <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                      <span className="badge rounded-pill bg-success">
                        <span className="h6 text-uppercase">$399/mo</span>
                      </span>
                    </div>
                    {/* Heading */}
                    <h3>Private Offices</h3>
                    {/* Text */}
                    <p className="text-muted">
                      Need a private space? We have all sizes of offices from
                      400² ft. available up to 3100² ft.
                    </p>
                    {/* Link */}
                    <a
                      href="#!"
                      className="font-weight-bold text-decoration-none"
                    >
                      Tour the offices <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 my-2" data-aos="fade-up">
                <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                  <img
                    src="/img/photos/photo-4.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body position-relative">
                    {/* Badge */}
                    <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                      <span className="badge rounded-pill bg-success">
                        <span className="h6 text-uppercase">$49/mo</span>
                      </span>
                    </div>
                    {/* Heading */}
                    <h3>Shared Coworking</h3>
                    {/* Text */}
                    <p className="text-muted">
                      Open seating is available weekdays from 7am - 7pm and
                      weekends from 9am - 5pm.
                    </p>
                    {/* Link */}
                    <a
                      href="#!"
                      className="font-weight-bold text-decoration-none"
                    >
                      Tour the space <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-4 my-2"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                {/* Card */}
                <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-5.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves />
                    </div>
                  </div>

                  <div className="card-body position-relative">
                    {/* Badge */}
                    <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                      <span className="badge rounded-pill bg-warning">
                        <span className="h6 text-uppercase">$99/mo</span>
                      </span>
                    </div>
                    {/* Heading */}
                    <h3>Designated Desk</h3>
                    {/* Text */}
                    <p className="text-muted">
                      A personal space to leave your computer, monitor, and
                      supplies with unlimited access.
                    </p>
                    {/* Link */}
                    <a
                      href="#!"
                      className="font-weight-bold text-decoration-none"
                    >
                      Find a desk <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-4 my-2"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Card */}
                <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-6.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body position-relative">
                    {/* Badge */}
                    <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                      <span className="badge rounded-pill bg-success">
                        <span className="h6 text-uppercase">$399/mo</span>
                      </span>
                    </div>
                    {/* Heading */}
                    <h3>Private Offices</h3>
                    {/* Text */}
                    <p className="text-muted">
                      Need a private space? We have all sizes of offices from
                      400² ft. available up to 3100² ft.
                    </p>
                    {/* Link */}
                    <a
                      href="#!"
                      className="font-weight-bold text-decoration-none"
                    >
                      Tour the offices <i className="fe fe-arrow-right ml-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <h2 className="font-weight-bold">
                  Use your phone number so you're easy to find.
                </h2>
                <p className="font-size-lg text-muted mb-0">
                  Landkit uses your phone number for your account instead of an
                  email or username so you're super easy to find for all your
                  friends.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SHAPE */}
        <div className="position-relative">
          <div className="shape shape-top shape-fluid-x svg-shim text-white">
            <Waves />
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
            </div>
          </div>
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
