import SEO from '@src/components/SEO';
import Jumbotron from '@src/contexts/CompetitionDetail/Jumbotron';
import CountdownComp from '@src/contexts/CompetitionDetail/Countdown';
import Prize from '@src/contexts/CompetitionDetail/Prize'
import { FAQ_ARKALOGICA, TIMELINE_ARKALOGICA } from '@src/const/CompetitionDetail';
import FAQ from '@src/contexts/CompetitionDetail/FAQ';
import Timeline from '@src/contexts/CompetitionDetail/Timeline'
import Contact from '@src/contexts/CompetitionDetail/Contact'
import Logo from '@src/assets/images/LogoArkalogica.svg'

const CONTACT = {
  line: [
    {
      contact: 'abdulganteng',
      name: 'Abdul'
    },
  ],
  wa: [
    {
      contact: '0888-8888-88889',
      name: 'Abdul'
    }
  ]
}

const PRIZES = [
  {
    title: 'Juara 1',
    prize:'Rp 10.000.000,-',
    bgColor: 'bg-red300'
  },
  {
    title: 'Juara 2',
    prize:'Rp 7.000.000,-',
    bgColor: 'bg-green300'
  },
  {
    title: 'Juara 3',
    prize:'Rp 4.000.000,-',
    bgColor: 'bg-blue200'
  },
]

const CP = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0 | Arkalogica">
      <Jumbotron 
        title="Arkalogica" 
        description="Arkalogica adalah kompetisi yang mengasah kemampuan peserta dalam penggunaan logika dan menyelesaikan masalah secara logis. Jenis-jenis permasalahan yang diberikan antara lain berbagai soal logika dan game menarik." 
        logo={Logo}
        />
      <CountdownComp />
      <Prize prizes={PRIZES} />
      <Timeline dates={TIMELINE_ARKALOGICA} />
      <FAQ faqs={FAQ_ARKALOGICA} />
      <Contact 
        line={CONTACT.line}
        wa={CONTACT.wa}
      />
    </SEO>
  )
}

export default CP
