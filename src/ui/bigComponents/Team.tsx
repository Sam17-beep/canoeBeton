import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import MemberCard from '../smallComponents/MemberCard';

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
      const res = await fetch('/api/fetch?name=team');
      const data = await res.json();
      setMembers(data);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      {members.map(member => (
        <MemberCard member={member} key={member.name}/>
      ))}
    </div>
  );
};

export default Team;