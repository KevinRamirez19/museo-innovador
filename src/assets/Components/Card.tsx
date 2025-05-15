type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
