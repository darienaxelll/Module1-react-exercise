import "./Concepts.css";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      <ConceptItem concepts={props.concepts[0]}/>
    </ul>
  );
};

export default Concepts;
