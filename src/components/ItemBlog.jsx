const ItemBlog = ({ title, category, image }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition">
      <img src={image} alt={title} className="w-full h-44 object-cover" />

      <div className="p-4">
        <p className="text-xs font-medium text-red-500 uppercase mb-2">
          {category}
        </p>
        <h4 className="text-lg font-semibold text-gray-800 leading-snug mb-2 line-clamp-2">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ItemBlog;
