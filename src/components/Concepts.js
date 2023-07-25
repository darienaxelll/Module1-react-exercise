import "./Concepts.css";

const Concepts = (props) => {
  const componentImage = props.concepts[0].image;
  const componentTitle = props.concepts[0].title;
  const componentDescription = props.concepts[0].description;

  return (
    <ul id="concepts">
      <li className="concept">
        <img src={componentImage} alt="TODO: TITLE" />
        <h2>{componentTitle}</h2>
        <p>{componentDescription}</p>
      </li>
    </ul>
  );
};

export default Concepts;
