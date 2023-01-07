import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import MemberCard from '../smallComponents/MemberCard';
import styles from 'styles/ui/bigComponents/Team.module.css';

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
      const res = await fetch('/api/team');
      const data = await res.json();
      setMembers(data);
    }
    fetchData();
  }, []);
  
  return (
    <div className={styles.page}>
      <div className={styles.team_container}>
        {members.map(member => (
          <MemberCard member={member} key={member.name}/>
        ))}
      </div>
    </div>
  );
};

export default Team;