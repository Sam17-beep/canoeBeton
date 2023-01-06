import Image from 'next/image'
import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import MemberCard from '../smallComponents/memberCard';

interface Member {
  name: string;
  role: string;
  description: string;
  imagePath: string;
}



const Team: FunctionComponent<PropsWithChildren> = ({  }) => {

  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/../public/json/team.json');
      console.log('reponse');
      const data = await res.json();
      console.log('data', data);
      setMembers(data);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      <p>ALLO</p>
      {members.map((member) => (
        <span key={member.name}>{member.name} </span>
      ))}
      {members.map((member) => (
        <MemberCard member={member} key={member.name} />
      ))}
    </div>
  );
};

export default Team;