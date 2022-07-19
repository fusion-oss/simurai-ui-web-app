import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { ButtonVariant } from "../Interfaces";
import "./PageNotFound.scss";

export const PageNotFound: React.FC<any> = (): React.ReactElement => {
  const page404 = "404", pageNotFound = "Page Not found";

  return <div className="page-not-found">
    <h1 className="heading">{page404}</h1>
    <h2 className="sub-heading">{pageNotFound}</h2>
    <Link to="/">
      <Button id='Home' onClick={() => { }} variant={ButtonVariant.Secondary}>Go to Home</Button>
    </Link>
  </div>
};


