/** @jsxImportSource @emotion/react */
import { css, jsx, useTheme } from "@emotion/react";

const Navitem = ({ children, altText, iconAlt, setIconAlt }) => {
  const themeColors = useTheme();

  const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    height: 48px;
    color: ${themeColors.colors.primary};

    .fig {
      margin-top: 5px;
    }
  `;

  let handleClick = () => {
    setIconAlt(false);
  };

  return (
    <figure onClick={handleClick} css={styles}>
      {children}
      <figcaption className="fig">{iconAlt && altText}</figcaption>
    </figure>
  );
};

export default Navitem;
