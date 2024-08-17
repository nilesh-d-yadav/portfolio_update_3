function ProjectCard(props) {
  return (
    <>
      <a href={props.link} target="_blank">
        <img className="hover" src={props.img} alt={`${props.h3} logo`} />
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </a>
    </>
  );
}

export default ProjectCard;
