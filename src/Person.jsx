const Person = ({ id, name, age, image }) => {
  return (
    <article key={id} className="person">
      <img src={image} alt={name} className="img"></img>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
