//babel compiler = JSX -> JS
//JSX - JAVASCRIPT AND XML

function JsxBasics() {
  const fname = "John Doe";
  const year = 2026;
  const isActive = false;
  const skills = ["React", "Node", "Angular", "MongoDb"];
  const styles = { width: 100, height: 150, background: "red", margin: 10 };
  const welcomeUser = (guest) => `Hi ${guest}`;

  return (
    <div>
      <h1>Name : {fname}</h1>

      <p>
        Joined in {year}, retired in {year + 30}
      </p>

      <p>Status : {isActive ? "Active" : "Not Active"}</p>
      <p>Status : {isActive && `welcome ${fname}`}</p>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {/* For display purpose */}
      <div>{JSON.stringify(styles)}</div>

      <div style={styles}></div>

      <div>{welcomeUser("John")}</div>
    </div>
  );
}
export default JsxBasics;
