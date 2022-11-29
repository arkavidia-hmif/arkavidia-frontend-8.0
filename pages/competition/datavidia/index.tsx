import SEO from '@src/components/SEO';
import Jumbotron from '@src/contexts/CompetitionDetail/Jumbotron';
import CountdownComp from '@src/contexts/CompetitionDetail/Countdown';
import Prize from '@src/contexts/CompetitionDetail/Prize'
import { FAQ_UXVIDIA, TIMELINE_UXVIDIA } from '@src/const/CompetitionDetail';
import FAQ from '@src/contexts/CompetitionDetail/FAQ';
import Timeline from '@src/contexts/CompetitionDetail/Timeline'
import Contact from '@src/contexts/CompetitionDetail/Contact'
import Logo from '@src/assets/images/LogoDatavidia.svg'

const CONTACT = {
  line: [
    {
      contact: 'rizkyramadhana26',
      name: 'Rizky'
    },    {
      contact: 'rioalexande723',
      name: 'Rio'
    },
  ],
  wa: [
    {
      contact: '081252870313',
      name: 'Rizky'
    },    {
      contact: '082339981757',
      name: 'Rio'
    },
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
  }
]

const CP = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Datavidia">
      <Jumbotron 
        title="Datavidia" 
        description='Datavida merupakan kompetisi yang bertujuan untuk menjadi ajang pengembangan kompetensi dan pertandingan antara talenta digital Indonesia khususnya di dunia sains data untuk memberikan keputusan yang bijak dan terarah.' 
        logo={Logo}
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
