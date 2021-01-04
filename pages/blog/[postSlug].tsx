import AuthorRow from "@/components/author-row";
import Layout from "@/components/layout";
import { getPost, getPosts } from "@/utils/posts";
import { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import Image from "next/image";
require("@/styles/BlogPost.module.css");

function BlogPost(props: { post: PostOrPage }) {
  let featureImageUrl = props.post.feature_image
    ? `url(${props.post.feature_image})`
    : null;

  return (
    <Layout user={null} loading={false}>
      <div>
        {/* IMAGE */}

        {featureImageUrl && (
          <section
            data-jarallax
            data-speed=".8"
            className="py-12 py-md-15 bg-cover jarallax"
            style={{ backgroundImage: featureImageUrl }}
          />
        )}

        {/* HEADER */}
        <section className="pt-8 pt-md-11">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                {/* Heading */}
                {props.post.title && (
                  <h1 className="display-4 text-center">{props.post.title}</h1>
                )}

                {/* Text */}
                <p className="lead mb-7 text-center text-muted">
                  {props.post.excerpt}
                </p>
                {/* Meta */}

                <AuthorRow {...props.post}></AuthorRow>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </section>

        <section className="pt-6 pt-md-8 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                <div
                  className="m-article-content"
                  dangerouslySetInnerHTML={{ __html: props.post.html }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION */}
        <section className="pt-6 pt-md-8 pb-8 pb-md-11">
          <div className="container">
            <AuthorRow {...props.post}></AuthorRow>
          </div>
        </section>
        {/* SHAPE */}
        <div className="position-relative">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
            {"{"}
            {"{"}&gt; curves/curve-1{"}"}
            {"}"}
          </div>
        </div>

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

// This function gets called at build time
export async function getStaticPaths() {
  const posts: PostsOrPages | void = await getPosts();

  if (!posts) {
    return {
      paths: [],
      fallback: true,
    };
  }

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: posts.map((post) => {
      return {
        params: {
          postSlug: post.slug,
        },
      };
    }),
    // paths: [{ params: { postSlug: "1" } }, { params: { id: "2" } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { postSlug } = params;
  if (!postSlug) {
    return {
      props: null,
      revalidate: 1,
    };
  }

  const post: PostOrPage | void = await getPost(postSlug);

  return {
    props: {
      post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

// BlogPost.getInitialProps = async ({ query }) => {
//   const { postSlug } = query;

//   if (!postSlug) {
//     window.location.href = "/404";
//     return;
//   }

//   const post: PostOrPage | void = await getPost(postSlug);
//   return { post: post };
// };

export default BlogPost;
