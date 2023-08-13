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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faq />} />

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
