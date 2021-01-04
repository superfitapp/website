import Layout from "@/components/layout";
import { getPost } from "@/utils/posts";
import { PostOrPage } from "@tryghost/content-api";

function BlogPost(props: { post: PostOrPage }) {
  // const { user, loading } = useFetchUser({ required: true });

  // if (!scheduleId) {
  //   window.location.href = "/";
  //   return;
  // }

  // const { data: scheduleData } = useSWR(`/api/schedule/${scheduleId}`, fetcher);

  return (
    <Layout user={null} loading={false}>
      <div>
        {/* IMAGE */}
        <section
          data-jarallax
          data-speed=".8"
          className="py-12 py-md-15 bg-cover jarallax"
          style={{ backgroundImage: "url(/img/covers/cover-8.jpg)" }}
        />
        {/* HEADER */}
        <section className="pt-8 pt-md-11">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                {/* Heading */}
                <h1 className="display-4 text-center">
                  Remote Work is the Future, but Should You Go Remote?
                </h1>
                {/* Text */}
                <p className="lead mb-7 text-center text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec condimentum quam. Fusce pellentesque faucibus lorem at
                  viverra. Integer at feugiat odio. In placerat euismod risus
                  proin.
                </p>
                {/* Meta */}
                <div className="row align-items-center py-5 border-top border-bottom">
                  <div className="col-auto">
                    {/* Avatar */}
                    <div className="avatar avatar-lg">
                      <img
                        src="/img/avatars/avatar-1.jpg"
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col ml-n5">
                    {/* Name */}
                    <h6 className="text-uppercase mb-0">Ab Hadley</h6>
                    {/* Date */}
                    <time
                      className="font-size-sm text-muted"
                      dateTime="2019-05-20"
                    >
                      Published on May 20, 2019
                    </time>
                  </div>
                  <div className="col-auto">
                    {/* Share */}
                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                      Share:
                    </span>
                    {/* Icons */}
                    <ul className="d-inline list-unstyled list-inline list-social">
                      <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                          <img
                            src="/img/icons/social/instagram.svg"
                            className="list-social-icon"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                          <img
                            src="/img/icons/social/facebook.svg"
                            className="list-social-icon"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                          <img
                            src="/img/icons/social/twitter.svg"
                            className="list-social-icon"
                            alt="..."
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>

        <section className="pt-6 pt-md-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION */}
        <section className="pt-6 pt-md-8 pb-8 pb-md-11">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                {/* Text */}
                <p className="mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                  quod a illum, cumque recusandae quae ea tempore, fugit,
                  expedita vero natus aliquam nulla accusamus! Commodi culpa
                  quibusdam accusamus aspernatur eveniet.
                </p>
                {/* Meta */}
                <div className="row align-items-center py-5 border-top border-bottom">
                  <div className="col-auto">
                    {/* Avatar */}
                    <div className="avatar avatar-lg">
                      <img
                        src="/img/avatars/avatar-1.jpg"
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col ml-n5">
                    {/* Name */}
                    <h6 className="text-uppercase mb-0">Ab Hadley</h6>
                    {/* Date */}
                    <time
                      className="font-size-sm text-muted"
                      dateTime="2019-05-20"
                    >
                      Published on May 20, 2019
                    </time>
                  </div>
                  <div className="col-auto">
                    {/* Share */}
                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                      Share:
                    </span>
                    {/* Icons */}
                    <ul className="d-inline list-unstyled list-inline list-social">
                      <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                          <img
                            src="/img/icons/social/instagram.svg"
                            className="list-social-icon"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                          <img
                            src="/img/icons/social/facebook.svg"
                            className="list-social-icon"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li className="list-inline-item list-social-item mr-3">
                        <a href="#!" className="text-decoration-none">
                          <img
                            src="/img/icons/social/twitter.svg"
                            className="list-social-icon"
                            alt="..."
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
        {/* SHAPE */}
        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
            {"{"}
            {"{"}&gt; curves/curve-1{"}"}
            {"}"}
          </div>
        </div>
        {/* ARTICLES */}
        <section className="pt-7 pt-md-10 bg-light">
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
            </div>{" "}
            {/* / .row */}
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 d-flex">
                {/* Card */}
                <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
                  {/* Image */}
                  <a className="card-img-top" href="#!">
                    {/* Image */}
                    <img
                      src="/img/photos/photo-15.jpg"
                      alt="..."
                      className="card-img-top"
                    />
                    {/* Shape */}
                    <div className="position-relative">
                      <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                        {"{"}
                        {"{"}&gt; curves/curve-3{"}"}
                        {"}"}
                      </div>
                    </div>
                  </a>
                  {/* Body */}
                  <a className="card-body" href="#!">
                    {/* Heading */}
                    <h3>Cafe Coworking Has Become the Norm.</h3>
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
                      src="/img/photos/photo-14.jpg"
                      alt="..."
                      className="card-img-top"
                    />
                    {/* Shape */}
                    <div className="position-relative">
                      <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                        {"{"}
                        {"{"}&gt; curves/curve-3{"}"}
                        {"}"}
                      </div>
                    </div>
                  </a>
                  {/* Body */}
                  <a className="card-body" href="#!">
                    {/* Heading */}
                    <h3>Weekly Roundtable Meetings Saved Us.</h3>
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
                      src="/img/photos/photo-7.jpg"
                      alt="..."
                      className="card-img-top"
                    />
                    {/* Shape */}
                    <div className="position-relative">
                      <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                        {"{"}
                        {"{"}&gt; curves/curve-3{"}"}
                        {"}"}
                      </div>
                    </div>
                  </a>
                  {/* Body */}
                  <a className="card-body" href="#!">
                    {/* Heading */}
                    <h3>Nature Can Save Your Creative Side.</h3>
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
                      src="/img/photos/photo-5.jpg"
                      alt="..."
                      className="card-img-top"
                    />
                    {/* Shape */}
                    <div className="position-relative">
                      <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                        {"{"}
                        {"{"}&gt; curves/curve-3{"}"}
                        {"}"}
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
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>
        {/* CTA */}
        <section className="pt-7 pt-md-10 bg-light">
          <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
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
                  </div>{" "}
                  {/* / .row */}
                </form>
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

BlogPost.getInitialProps = async ({ query }) => {
  const { postSlug } = query;

  if (!postSlug) {
    window.location.href = "/404";
    return;
  }

  const post: PostOrPage | void = await getPost(postSlug);
  return { post: post };
};

export default BlogPost;
