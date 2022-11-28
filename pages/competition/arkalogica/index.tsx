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
      contact: 'ruaaco',
      name: 'Marcho'
    },
    {
      contact: 'gare26',
      name: 'Gare'
    },
  ],
  wa: [
    {
      contact: '081228051404',
      name: 'Marcho'
    },
    {
      contact: '082216612992',
      name: 'Gare'
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
  },
]

const CP = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0 | Arkalogica">
      <Jumbotron 
        title="Arkalogica" 
        description="Arkalogica adalah kompetisi yang mengasah kemampuan peserta dalam penggunaan logika dan menyelesaikan masalah secara logis. Jenis-jenis permasalahan yang diberikan antara lain berbagai soal logika dan game menarik." 
        logo={Logo}
        guidebook="https://drive.google.com/file/d/1_C_gDpvTlCLubuBDy8CLwCtKRv6Vs1VO/view?usp=sharing"
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
