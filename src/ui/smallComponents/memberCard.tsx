import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from 'styles/ui/smallComponents/MemberCard.module.css'

interface Member {
  name: string;
  role: string;
  description: string;
  imagePath: string;
}

interface HeaderProps {
  member: Member;
}


const MemberCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ member }) => {
  return (
    <div className={styles.card}>
      <Image src={"/../public/Team/"+member.imagePath} alt={member.name} width={300} height={300} />
      <span className={styles.name}>{member.name}</span>
      <span className={styles.role}>{member.role}</span>
      <span className={styles.description}>{member.description}</span>
    </div>
  );
};

export default MemberCard;