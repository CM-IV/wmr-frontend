import { Wrapper } from "../components/wrapper";
import { Footer } from "../components/footer";

const LoginLayout = (props: any) => {
  return (
    <Wrapper>
      {props.children}
      <Footer />
    </Wrapper>
  );
};

export { LoginLayout };
