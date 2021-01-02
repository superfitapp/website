import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout user={null} loading={false}>
      {/* WELCOME */}
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-md-between">
            <div className="col-10 col-sm-8 col-md-6 order-md-2">
              {/* iPhone + iPhone */}
              <div className="device-combo device-combo-iphonex-iphonex mb-6 mb-md-0">
                {/* iPhone */}
                <div className="device device-iphonex" data-aos="fade-left">
                  <img
                    src="/img/screenshots/mobile/home.jpg"
                    className="device-screen"
                    alt="..."
                  />
                  <img
                    src="/img/devices/iphonex.svg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                {/* iPhone */}
                <div
                  className="device device-iphonex"
                  data-aos="fade-left"
                  data-aos-delay={150}
                >
                  <img
                    src="/img/screenshots/mobile/rental.jpg"
                    className="device-screen"
                    alt="..."
                  />
                  <img
                    src="/img/devices/iphonex.svg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right">
              {/* Heading */}
              <h1 className="font-weight-bold">
                Chat with <span className="text-primary">friends.</span> <br />
                Anywhere in the world.
              </h1>
              {/* Text */}
              <p className="font-size-lg text-muted mb-6">
                Keep in touch with your friends and family with free
                international chats, calls, and even games. Landkit connects you
                with the world.
              </p>
              {/* Form */}
              <form className="mb-6 mb-md-8 mb-md-0 order-md-1">
                <div className="row gx-4">
                  <div className="col">
                    {/* Inout */}
                    <input
                      type="url"
                      className="form-control bg-light border-0"
                    />
                  </div>
                  <div className="col-auto">
                    {/* Submit */}
                    <button type="submit" className="btn btn-primary">
                      Text link
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>
    </Layout>
  );
}
