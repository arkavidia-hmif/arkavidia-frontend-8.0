import SEO from '@src/components/SEO';
import ProfilePage from '@src/contexts/ProfilePage';

const Profile = (): JSX.Element => {
  return (
    <SEO title="Arkavida 8.0">
      <ProfilePage />
    </SEO>
  )
}

export default Profile;