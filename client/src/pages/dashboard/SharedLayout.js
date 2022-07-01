import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">addjob</Link>
        <Link to="all-jobs">alljobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;
