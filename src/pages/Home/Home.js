import React from 'react'
import Hero from '../../components/Hero/Hero'
export default function Home() {
  return (
    <div>
      <Hero title='Cool Hero' subtitle='some type of subtitle' action='click here' image='/test.jpeg'/>
      <Hero title='Paola Trujillo' subtitle='Madre' action='click here' image='https://unsplash.it/1500?random'/>
      <Hero title='Josue Lopez' subtitle='Esposo' action='click here' image='https://unsplash.it/1500?random'/>
      <Hero title='Cool Hero' subtitle='some type of subtitle' action='click here' image='https://unsplash.it/1500?random'/>
    </div>
  )
}
