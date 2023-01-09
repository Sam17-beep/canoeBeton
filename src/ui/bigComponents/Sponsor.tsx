import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'

import SponsorCard from '../smallComponents/sponsorCard'
import sponsor from '../../../pages/api/sponsor'

export interface Sponsor {
  categorie: string
  description: string
  imagePath: string
}

const Sponsor: FunctionComponent<PropsWithChildren> = ({}) => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/sponsor')
      const data = await res.json()
      setSponsors(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>Partenaires</div>
      <div>2021-2022</div>
      <div>
        Merci à nos fidèles partenaires de contribuer à notre projet chaque
        année!
      </div>
      <div>
        {sponsors.map((sponsor) =>
          sponsor.categorie === 'mosaique' ? (
            <SponsorCard sponsor={sponsor} isMosaique={true} />
          ) : (
            <SponsorCard sponsor={sponsor} isMosaique={false} />
          )
        )}
      </div>
    </div>
  )
}

export default Sponsor
