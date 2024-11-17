export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.{md,svx}');
    const iterablePostFiles = Object.entries(allPostFiles);
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        // Normalize path to slug
        const postPath = path
          .replace('/src/routes/', '') // Remove directory
          .replace(/\.(md|svx)$/, ''); // Remove extension
          
        return {
          meta: metadata,
          path: postPath, // Use this in links
        };
      })
    );
  
    return allPosts;
  };
  