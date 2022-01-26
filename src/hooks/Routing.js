import { useNavigate } from "react-router";

const Routing = () => {
  const navigate = useNavigate();

  const visitPage = (page) => {
    navigate(`/${page}`);
  };

  return {
    visitPage,
  };
};

export default Routing;
