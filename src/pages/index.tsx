import type { NextPage } from 'next'
import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction';

const Home: NextPage = () => {
  return (
      <div style={{
        display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', flex: '1 1 auto'}}>
        <ConstructionIcon fontSize='large'></ConstructionIcon>
        <p>Ce site est présentement en reconstruction. Veuillez utiliser le site suivant : <a href="https://canoeulaval.wixsite.com/site">https://canoeulaval.wixsite.com/site</a></p>
      </div>
  )
}

export default Home
