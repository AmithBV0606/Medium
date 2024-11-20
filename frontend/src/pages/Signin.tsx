import CreateAccount from "../components/CreateAccount";
import Quotes from "../components/Quotes";

function Signin() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <CreateAccount type="signin" />
      </div>

      <div className="hidden lg:block">
        <Quotes />
      </div>
    </div>
  );
}

export default Signin;