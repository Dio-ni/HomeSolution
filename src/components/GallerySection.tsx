
const GallerySection = () => {
  return (
    <section className="py-16 px-6 bg-furniture-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Three rounded images in a row */}
          <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <img
              src="/placeholder.svg"
              alt="Furniture showcase 1"
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <img
              src="/placeholder.svg"
              alt="Furniture showcase 2"
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <img
              src="/placeholder.svg"
              alt="Furniture showcase 3"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Смотреть все
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
