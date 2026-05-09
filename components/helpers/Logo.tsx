import { CodeSquareIcon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="bg-green-500 w-10 h-10 rounded-lg flex items-center justify-center flex-col">
        <CodeSquareIcon className="text-white w-6 h-6" />
      </div>
      <h1 className="sm:text-xl hidden sm:block md:text-2xl text-green-600 dark:text-green-400 font-bold">
        {"<JiB/>"}
      </h1>
    </Link>
  );
};

export default Logo;
