interface CaseStudyProps {
  image: string;
  title: string;
  category: string;
}

export function CaseStudyCard({ image, title, category }: CaseStudyProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
      <div
        className="aspect-[4/3] bg-cover bg-center w-full transform transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}/>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shadow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-orange-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-white text-xl font-bold pb-2">{title}</h3>
      </div>
    </div>
  );
}
