/** @jsxImportSource @emotion/react */
import { css, jsx, useTheme } from "@emotion/react";

const Navbutton = ({ children }) => {
  const themeColor = useTheme();

  const styles = css`
    padding: 8px 10px;
    background-color: #ffffff;
    border: none;
    border-radius: 15px;
    filter: drop-shadow(0 0 0.75rem #f2eff2);
    color: ${themeColor.colors.primary};
  `;

  return <button css={styles}>{children}</button>;
};

export default Navbutton;
