const ConceptItem = (props) => {
return (
    <li className="concept">
      <img src="TODO: IMAGE" alt="TODO: TITLE" />
      <h2>{props.concepts.title}</h2>
      <p>{props.concepts.description}</p>
    </li>
  );
};

export default ConceptItem;
