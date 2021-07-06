/** @jsxImportSource @emotion/react */
import { css, jsx, useTheme } from "@emotion/react";

const Navbutton = ({ color, children }) => {
  const themeColor = useTheme();

  const styles = css`
    padding: 8px 10px;
    background-color: #ffffff;
    border: none;
    border-radius: 15px;
    filter: drop-shadow(0 0.5rem 0.75rem #f2eff2);
    color: ${color};
  `;

  return <button css={styles}>{children}</button>;
};

export default Navbutton;
