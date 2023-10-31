import { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";

const emptyMember = {
  email: "",
  name: "",
  surname: "",
  proffesion: "",
};
const arr = [];

const MemberForm = ({ inputChangeHandler, formSubmit }) => {
  return (
    <form className="form-row" onSubmit={formSubmit}>
      <div className="form-group col-md-6">
        <label htmlFor="input">İsim: </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="input"
          placeholder="İsminizi yazın..."
          onChange={inputChangeHandler}
          name="name"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="soyad">Soyisim: </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="soyad"
          placeholder="Soyisminizi yazın..."
          onChange={inputChangeHandler}
          name="surname"
        />
      </div>
      <div className="form-group ">
        <label htmlFor="name">Email: </label>
        <input
          type="email"
          className="form-control-plaintext"
          id="name"
          placeholder="Email adresinizi yazın..."
          onChange={inputChangeHandler}
          name="email"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="meslek">Meslek: </label>
        <select id="meslek" onChange={inputChangeHandler} name="profession">
          <option value={"frontenddeveloper"}>Front-End Developer</option>
          <option value={"backenddeveloper"}>Back-End Developer</option>
          <option value={"computerengineer"}>Computer Engineer</option>
          <option value={"civilengineer"}>Civil Engineer</option>
        </select>
      </div>
      <button type="submit">Kaydol</button>
    </form>
  );
};

export default MemberForm;
