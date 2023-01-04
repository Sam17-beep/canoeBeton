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
      const data = await res.json();
      setMembers(data);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      <p>ALLO</p>
      {members.map((member) => (
        <MemberCard member={member} key={member.name} />
      ))}
    </div>
  );
};

export default Team;