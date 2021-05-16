import { HTMLProps } from "react";
const styles = require("./SquareBox.module.css");

// https://spin.atomicobject.com/2015/07/14/css-responsive-square/
const SquareBox: React.FC<HTMLProps<HTMLDivElement>> = ({
  className = "",
  children,
  ...rest
}) => (
  <div className={`${styles.square} ${className}`} {...rest}>
    <div className={styles.squareContent}>{children}</div>
  </div>
);
export default SquareBox;
