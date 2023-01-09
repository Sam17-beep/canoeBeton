import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'
import { Sponsor } from '../bigComponents/Sponsor'
import styles from 'styles/ui/smallComponents/SponsorCard.module.css'

interface SponsorCardProps {
  sponsor: Sponsor
  isMosaique?: boolean
}

const sponsorCard: FunctionComponent<PropsWithChildren<SponsorCardProps>> = ({
  sponsor,
  isMosaique,
}) => {
  return (
    <div>
      {isMosaique ? (
        <Image
          src={'/../public/Sponsors/' + sponsor.imagePath}
          width={1000}
          height={3000}
          alt={'logo sponsor'}
          className={styles.responsive}
        />
      ) : (
        <div>No</div>
      )}
    </div>
  )
}

export default sponsorCard
