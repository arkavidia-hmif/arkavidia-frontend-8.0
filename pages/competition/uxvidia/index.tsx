import SEO from '@src/components/SEO';
import Jumbotron from '@src/contexts/CompetitionDetail/Jumbotron';
import CountdownComp from '@src/contexts/CompetitionDetail/Countdown';
import Prize from '@src/contexts/CompetitionDetail/Prize'
import { FAQ_UXVIDIA, TIMELINE_UXVIDIA } from '@src/const/CompetitionDetail';
import FAQ from '@src/contexts/CompetitionDetail/FAQ';
import Timeline from '@src/contexts/CompetitionDetail/Timeline'
import Contact from '@src/contexts/CompetitionDetail/Contact'
import Logo from '@src/assets/images/LogoUXVidia.svg'

const CONTACT = {
  line: [
    {
      contact: 'rachmadh26',
      name: 'Rachmad'
    },
    {
      contact: 'auliaileeteukey',
      name: 'Aulia'
    }
  ],
  wa: [
    {
      contact: '081548244081',
      name: 'Rachmad'
    },
    {
      contact: '081222418095',
      name: 'Aulia'
    }
  ]
}

const PRIZES = [
  {
    title: 'Juara 1',
    prize:'Rp 7.000.000,-',
    bgColor: 'bg-red300'
  },
  {
    title: 'Juara 2',
    prize:'Rp 5.000.000,-',
    bgColor: 'bg-green300'
  },
  {
    title: 'Juara 3',
    prize:'Rp 3.000.000,-',
    bgColor: 'bg-blue200'
  },
  {
    title: 'Best Video',
    prize:'Rp 750.000,-',
    bgColor: 'bg-yellow300'
  },  
  {
    title: 'Best Innovation',
    prize:'Rp 750.000,-',
    bgColor: 'bg-pink300'
  },
]

const CP = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | UXVidia">
      <Jumbotron 
        title="UXVidia" 
        description='UXvidia adalah kompetisi desain pengalaman pengguna atau user experience (UX) sebuah aplikasi mobile yang berfokus pada pencapaian user experience goals dan usability goals, misalnya kenyamanan dan kemudahan pengguna dalam menggunakan sebuah aplikasi. UXvidia mengangkat tema ”Empowering integration of technology into daily life to answer digital disruption challenges" dengan subtema ekonomi, pendidikan, pariwisata, teknologi, dan kesehatan. Perlombaan ini ditujukan bagi mahasiswa S1/D4/D3 untuk menguji kemampuan dalam membuat desain pengalaman pengguna.' 
        logo={Logo}
        guidebook="https://drive.google.com/file/d/1o0FK1h_ZiCoQrSk0I99wcufo3NHJHbsP/view?usp=sharing"
        />
      <CountdownComp />
      <Prize prizes={PRIZES} />
      <Timeline dates={TIMELINE_UXVIDIA} />
      <FAQ faqs={FAQ_UXVIDIA} />
      <Contact 
        line={CONTACT.line}
        wa={CONTACT.wa}
      />
    </SEO>
  )
}

export default CP
