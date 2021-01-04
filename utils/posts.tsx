import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://leokwan.ghost.io",
  key: "d21e2b259960f1bc9d7c07e8ff",
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPost(slug: string) {
  return await api.posts
    .read(
      {
        slug: slug,
      },
      {
        include: ["authors"],
      }
    )
    .catch((err) => {
      console.error(err);
    });
}
