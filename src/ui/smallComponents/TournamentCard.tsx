import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from 'styles/ui/smallComponents/TournamentCard.module.css'
import { Tournament } from '../bigComponents/Historique';

interface HeaderProps {
  tournament: Tournament;
}


const TournamentCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ tournament }) => {
  return (
    <div className={styles.card}>
      <Image src={"/../public/Historique/" + tournament.imagePath + "main.webp"} alt={tournament.name} width={368} height={314} />
      <span className={styles.tournament_name}>{tournament.name} - {tournament.date}</span>
    </div>
  );
};

export default TournamentCard;