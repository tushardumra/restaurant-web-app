import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <div className=''>
        <Outlet/>
      </div>
    </>
  )
}

export default MainLayout
