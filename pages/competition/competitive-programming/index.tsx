import SEO from '@src/components/SEO';
import Jumbotron from '@src/contexts/CompetitionDetail/Jumbotron';
import CountdownComp from '@src/contexts/CompetitionDetail/Countdown';
import Prize from '@src/contexts/CompetitionDetail/Prize'
import { FAQ_CP, TIMELINE_CP } from '@src/const/CompetitionDetail';
import FAQ from '@src/contexts/CompetitionDetail/FAQ';
import Timeline from '@src/contexts/CompetitionDetail/Timeline'
import Contact from '@src/contexts/CompetitionDetail/Contact'
import Logo from '@src/assets/images/LogoCP.svg'

const CONTACT = {
  line: [
    {
      contact: '089507646369',
      name: 'Aira'
    },
    {
      contact: '081283603881',
      name: 'Ubai'
    }
  ],
  wa: [
    {
      contact: 'airathalca',
      name: 'Aira'
    },
    {
      contact: 'ubaidillah_ariq',
      name: 'Ubai'
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
    title: 'First Solver on Final',
    prize:'Rp 100.000,-/soal',
    bgColor: 'bg-yellow300'
  },
]

const CP = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0 | Competitive Programming">
      <Jumbotron 
        title="Competitive Programming" 
        description="Competitive Programming adalah kompetisi yang menguji kemampuan analisis para peserta dalam pemecahan masalah dan berpikir komputasional dengan menyelesaikan persoalan - persoalan yang diberikan dengan menggunakan bahasa pemrograman tertentu dan tidak melanggar batasan waktu dan memori yang ditentukan. Kompetisi ini ditujukan untuk Mahasiswa S1/D3/D4 se-Indonesia." 
        logo={Logo}
        />
      <CountdownComp />
      <Prize prizes={PRIZES} />
      <Timeline dates={TIMELINE_CP} />
      <FAQ faqs={FAQ_CP} />
      <Contact 
        line={CONTACT.line}
        wa={CONTACT.wa}
      />
    </SEO>
  )
}

export default CP
