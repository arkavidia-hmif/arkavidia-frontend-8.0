import Layout from '@src/components/Navigation/Layout'
import EditIcon from '@src/components/Icon/EditIcon'
import { TextField } from '@src/components/TextField'
import OutputIcon from '@src/components/Icon/OutputIcon'
import Image from 'next/image'
import ProfileImage from '@src/assets/images/profile_page.png'

const ProfilePage = () => {
  return (
    <Layout>
      <div className="p-12 bg-gray200">
        <div className="flex pt-8">
          <div className="w-1/4 flex justify-center items-center pt-16">
            <Image src={ProfileImage} />
          </div>
          <div className="w-3/4 pl-16">
            <div className="flex justify-between pb-8">
              <h4 className="font-archivo text-5xl drop-shadow-xl">Profil</h4>
              <div>
                <button className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-blue300 hover:bg-blue200">
                  <div>
                    <EditIcon className="fill-white w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl drop-shadow">
              <p className="font-helvatica font-bold pb-2">Username</p>
              <TextField
                externalState=""
                setExternalState={() => null}
                ftype="default"
                variant="default"
                width="w-full"
              />
              <p className="font-helvatica font-bold py-2">Nama Tim</p>
              <TextField
                externalState=""
                setExternalState={() => null}
                ftype="default"
                variant="default"
                width="w-full"
              />
              <p className="font-helvatica font-bold py-2">Kategori Lomba</p>
              <TextField
                externalState=""
                setExternalState={() => null}
                ftype="default"
                variant="default"
                width="w-full"
              />
              <p className="font-helvatica font-bold py-2">Password</p>
              <TextField
                externalState=""
                setExternalState={() => null}
                ftype="show"
                variant="default"
                width="w-full"
              />
              <p className="font-helvatica font-bold text-xs text-red-500 hover:cursor-pointer pt-2">
                Ubah Password
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-8 justify-end">
          <button className="rounded-xl flex items-center justify-center mb-2 bg-red300 hover:bg-red200 hover:drop-shadow-xl active:bg-red400 disabled:bg-gray300 disabled:opacity-50 w-auto h-12">
            <div className="flex items-center justify-center font-helvatica font-bold text-base text-white px-8">
              <OutputIcon className="fill-white w-6 h-6 mr-2" />
              <div className="text-white">Log Out</div>
            </div>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
