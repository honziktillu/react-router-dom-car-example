import { Link } from "react-router-dom";

function MainPage() {
    return (
      <>
        <h1>Main page</h1>
        <Link to={`car/1`}>
            <p>Car 1</p>
        </Link>
        <Link to={`car/2`}>
            <p>Car 2</p>
        </Link>
        <Link to={`something`}>
            <p>Something</p>
        </Link>
      </>
    );
  }
  
  export default MainPage;
  