import React from 'react'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from 'styles/ui/bigComponents/Contact.module.css'
import SimpleBox from '../containers/SimpleBox'
import ComplexBox from '../containers/ComplexBox'

interface ContactProps {}

const Contact: FunctionComponent<PropsWithChildren<ContactProps>> = ({}) => {
  return (
    <>
      <div className={styles.color}></div>
      <div>
        <div className={styles.titre}>Nous joindre</div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.two}>
          <SimpleBox>
            <div className={styles.sousTitre}>Adresse</div>
            <p>
              1065, avenue de la Médecine, local-1945 Pavillon Adrien-Pouliot,
              Université Laval Québec (QC) G1V 0A6
            </p>
            <div className={styles.sousTitre}>Email</div>
            <p>canoe.ulaval@gmail.com</p>
            <div className={styles.sousTitre}>Téléphone</div>
            <p>418-999-5540</p>
          </SimpleBox>
        </div>
        <div className={styles.one}>
          <ComplexBox title="Nos réseaux">Nos réseaux</ComplexBox>
          <ComplexBox title="Faire un don">Faire un don</ComplexBox>
        </div>
      </div>
    </>
  )
}

export default Contact
