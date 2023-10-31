const MemberCard = ({ member }) => {
  return (
    <div className="memberCard">
      <img src={member.picture} />
      <h3>{member.name + member.surname}</h3>
      <p>{member.profession}</p>
      <p>{member.email}</p>
    </div>
  );
};

export default MemberCard;
