import clsxm from "../../../utils/clsxm";
import useDebugStore from "../stores/debugStore";

const FLAGS_FIRST_ROW = ["CF", "PF", "AF", "ZF", "SF", "TF", "IF", "DF", "OF"];

const DebugFlags = () => {
  const flags = useDebugStore((state) => state.flags);

  console.log({ flags });
  return (
    <div>
      <div className=" px-2 py-1 text-sm font-bold">Flags</div>
      <div
        className={`mx-2 flex flex-col gap-2 rounded border border-gray-300 bg-gray-100 p-2 transition-all`}
      >
        <div>
          <div className="grid grid-cols-9 rounded border border-gray-300 text-sm">
            {FLAGS_FIRST_ROW.map((flag, idx) => (
              <div
                className={clsxm(
                  idx === 0 ? "rounded-tl" : "",
                  idx === 8 ? "rounded-tr" : "",
                  idx % 2 === 0 ? "bg-gray-300" : "bg-gray-200",
                  "flex items-center justify-center ",
                )}
              >
                {flag}
              </div>
            ))}
            {FLAGS_FIRST_ROW.map((flag, idx) => {
              const flagValue = flags.find((f) => f === flag);
              return (
                <div
                  className={clsxm(
                    idx === 0 ? "rounded-bl" : "",
                    idx === 8 ? "rounded-br" : "",
                    idx % 2 === 0 ? "bg-gray-300" : "bg-gray-200",
                    "flex items-center justify-center border-t border-gray-400 ",
                  )}
                >
                  {flagValue ? "1" : "0"}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugFlags;
