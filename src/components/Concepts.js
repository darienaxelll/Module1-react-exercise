import ConceptItems from "./ConceptItems";
import "./Concepts.css";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      <ConceptItems conceptItems={props.concepts[0]} />
      <ConceptItems conceptItems={props.concepts[1]} />
      <ConceptItems conceptItems={props.concepts[2]} />
    </ul>
  );
};

export default Concepts;
