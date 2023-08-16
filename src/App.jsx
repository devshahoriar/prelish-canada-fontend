import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Dashboard from './pages/dashboard/dashboard'
import AddNewInvoice from './pages/dashboard/AddNewInvoice'
import AddNewPropaty from './pages/dashboard/AddNewPropaty'
import EditInvoice from './pages/dashboard/EditInvoice'
import Invoices from './pages/dashboard/Invoices'
import MyFavorites from './pages/dashboard/MyFavorites'
import MyPackages from './pages/dashboard/MyPackages'
import MyProfile from './pages/dashboard/MyProfile'
import MyPropaty from './pages/dashboard/MyPropaty'
import InvoicePreview from './pages/dashboard/InvoicePreview'
import Reviews from './pages/dashboard/Reviews'
import NotFound from './pages/NotFound'
import Layout from './components/dashboard/Layout'
import Test from './pages/Test'
import AboutUs from './pages/AboutUs'
import AgencyDetails from './pages/AgencyDetails'
import AgencyList from './pages/AgencyList'
import AgentDetails from './pages/AgentDetails'
import AgentsList from './pages/AgentsList'
import BlogClassic from './pages/BlogClassic'
import BlogDetails from './pages/BlogDetails'
import BlogListWidthSidebar from './pages/BlogListWidthSidebar'
import CheckoutComplete from './pages/CheckoutComplete'
import CompareDetails from './pages/CompareDetails'
import ContactUs from './pages/ContactUs'
import DashboardSaveSearch from './pages/DashboardSaveSearch'
import ListingHalfMapListLayout from './pages/ListingHalfMapListLayout'
import ListingWithLeftFilter from './pages/ListingWithLeftFilter'
import Packages from './pages/Packages'
import PasswordRecovery from './pages/PasswordRecovery'
import Services from './pages/Services'
import ServicesWithSidebar from './pages/ServicesWithSidebar'
import SignUpAndLogin from './pages/SignUpAndLogin'
import SingleProperty from './pages/SingleProperty'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faq />} />

        

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/agencydetails" element={<AgencyDetails />} />
        <Route path="/agencylist" element={<AgencyList />} />
        <Route path="/agentdetails" element={<AgentDetails />} />
        <Route path="/agentslist" element={<AgentsList />} />
        <Route path="/blog" element={<BlogClassic />} />
        <Route path="/blog/details" element={<BlogDetails />} />
        <Route path="/bloglistwidthsidebar" element={<BlogListWidthSidebar />} />
        <Route path="/checkoutcomplete" element={<CheckoutComplete />} />
        <Route path="/comparedetails" element={<CompareDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dashboardsavesearch" element={<DashboardSaveSearch />} />
        <Route path="/listinghalfmaplistLayout" element={<ListingHalfMapListLayout />} />
        <Route path="/listingwithLeftfilter" element={<ListingWithLeftFilter />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/services" element={<ServicesWithSidebar />} />
        <Route path="/signupandlogin" element={<SignUpAndLogin />} />
        <Route path="/singleproperty" element={<SingleProperty />} />


        {/* dashboard */}
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/addinvoice" element={<AddNewInvoice />} />
          <Route path="/dashboard/addpropaty" element={<AddNewPropaty />} />
          <Route path="/dashboard/editinvoice" element={<EditInvoice />} />
          <Route path="/dashboard/invoices" element={<Invoices />} />
          <Route path="/dashboard/myfevorites" element={<MyFavorites />} />
          <Route path="/dashboard/mypackages" element={<MyPackages />} />
          <Route path="/dashboard/myprofile" element={<MyProfile />} />
          <Route path="/dashboard/mypropaty" element={<MyPropaty />} />
          <Route path="/dashboard/invoicepreviw" element={<InvoicePreview />} />
          <Route path="/dashboard/reviwes" element={<Reviews />} />
        </Route>

        
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
