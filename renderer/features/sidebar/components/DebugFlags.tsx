const DebugFlags = () => {
  return (
    <div>
      <div className=" px-2 py-1 text-sm font-bold">Registers</div>
      <div
        className={`mx-2 flex flex-col gap-2 rounded border border-gray-300 bg-gray-100 p-2 transition-all`}
      >
        <div>
          <div className="grid grid-cols-9 rounded border border-gray-300 text-sm">
            <div className="flex items-center justify-center rounded-tl bg-gray-200">
              CF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              PF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              AF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              ZF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              SF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              TF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              IF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              DF
            </div>
            <div className="flex items-center justify-center rounded-tr bg-gray-200">
              OF
            </div>
            <div className="flex items-center justify-center rounded-bl border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center rounded-br border-t border-gray-400 bg-gray-200">
              1
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-9 rounded border border-gray-300 text-sm">
            <div className="flex items-center justify-center rounded-tl bg-gray-200">
              CF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              PF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              AF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              ZF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              SF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              TF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              IF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              DF
            </div>
            <div className="flex items-center justify-center rounded-tr bg-gray-200">
              OF
            </div>
            <div className="flex items-center justify-center rounded-bl border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center rounded-br border-t border-gray-400 bg-gray-200">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugFlags;
