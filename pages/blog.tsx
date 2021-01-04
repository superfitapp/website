import Layout from "@/components/layout";
import Curves from "@/partials/shapes/curves/curve-1.svg";
import Curves3 from "@/partials/shapes/curves/curve-3.svg";
import Curves4 from "@/partials/shapes/curves/curve-4.svg";
import Curves5 from "@/partials/shapes/curves/curve-5.svg";
import { getPosts } from "@/utils/posts";
import { PostsOrPages } from "@tryghost/content-api";
import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";

function Blog(props: { posts: PostsOrPages }) {
  return (
    <Layout user={null} loading={false}>
      <section
        data-jarallax
        data-speed=".8"
        className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
        style={{ backgroundImage: "url(/img/covers/cover-13.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              {/* Heading */}
              <h1 className="display-2 font-weight-bold text-white">
                SuperFit Blog
              </h1>
              {/* Text */}
              <p className="lead mb-0 text-white-75">
                Keep up to date with what we're working on! Landkit is an ever
                evolving theme with regular updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPE */}
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
          <Curves />
        </div>
      </div>

      {/* SEARCH */}
      <section hidden className="mt-n6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Form */}
              <form className="rounded shadow mb-4">
                <div className="input-group input-group-lg">
                  {/* Text */}
                  <span className="input-group-text border-0 pr-1">
                    <i className="fe fe-search" />
                  </span>
                  {/* Input */}
                  <input
                    className="form-control border-0 px-1"
                    type="text"
                    aria-label="Search our blog..."
                    placeholder="Search our blog..."
                  />
                  {/* Text */}
                  <span className="input-group-text border-0 py-0 pl-1 pr-3">
                    <a
                      className="btn btn-sm btn-primary"
                      href="blog-search.html"
                    >
                      Search
                    </a>
                  </span>
                </div>
              </form>
              {/* Badges */}
              <div className="row align-items-center">
                <div className="col-auto">
                  {/* Heading */}
                  <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                    Tags:
                  </h6>
                </div>
                <div className="col ml-n5">
                  {/* Badges */}
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="blog-search.html"
                  >
                    <span className="h6 text-uppercase">Design</span>
                  </a>
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="blog-search.html"
                  >
                    <span className="h6 text-uppercase">Product</span>
                  </a>
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="blog-search.html"
                  >
                    <span className="h6 text-uppercase">UX</span>
                  </a>
                  <a
                    className="badge rounded-pill bg-secondary-soft"
                    href="blog-search.html"
                  >
                    <span className="h6 text-uppercase">Resources</span>
                  </a>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section hidden className="pt-7 pt-md-10">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Card */}
              <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
                <div className="row gx-0">
                  <div className="col-12">
                    {/* Badge */}
                    <span className="badge rounded-pill bg-light badge-float badge-float-inside">
                      <span className="h6 text-uppercase">Featured</span>
                    </span>
                  </div>
                  <a
                    className="col-12 col-md-6 order-md-2 bg-cover card-img-right"
                    style={{
                      backgroundImage: "url(/img/photos/photo-27.jpg)",
                    }}
                    href="#!"
                  >
                    {/* Image (placeholder) */}
                    <img
                      src="/img/photos/photo-27.jpg"
                      alt="..."
                      className="img-fluid d-md-none invisible"
                    />
                    {/* Shape */}
                    <div className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block">
                      <Curves5 />
                    </div>
                  </a>
                  <div className="col-12 col-md-6 order-md-1">
                    {/* Body */}
                    <a className="card-body" href="#!">
                      {/* Heading */}
                      <h3>Travel Can Keep You Creatively Inspired.</h3>
                      {/* Text */}
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis nec condimentum quam. Fusce pellentesque faucibus
                        lorem at viverra. Integer at feugiat odio. In placerat
                        euismod risus proin erat purus.
                      </p>
                    </a>
                    {/* Meta */}
                    <a className="card-meta" href="#!">
                      {/* Divider */}
                      <hr className="card-meta-divider" />
                      {/* Avatar */}
                      <div className="avatar avatar-sm mr-2">
                        <img
                          src="/img/avatars/avatar-1.jpg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Author */}
                      <h6 className="text-uppercase text-muted mr-2 mb-0">
                        Ab Hadley
                      </h6>
                      {/* Date */}
                      <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                        <time dateTime="2019-05-02">May 02</time>
                      </p>
                    </a>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="pt-7 pt-md-10">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md">
              {/* Heading */}
              <h3 className="mb-0">Latest Stories</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Here’s what we've been up to recently.
              </p>
            </div>
            <div className="col-12 col-md-auto">
              {/* Button */}
              <a
                href="#!"
                className="btn btn-sm btn-outline-gray-300 d-none d-md-inline"
              >
                View all
              </a>
            </div>
          </div>
          <div className="row">
            {props.posts.map((post) => (
              <div
                key={post.id}
                className="col-12 col-md-6 col-lg-4 d-flex my-2"
              >
                {/* Card */}
                <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
                  {/* Image */}

                  <Link
                    href={`/blog/${encodeURIComponent(post.slug)}`}
                    passHref
                  >
                    <a className="card-img-top">
                      {/* Image */}
                      <Image
                        src={post.feature_image}
                        alt="..."
                        className="card-img-top"
                        height="250"
                        width="450"
                        layout="responsive"
                        objectFit="cover"
                      />
                      {/* Shape */}
                      <div className="position-relative">
                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                          <Curves3 />
                        </div>
                      </div>
                    </a>
                  </Link>

                  {/* Body */}
                  <Link
                    href={`/blog/${encodeURIComponent(post.slug)}`}
                    passHref
                  >
                    <a className="card-body">
                      {/* Heading */}
                      <h3>{post.title.substring(0, 60) + "..."}</h3>
                      {/* Text */}
                      <p className="mb-0 text-muted">
                        {post.excerpt?.substring(0, 90) + "..."}
                      </p>
                    </a>
                  </Link>

                  {/* Meta */}
                  <Link
                    href={`/blog/${encodeURIComponent(post.slug)}`}
                    passHref
                  >
                    <a className="card-meta mt-auto">
                      {/* Divider */}
                      <hr className="card-meta-divider" />
                      {/* Avatar */}

                      {post.authors && post.authors[0] && (
                        <div className="avatar avatar-sm mr-2">
                          <Image
                            src={post.authors[0].profile_image}
                            alt="..."
                            className="avatar-img rounded-circle"
                            height="100"
                            width="100"
                          />
                        </div>
                      )}

                      {/* Author */}
                      {post.authors && post.authors[0] && (
                        <h6 className="text-uppercase text-muted mr-2 mb-0">
                          {post.authors[0].name}
                        </h6>
                      )}

                      {/* Date */}
                      <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                        <time dateTime="2019-05-02">
                          {formatDistance(
                            new Date(post.published_at),
                            new Date()
                          )}
                        </time>
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section hidden className="pt-7 pt-md-10">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h3 className="mb-0">Popular Stories</h3>
              {/* Text */}
              <p className="mb-5 text-muted">
                Here’s what’s big in the past week!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 d-flex">
              {/* Card */}
              <div className="card mb-6 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  <img
                    src="/img/photos/photo-28.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves3 />
                    </div>
                  </div>
                </a>

                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Greece Is Having A Tech Renaissance.</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam. Fusce pellentesque faucibus lorem
                    at viverra. Integer at feugiat odio. In placerat euismod
                    risus proin erat purus.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta mt-auto" href="#!">
                  {/* Divider */}
                  <hr className="card-meta-divider" />
                  {/* Avatar */}
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="/img/avatars/avatar-1.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  {/* Author */}
                  <h6 className="text-uppercase text-muted mr-2 mb-0">
                    Ab Hadley
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex">
              {/* Card */}
              <div className="card mb-6 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-29.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves3 />
                    </div>
                  </div>
                </a>
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Is Failing Actually Bad for Business?</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam. Fusce pellentesque faucibus lorem
                    at viverra. Integer at feugiat odio. In placerat euismod
                    risus proin erat purus.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta mt-auto" href="#!">
                  {/* Divider */}
                  <hr className="card-meta-divider" />
                  {/* Avatar */}
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="/img/avatars/avatar-2.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  {/* Author */}
                  <h6 className="text-uppercase text-muted mr-2 mb-0">
                    Adolfo Hess
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-6.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves3 />
                    </div>
                  </div>
                </a>
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Landkit is Moving to an Office In Austin, TX</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta mt-auto" href="#!">
                  {/* Divider */}
                  <hr className="card-meta-divider" />
                  {/* Avatar */}
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="/img/avatars/avatar-1.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  {/* Author */}
                  <h6 className="text-uppercase text-muted mr-2 mb-0">
                    Ab Hadley
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-4.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves3 />
                    </div>
                  </div>
                </a>
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Are Hot Desks Great for Digital Nomads?</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta mt-auto" href="#!">
                  {/* Divider */}
                  <hr className="card-meta-divider" />
                  {/* Avatar */}
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="/img/avatars/avatar-2.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  {/* Author */}
                  <h6 className="text-uppercase text-muted mr-2 mb-0">
                    Adolfo Hess
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card mb-6 mb-md-0 shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-5.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves3 />
                    </div>
                  </div>
                </a>
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Coffee Can Keep You Going, But At What Cost?</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta mt-auto" href="#!">
                  {/* Divider */}
                  <hr className="card-meta-divider" />
                  {/* Avatar */}
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="/img/avatars/avatar-1.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  {/* Author */}
                  <h6 className="text-uppercase text-muted mr-2 mb-0">
                    Ab Hadley
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* Card */}
              <div className="card d-lg-none shadow-light-lg lift lift-lg">
                {/* Image */}
                <a className="card-img-top" href="#!">
                  {/* Image */}
                  <img
                    src="/img/photos/photo-27.jpg"
                    alt="..."
                    className="card-img-top"
                  />
                  {/* Shape */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <Curves3 />
                    </div>
                  </div>
                </a>
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Travel Can Keep You Creatively Inspired.</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta mt-auto" href="#!">
                  {/* Divider */}
                  <hr className="card-meta-divider" />
                  {/* Avatar */}
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="/img/avatars/avatar-1.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  {/* Author */}
                  <h6 className="text-uppercase text-muted mr-2 mb-0">
                    Ab Hadley
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MORE */}
      <section className="py-7 py-md-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-8 col-xl-7">
              {/* Button */}
              <a
                href="#!"
                className="btn btn-block btn-outline-gray-300 d-flex align-items-center"
              >
                <span className="mx-auto">Load more</span>{" "}
                <i className="fe fe-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SHAPE */}
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
          <Curves />
        </div>
      </div>
      {/* CTA */}
      <section className="pt-6 pt-md-8 bg-gray-200">
        <div className="container pb-6 pb-md-8 border-bottom border-gray-300">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              {/* Heading */}
              <h3 className="mb-1 font-weight-bold">
                Get our stories delivered
              </h3>
              {/* Text */}
              <p className="font-size-lg text-muted mb-6 mb-md-0">
                From us to your inbox weekly.
              </p>
            </div>
            <div className="col-12 col-md-5">
              {/* Form */}
              <form>
                <div className="row">
                  <div className="col">
                    {/* Input */}
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto ml-n5">
                    {/* Button */}
                    <button className="btn btn-primary" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 *
 * https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 */

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const posts: PostsOrPages | void = await getPosts();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default Blog;
