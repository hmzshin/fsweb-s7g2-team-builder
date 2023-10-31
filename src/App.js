import "./App.css";
import { useEffect, useState } from "react";
import Main from "./layout/Main";

const emptyMember = {
  email: "",
  name: "",
  surname: "",
  proffesion: "",
};
const users = [
  {
    name: "Hamza",
    surname: "Şahin",
    email: "hamzasahin01@gmail.com",
    profession: "Front-End Developer",
    picture:
      "https://3.bp.blogspot.com/-kglB8PVWutY/WKLpLseBfbI/AAAAAAAAoWs/b9m2xSMj9TkmdI5K0_1XmBipLJQNWuwAQCLcB/s0/Turk-bayragi-resimleri-2880x1800-12.jpg",
  },
];
function App() {
  const [data, setData] = useState(users);

  const [member, setMember] = useState(emptyMember);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("data submit edildi");
    users.push(member);
    setData(users);
    setMember(emptyMember);
  };
  useEffect(() => {
    console.log(users);
  }, [member]);

  return (
    <>
      <Main
        members={data}
        inputChangeHandler={inputChangeHandler}
        formSubmit={formSubmit}
      />
    </>
  );
}

export default App;
