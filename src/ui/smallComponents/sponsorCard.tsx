import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'
import { Sponsor } from '../bigComponents/Sponsor'

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
          height={1000}
          alt={'logo sponsor'}
        />
      ) : (
        <div>No</div>
      )}
    </div>
  )
}

export default sponsorCard
