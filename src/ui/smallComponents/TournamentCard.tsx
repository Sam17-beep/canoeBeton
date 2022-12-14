import Image from 'next/image'
import Link from 'next/link';
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from 'styles/ui/smallComponents/TournamentCard.module.css'
import { Tournament } from '../bigComponents/Historique';

interface HeaderProps {
  tournament: Tournament;
}


const TournamentCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ tournament }) => {
  const lien = "historique/" + tournament.name;
  
  return (
    <Link href={lien}>
      <div className={styles.card}>
        <Image src={"/../public/Historique/" + tournament.imagePath + "main.webp"} alt={tournament.name} width={368} height={314} />
        <span className={styles.tournament_name}>{tournament.name} - {tournament.date}</span>
      </div>
    </Link>
  );
};

export default TournamentCard;