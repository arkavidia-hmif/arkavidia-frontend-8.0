import SEO from '@src/components/SEO';
import DataDiri from '@src/contexts/Dashboard/DataDiri';

const ParticipantData = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0 | Participant Data">
      <DataDiri />
    </SEO>
  )
}

export default ParticipantData
