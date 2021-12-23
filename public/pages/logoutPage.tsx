import { LoginLayout } from "../layouts/loginLayout";
import { Logout } from "../components/logout";

const LogoutPage = () => {
  return (
    <LoginLayout>
      <Logout />
    </LoginLayout>
  );
};

export { LogoutPage };
