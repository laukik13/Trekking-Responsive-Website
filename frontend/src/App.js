import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Adventure from './Pages/Adventure';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Singletrek from './Pages/Singletrek';
import Singleblog from './Pages/Singleblog';
import Payment from './Pages/Payment';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Cancellation from './Pages/Cancellation';
import Booking from './Pages/Booking';
import Gallery from './Pages/Gallery';
import PeopleGallery from './Pages/PeopleGallery';
import SightsGallery from './Pages/SightsGallery';
import TrekGallery from './Pages/TrekGallery';
import NatureGallery from './Pages/NatureGallery';
import RrefugesGallery from './Pages/RrefugesGallery';
import OtherGallery from './Pages/OtherGallery';
import Testimonial from './Pages/Testimonial';
import Admin from './Pages/Admin';
import Layout2 from './Components/Layout2';
import AdminNewTrek from './Pages/AdminNewTrek';
import AdminTrekList from './Pages/AdminTrekList';
import AdminBookingList from './Pages/AdminBookingList';
import AdminAddGallery from './Pages/AdminAddGallery';
import AdminTestimonialList from './Pages/AdminTestimonialList';
import AdminContactList from './Pages/AdminContactList';
import AdminLoginpage from './Pages/AdminLoginpage';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/adventure' element={<Adventure/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/singletrek' element={<Singletrek/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/people' element={<PeopleGallery/>}/>
    <Route path='/sight' element={<SightsGallery/>}/>
    <Route path='/trek' element={<TrekGallery/>}/>
    <Route path='/nature' element={<NatureGallery/>}/>
    <Route path='/refuge' element={<RrefugesGallery/>}/>
    <Route path='/other' element={<OtherGallery/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/singleblog' element={<Singleblog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/testimonial' element={<Testimonial/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/privacy' element={<Privacy/>}/>
    <Route path='/terms' element={<Terms/>}/>
    <Route path='/cancellation' element={<Cancellation/>}/>
    </Route>
    <Route path='/admin/loginAdmin' element={<AdminLoginpage/>}/>
    <Route path='/admin'  element={<Layout2/>}>
    <Route index  element={<Admin/>}/>
    <Route path='/admin/addtrek' element={<AdminNewTrek/>}/>
    <Route path='/admin/treklist' element={<AdminTrekList/>}/>
    <Route path='/admin/booklist' element={<AdminBookingList/>}/>
    <Route path='/admin/addgallery' element={<AdminAddGallery/>}/>
    <Route path='/admin/testimonallist' element={<AdminTestimonialList/>}/>
    <Route path='/admin/contactlist' element={<AdminContactList/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
