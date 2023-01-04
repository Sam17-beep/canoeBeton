import React from 'react'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from 'styles/ui/bigComponents/Contact.module.css'
import Box from '../containers/Box'

interface ContactProps {}

const Contact: FunctionComponent<PropsWithChildren<ContactProps>> = ({}) => {
  return (
    <>
      <div>
        <div className={styles.titre}>Nous joindre</div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.two}>
          <Box>
            <div className={styles.sousTitre}>Adresse</div>
            <p>
              1065, avenue de la Médecine, local-1945 Pavillon Adrien-Pouliot,
              Université Laval Québec (QC) G1V 0A6
            </p>
            <div className={styles.sousTitre}>Email</div>
            <p>canoe.ulaval@gmail.com</p>
            <div className={styles.sousTitre}>Téléphone</div>
            <p>418-999-5540</p>
          </Box>
        </div>
        <div className={styles.one}>
          <Box>Nos réseaux</Box>
          <Box>Faire un don</Box>
        </div>
      </div>
    </>
  )
}

export default Contact
