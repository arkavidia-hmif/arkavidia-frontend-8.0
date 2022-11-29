import SEO from '@src/components/SEO';
import ProfilePage from '@src/contexts/ProfilePage';

const Profile = (): JSX.Element => {
  return (
    <SEO title="Arkavidia 8.0 | Profile">
      <ProfilePage />
    </SEO>
  )
}

export default Profile;