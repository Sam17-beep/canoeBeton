import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'


interface Member {
  name: string;
  role: string;
  description: string;
  imagePath: string;
}

interface HeaderProps {
  member: Member;
}


const MemberCard: FunctionComponent<PropsWithChildren<HeaderProps>>= ({ member }) => {
  return (
    <div>
      <Image src={member.imagePath} alt={member.name} />
      <p>Name: {member.name}</p>
      <p>Role: {member.role}</p>
      <p>Description: {member.description}</p>
    </div>
  );
};

export default MemberCard;