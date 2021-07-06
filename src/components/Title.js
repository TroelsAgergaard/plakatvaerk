const Title = ({ param, title }) => {
  return <h1 className="heading">{param ? param : title}</h1>;
};

export default Title;
