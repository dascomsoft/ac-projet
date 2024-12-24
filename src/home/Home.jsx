import React from 'react'
import '../styles/Home.css'
import deme from '../assets/courrier.jpg'
import etude from '../assets/etu.jpg'
import meuble from '../assets/meuble1.jpg'
import cuisine from '../assets/cuisi.jpg'
import vinyl from '../assets/vini.jpg'
import back from '../assets/backi4.jpg'
import ImageSlider from '../ImageSlide'
import logo from '../assets/logo.webp'



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
            <div className='shadow-2xl p-3'>
              <img className='rounded-full w-[200px] h-[200px]' src={deme} alt="" />
              <div>
                <h4 className='my-5 text-white text-xl font-extrabold'>Umzüge</h4>
                <p className='text-white'>Sie suchen nach ein paar Extrahänden die bei Ihrem Umzug mit anpacken? Sie wollen sich einfach zurücklehnen, während unser kräftiges Team das Umziehen in eine neue Wohnung oder neues Haus ermöglicht? Sie wollen einen stressfreien Umzug? Dann sind Sie bei uns richtig! Wir wissen wie anstrengend, zeitintensiv und nervenaufreibend das Beziehen eines neuen Zuhauses sein kann. Daher unterstützen wir Sie gerne für einen entspannten und problemfreien Ablauf. So macht Umziehen Spaß!</p>
              </div>
            </div>
            <div className='shadow-2xl p-3'>
              <img className='rounded-full w-[200px] h-[200px]' src={etude} alt="" />
              <div>
                <h4 className='my-5 text-white text-xl font-extrabold'>Studentenvermittlung</h4>
                <p className='text-white'>Suchen Sie nach einer preiswerten Lösung für Ihren Umzug, die Renovierung Ihres Hauses oder Ähnlichem? Unsere Studenten stehen Ihnen gerne zur Seite. Wir vermitteln nur erfahrene und zuverlässige Helfer.</p>
                <p className='text-white'>Wenn Sie sich für unsere Vermittlung entscheiden, können Sie sich ganz einfach bei uns melden. Wir werden Ihnen dann qualifizierte Studenten vermitteln und die entsprechenden Kontaktdaten innerhalb des selben Werktages weiterleiten. Die Vermittlungsgebühr wird nach erfolgreicher Vermittlung fällig.</p>
              </div>
            </div>
            <div className='shadow-2xl p-3'>
              <img className='rounded-full w-[200px] h-[200px]' src={meuble} alt="" />
              <div>
                <h4 className='my-5 text-white text-xl font-extrabold'>Möbelmontage</h4>
                <p className='text-white'>Wir bieten folgendes an:</p>
                <ul className='text-white'>
                  <li>** Möbelaufbau und Möbelabbau</li>
                  <li>** Wandmontage (Befestigung der Möbel an der Wand)</li>
                  <li>** wir montieren z.B.: Betten, Kleiderschränke (einfache Schränke und komplizierte Schränke mit Schiebe und Schwebetüren), Regale, Kommoden, Garderoben...</li>
                </ul>
              </div>
            </div>
            <div className='shadow-2xl p-3'>
              <img className='rounded-full w-[200px] h-[200px]' src={cuisine} alt="" />
              <div>
                <h4 className='my-5 text-white text-xl font-extrabold'>Küchenmontage</h4>
                <p className='text-white'>Wir bieten folgendes an:</p>
                <ul className='text-white'>
                  <li>** Demontage und Entsorgung der alten Küche</li>
                  <li>** Zusammenbau von Schränken inklusive Beine, Montage aller Fronten inkl. der Griffe, Einsetzen der Einlegeböden, Montage der Schubladen inkl. der Montage der Schubladenschienen im Korpus</li>
                  <li>** Einpassen von Spülen, Arbeitsplatten und Elektrogeräten, Installation von Arbeitsplatten mit Zu- und Ausschnitten</li>
                  <li>** Installation und Anschluss von Gasgeräten und Starkstromanschlüssen 16 Ampere. Absicherung müssen durch einen Fachbetrieb ausgeführt (laut NAV)</li>
                  <li>** Ausrichten der Schränke inkl. Wandschränken und Wandbefestigungen</li>
                  <li>** Wasseranschluss des Spülbeckens und der Mischbatterie, Einsetzen von Spülbecken und Kochfeld (kein Stromanschluss)</li>
                </ul>
              </div>
            </div>
            <div className='shadow-2xl p-3'>
              <img className='rounded-full w-[200px] h-[200px]' src={vinyl} alt="" />
              <div>
                <h4 className='my-5 text-white text-xl font-extrabold'>Venyl / Laminat verlegen</h4>
                <p className='text-white'>Wir entfernen Ihren alten Boden und oder verlegen Ihren neuen Boden. Von Parkett über Laminat bis zu Teppichboden können wir alle verschiedene Bodenbeläge entfernen. Wir verlegen allerdings nur Vinylboden/Laminat.</p>
              </div>
            </div>
            <div className='shadow-2xl p-3'>
              <img className='rounded-full w-[200px] h-[200px]' src={back} alt="" />
              <div>
                <h4 className='my-5 text-white text-xl font-extrabold'>Mehr...</h4>
                <p className='text-white'>Wir bieten folgendes an:</p>
                <ul className='text-white'>
                  <li>** Vermietung von Umzugshilfen (voll ausgestattete Werkzeugkoffer, Akkuschrauber, Bohrmaschinen, Möbel- Rollwagen, Sackkarre, Möbeldecken etc.)</li>
                  <li>**  Anschließen von Waschmaschine/Spülmaschine/etc</li>
                  <li>** Sonstige Raumausstattung- und Montagearbeiten</li>
                  <li>** Tapezieren</li>
                  <li>** Tapeten & Teppiche entfernen</li>
                  <li>** Sperrmüll Entsorgung</li>
                  <li>** Transporte aller Art</li>
                  <li>**  Anschließen von</li>
                  <li>** Sperrmüll Entsorgung</li>
                </ul>
              </div>
            </div>
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
          <h1 className='text-center font-extrabold text-4xl pt-[2rem]'>Our Galleries</h1>
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
