import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

type Props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ReviewCard = ({ user }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl m-3 p-8 relative border border-green-500/10 hover:border-green-500/30 transition-all duration-300 group">
      {/* Quote Icon - */}
      <FaQuoteRight className="w-10 h-10 absolute top-6 right-6 text-green-500 opacity-10 group-hover:opacity-20 transition-opacity" />

      {/* Review Text */}
      <p className="text-muted-foreground italic leading-relaxed mb-6 relative z-10">
        "{user.review}"
      </p>

      {/* Star Rating Section */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className="w-4 h-4 text-yellow-500 dark:text-yellow-400"
          />
        ))}
      </div>

      {/* User Info Section */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/20">
          <Image
            src={user.userImage}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-foreground group-hover:text-green-600 transition-colors">
            {user.name}
          </h4>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {user.profession}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
