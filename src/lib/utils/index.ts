export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.{md,svx}');
    const iterablePostFiles = Object.entries(allPostFiles);
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const postPath = path
          .replace('/src/routes/', '') 
          .replace(/\.(md|svx)$/, ''); 
          
        return {
          meta: metadata,
          path: postPath,
        };
      })
    );
  
    return allPosts;
  };
  