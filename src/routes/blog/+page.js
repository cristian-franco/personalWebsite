// This file loads all your blog posts and makes them available to the page
export async function load() {
  // Get all markdown files from the posts directory
  const postFiles = import.meta.glob('/src/posts/*.md');

  const posts = await Promise.all(
    Object.entries(postFiles).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      // Extract slug from filename
      const slug = path.split('/').pop().replace('.md', '');

      return {
        slug,
        ...metadata
      };
    })
  );

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    posts
  };
}
