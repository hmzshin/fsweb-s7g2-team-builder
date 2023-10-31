import MemberCard from "../components/MemberCard";

const PageContent = ({ members }) => {
  return (
    <div className="pageContent">
      {members.map((mmbr, index) => (
        <MemberCard key={index} member={mmbr} />
      ))}
    </div>
  );
};

export default PageContent;
