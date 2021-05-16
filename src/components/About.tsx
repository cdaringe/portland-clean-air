import type { Member } from "../member";
import MemberCard from "./MemberCard";

const members: Member[] = [
  {
    name: "Greg Bourget",
    roles: ["Executive Director", "Lead Researcher"],
    email: "greg@portlandcleanair.org",
  },
  {
    name: "Beven Byrnes",
    roles: ["Spokesperson"],
    email: "byrnes@bridgesms.org",
  },
  {
    name: "Seth Woolley",
    roles: ["Board Chair", "Databases", "Media Contact"],
    email: "seth@portlandcleanair.org",
    phone: "503-953-3943",
    avatar: "http://swoolley.org/files/kramseth2.jpg",
  },
  {
    name: "Don Berg",
    roles: ["Board Member", "Bookkeeper", "Treasurer"],
    address: [
      "PCA c/o Don Berg",
      "3439 SE Hawthorne Blvd #241",
      "Portland, OR 97214",
    ],
  },
  {
    name: "Alexandra Ruhf",
    roles: ["Board Member"],
    email: "sandiyruhf@yahoo.com",
  },
  {
    name: "Tim DuBois",
    roles: ["Board Member"],
  },
];
export default function About() {
  return (
    <>
      <a id="About" />
      {members.map((member) => (
        <MemberCard {...member} />
      ))}
    </>
  );
}
