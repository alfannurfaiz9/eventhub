import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Toast = () => {
  return (
    <article className="flex items-center gap-2 text-xs fixed bottom-6 right-6 z-20 bg-white/60 backdrop-blur-md border-l-2 border-b-2 shadow-lg p-2 rounded-lg text-blue">
      <AiOutlineLoading3Quarters className="text-xl animate-spin" />
      <div>
        <p className="font-semibold">Loading</p>
        <p>Applying changes please wait</p>
      </div>
    </article>
  );
};

export default Toast;
