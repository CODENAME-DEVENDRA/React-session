const ArticlePage = async ({ params }) => {
  const { slug } = await params;
  console.log("slug", slug);

  return <div>ArticlePage</div>;
};

export default ArticlePage;
