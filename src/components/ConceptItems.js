const ConceptItems = (props) => {
  return (
    <li className="concept">
      <img src={props.conceptItems.image} alt="TODO: TITLE" />
      <h2>{props.conceptItems.title}</h2>
      <p>{props.conceptItems.description}</p>
    </li>
  );
};

export default ConceptItems;
