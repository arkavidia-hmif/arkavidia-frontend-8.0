import Layout from '@src/components/Navigation/Layout';
import Navbar from '@src/components/Navigation/Navbar';
import EditIcon from '@src/components/Icon/EditIcon';
import { TextField } from '@src/components/TextField';
import OutputIcon from '@src/components/Icon/OutputIcon';
import Footer from '@src/components/Footer/footer';

const ProfilePage = () => {
    return(
        <Layout>
            <div className='p-12 bg-gray200'>
                <Navbar isLoggedIn={true} loggedInAs="user" type="desktop"></Navbar>
                <div className="flex pt-8">
                    <div className="bg-gray-200 w-1/4 flex justify-center items-center">
                        Placeholder Gambar
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
                            <TextField ftype='default' variant='default' width="w-full"/>
                            <p className="font-helvatica font-bold py-2">Nama Tim</p>
                            <TextField ftype='default' variant='default' width="w-full"/>
                            <p className="font-helvatica font-bold py-2">Kategori Lomba</p>
                            <TextField ftype='default' variant='default' width="w-full"/>
                            <p className="font-helvatica font-bold py-2">Password</p>
                            <TextField ftype='show' variant='default' width="w-full"/>
                            <p className="font-helvatica font-bold text-xs text-red-500 hover:cursor-pointer pt-2">Ubah Password</p>
                        </div>
                    </div>
                </div>
                <div className="flex pt-8 justify-end">
                    <button className="rounded-xl flex items-center justify-center mb-2 bg-red300 hover:bg-red200 hover:drop-shadow-xl active:bg-red400 disabled:bg-gray300 disabled:opacity-50 w-auto h-12">
                        <div className="flex items-center justify-center font-helvatica font-bold text-base text-white px-8">
                            <OutputIcon className="fill-white w-6 h-6 mr-2" />
                            <div className="text-white">
                                Log Out
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <Footer variant='redCompEvent'/>
        </Layout>
    )
}

export default ProfilePage;