import Image from "next/image";

const Toolbar = () => {
  console.log("dsfdsfdfds");
  return (
    <div className="flex items-center justify-start gap-2 bg-gray-100 pr-2 pl-2 pb-1">
      <div className="flex flex-row gap-1 rounded border border-dotted border-gray-300 bg-opacity-70 p-1">
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Create file"
          width="20"
          height="20"
          alt="Create"
          src="/welcome/add_circle_FILL0_wght400_GRAD0_opsz48.svg"
        />
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/welcome/file_open_black_24dp.svg"
        />
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/save_FILL0_wght400_GRAD0_opsz48.svg"
        />
      </div>
      <div className="flex flex-row gap-1 rounded border border-dotted border-gray-300 bg-opacity-70 p-1">
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/undo_FILL0_wght400_GRAD0_opsz48.svg"
        />
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/redo_FILL0_wght400_GRAD0_opsz48.svg"
        />
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/cut_FILL0_wght400_GRAD0_opsz48.svg"
        />
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/content_copy_FILL0_wght400_GRAD0_opsz48.svg"
        />
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/content_paste_FILL0_wght400_GRAD0_opsz48.svg"
        />
      </div>
      <div className="flex flex-row gap-1 rounded border border-dotted border-gray-300 bg-opacity-70 p-1">
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/build_FILL0_wght400_GRAD0_opsz48.svg"
        />
        <Image
          className=" cursor-pointer rounded stroke-white after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/play_arrow_FILL0_wght400_GRAD0_opsz48.svg"
        />
        <Image
          className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
          title="Open file"
          width="20"
          height="20"
          alt="Create"
          src="/toolbar/stop_FILL0_wght400_GRAD0_opsz48.svg"
        />
      </div>
    </div>
  );
};

export default Toolbar;
