<<<<<<< HEAD
import clsx from 'clsx'
=======
import clsx from "clsx";
>>>>>>> f09b540c52de4f2762f436f7d00eb412c3fb0c5a

interface ButtonProps {
  handleClick?: () => void;
  type?: "submit" | "reset" | "button";
  children?: any;
  customStyle?: string;
  id?: string;
}

export const ButtonComponent = (props: ButtonProps) => {
  const { children, handleClick, customStyle, type, id } = props;
  return (
    <button
      className={clsx(["p-2 m-1 hover:shadow-lg", customStyle])}
      onClick={handleClick}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
};
