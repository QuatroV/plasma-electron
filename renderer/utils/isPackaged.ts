//** Not SSR-friendly! */
const isPackaged = () => {
  return (
    window.process.argv
      .find((el) => el.startsWith("--packaged"))
      .replace("--packaged=", "") === "true"
  );
};

export default isPackaged;
