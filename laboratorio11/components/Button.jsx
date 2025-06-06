import { PlusIcon } from "@heroicons/react/24/solid";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
    >
      <PlusIcon className="h-5 w-5" />
      {children}
    </button>
  );
}
