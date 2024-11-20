import CreateAccount from "../components/CreateAccount";
import Quotes from "../components/Quotes";

function Signup() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <CreateAccount type="signup" />
      </div>

      <div className="hidden lg:block">
        <Quotes />
      </div>
    </div>
  );
}

export default Signup;