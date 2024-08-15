import React from 'react'

import Weather from './components/Weather'
import background from './assets/background.png'




const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='app'>
      <Weather/>
    </div>
  )
}



export default App


