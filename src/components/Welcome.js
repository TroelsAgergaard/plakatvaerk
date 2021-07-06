/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import bg from "../assets/Freja.jpg";

const styles = css`
  background-image: url("${bg}");
  background-position-x: 40%;
  background-size: cover;
  border-radius: 15px;
  flex-grow: 1;
  width: 100%;
`;

const Welcome = () => {
  return (
    <>
      {/* <img src={bg}></img> */}
      <section css={styles}></section>
    </>
  );
};

export default Welcome;
