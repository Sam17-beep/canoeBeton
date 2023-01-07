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
      <Image src={"/../public/Historique/"+tournament.imagePath} alt={tournament.name} width={300} height={300} />
      <span>{tournament.name} - {tournament.date}</span>
    </div>
  );
};

export default TournamentCard;