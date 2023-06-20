import "./Nav.css";

const Navigation = ({ page, setPage }) => {
  
  return (
    <section>
      <ul>
        <li onClick={() => setPage("home")}>
          <a href="/home" onClick={(event) => event.preventDefault()}>
            Home Page
          </a>
        </li>

        <li >
          <a href="#">National Parks</a>
        </li>

        <li onClick={() => setPage("mountains")}>
          <a href="/mountains" onClick={(event) => event.preventDefault()}>Mountains Information</a>
        </li>
      </ul>
    </section>
  );
};
export default Navigation;
