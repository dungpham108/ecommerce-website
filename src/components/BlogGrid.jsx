import BlogList from "./BlogList";

const BlogGrid = () => {
  return (
    <section className="w-full bg-white pb-20 px-5 lg:px-20">
      <div className="pb-6 flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-gray-900">Latest Blogs</h3>
        <a
          href="/blogs"
          className="text-red-500 hover:text-red-600 text-sm font-medium transition"
        >
          View All
        </a>
      </div>

      <BlogList />
    </section>
  );
};

export default BlogGrid;
