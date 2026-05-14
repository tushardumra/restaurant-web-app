import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Auth from '../pages/Auth'
import RegisterForm from '../components/auth/RegisterForm'

const MainLayout = () => {
  return (
    <>
      <Auth/>
      {/* <RegisterForm/> */}
      {/* <Navbar/>
      <div className=''>
        <Outlet/>
      </div> */}
    </>
  )
}

export default MainLayout
