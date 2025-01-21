import { Link as LinkRouter } from "react-router";
import { useCursor } from "./cursor";

interface Props {
  to: string;
  children?: React.ReactNode;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
}

export const Link = ({
  to,
  children,
  className,
  onMouseOver,
  onMouseOut,
  target,
}: Props) => {
  const { linkEnter, leave } = useCursor();

  return (
    <LinkRouter
      to={to}
      onMouseEnter={linkEnter}
      onMouseLeave={leave}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={className}
      target={target}
    >
      {children}
    </LinkRouter>
  );
};
