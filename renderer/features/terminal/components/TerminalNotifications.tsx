import { BsCheck2 } from "react-icons/bs";

const TerminalNotifications = () => {
  return (
    <div className="ml-auto mr-5 mb-2 flex w-min animate-slow-appear items-center gap-1 rounded border border-emerald-300 bg-emerald-100 px-2 py-1 text-sm">
      <BsCheck2 size={20} /> Success
    </div>
  );
};

export default TerminalNotifications;
