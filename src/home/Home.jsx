import React from 'react'
import '../styles/Home.css'
import ImageSlider from '../ImageSlide'
import logo from '../assets/logo.webp'
import { ActivityList } from '../ActivityList'
import { Link } from 'react-router-dom'


function Home() {


  return (
    <div className='overflow-hidden'>
      <div className="home-header text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className='font-extrabold text-3xl'>Vereinfachen Sie Ihr Leben mit unseren <br /> maßgeschneiderten Dienstleistungen!</h2>
          <p className='mt-[3rem] text-xl'>Sie ziehen um, benötigen professionelle Möbel- oder Küchenmontage, oder suchen nach Möglichkeiten für Studenten? Wir sind für Sie da! 💪 <br />
            Bei AC-Service stellen wir Ihnen ein qualifiziertes und erfahrenes Team zur Verfügung, um Ihnen schnelle, zuverlässige und auf Ihre Bedürfnisse abgestimmte Lösungen anzubieten.</p>
        </div>
      </div>
      <div className='bg-slate-700 py-[5rem]'>
        <div className="container mx-auto px-4">
          {/*services*/}
          <div className='text-center' id='services'>
            <h1 className='text-2xl text-white font-extrabold mb-[2rem]'>Diese Leistungen bieten wir an</h1>
            <p className='text-center text-white text-xl'>Wir stehen Ihnen gerne in den folgenden Dienstleistungsbereichen 7 Tage die Woche, sowie an <br /> Sonn- und Feiertagen zur Verfügung. Überzeugen Sie sich selbst von unserem Können.</p>
          </div>
          <div className='grid md:grid-cols-2 gap-5 mt-[7rem]'>
            {ActivityList.map((activity, index) => {
              return (
                <Link to={`/activity/${activity.id}`}>
                <div key={index}>
                  <div className='flex flex-col justify-center items-center shadow-2xl p-3 cursor-pointer hover:bg-slate-800 hover:rounded-2xl'>
                    <img className='rounded-full w-[200px] h-[200px]' src={activity.image} alt="" />
                    <div>
                      <h4 className='my-5 text-white text-xl font-extrabold'>{activity.title}</h4>
                      </div>
                  </div>
                </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      {/*QUI SOMMES NOUS*/}
      <div className='about'>
        <div className="container mx-auto px-4">
          <h1 className='font-bold text-4xl text-white mb-3'>Wer sind wir?</h1>
          <h1 className='text-yellow-300 text-2xl mb-10'>Ihr vertrauenswürdiger Partner für die erfolgreiche Umsetzung Ihrer Projekte</h1>
          <div className='grid md:grid-cols-2 gap-5 text-white'>
            <div className='bg-slate-800 p-7 rounded-xl'>
              <p>Wir sind ein engagiertes und leidenschaftliches Team, das darauf spezialisiert ist, Ihren Alltag zu erleichtern. Bei Rosfel’s Moves sind wir überzeugt, dass ein hochwertiger Service mit aufmerksamem Zuhören und einem tiefen Verständnis Ihrer Bedürfnisse beginnt. Seit unserer Gründung begleiten wir unsere Kunden mit Professionalität, Zuverlässigkeit und unermüdlichem Einsatz bei ihren Projekten.</p>
            </div>
            <div className='bg-slate-800 p-7 rounded-xl'>
              <p>Ob stressfreie Umzüge, makellose Renovierungen oder präzise Montage von Küchen und Möbeln  wir sind für Sie da. Doch unser Anspruch geht über das hinaus! Unser Ziel ist es, mehr als nur ein Dienstleister zu sein: ein vertrauenswürdiger Partner, auf den Sie sich verlassen können.Mit Sitz in Hessen sind wir stolz darauf, unsere Expertise für Sie einzusetzen und stehen auch für Projekte in anderen Regionen zur Verfügung. Werte wie Transparenz, Pünktlichkeit und ein außergewöhnlicher Kundenservice stehen bei uns an oberster Stelle, denn Ihre Zufriedenheit hat für uns höchste Priorität.</p>
            </div>
            <div className='bg-slate-800 p-7 rounded-xl'>
              <p>AC-Services  das ist die Garantie für einen individuellen Service, der Ihre Erwartungen übertrifft. Lassen Sie uns Ihre Projekte in Erfolge verwandeln. Kontaktieren Sie uns noch heute und erleben Sie den Unterschied!</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-stone-400'>
        <div className='container mx-auto px-4'>
          <h1 className='text-center font-extrabold text-4xl pt-[2rem]'>Unsere Galerie</h1>
          <ImageSlider />
        </div>
      </div>
      <div>
        <div className='bg-black py-[2rem]'>
          <div className='flex justify-center mb-[2rem]'>
            <img className='w-[70px] h-[70px] rounded-full' src={logo} alt="" />
          </div>
          <div className='text-center text-white'>
            <p className='text-2xl'>E-mail : ac-services@gmail.com</p>
            <p className='text-2xl'>Telephone :+4917681489091</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
