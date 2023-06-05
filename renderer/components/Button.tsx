import { useEffect, useState } from "react";

import clsxm from "../utils/clsxm";

type Props = {
  invalid: boolean;
  className?: string;
} & any;

const Button = ({ className, invalid, onClick, ...other }: Props) => {
  const [shakeEffect, setShakeEffect] = useState(false);

  const handleClick = (e) => {
    console.log({ onClick });
    if (onClick) {
      onClick(e);
    }

    if (invalid) {
      setShakeEffect(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsxm(
        "float-right rounded bg-white p-2 font-medium transition-all hover:shadow-lg active:outline active:outline-emerald-400",
        shakeEffect && "animate-fast-shake",
        className,
      )}
      {...other}
      onAnimationEnd={() => setShakeEffect(false)}
    />
  );
};

export default Button;
