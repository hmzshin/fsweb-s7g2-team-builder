import MemberForm from "../components/MemberForm";
import Header from "./Header";
import PageContent from "./PageContent";

const Main = ({ members, inputChangeHandler, formSubmit }) => {
  return (
    <>
      <Header />
      <PageContent members={members} />
      <MemberForm
        inputChangeHandler={inputChangeHandler}
        formSubmit={formSubmit}
      />
    </>
  );
};

export default Main;
