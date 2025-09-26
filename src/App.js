import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './pages/sagelanding/Footer';
import Minimba from './pages/Minimba/Minimba';
import Sagelandpage from './pages/sagelanding/Sagelandpage';
import Operation from './pages/certificatecourses/operationmanagement/Operation';
import Marketing from './pages/certificatecourses/marketing/Marketing';
import Businessanalysis from './pages/certificatecourses/Businessanalysis/Businessanalysis';
import Internationalbussiness from './pages/certificatecourses/internationalbusiness/Internationalbussiness';
import Productmanagement from './pages/certificatecourses/product/Productmanagement';
import Navbar from './Navbar';
import Agileprojectmanagement from './pages/certificatecourses/Agileproject/Agileprojectmanagement';
import Innovationanddesignthinking from './pages/certificatecourses/innovationanddesign/Innovationanddesignthinking';
import Accountandfinance from './pages/certificatecourses/accountandfinance/Accountandfinance';
import Teamleadership from './pages/certificatecourses/teamleadership/Teamleadership';
import Growthhackings from './pages/certificatecourses/growthhacking/Growthhackings';
import Viewallcourseslandingpage from './pages/certificatecourses/viewallcourses/Viewcourseslandingpage';
import Verifyourstudentpage from './pages/verifyourstudent/Verifyourstudentpage';
import Viewcertificatepage from './pages/viewcertificate/Viewcertificatepage';
import Ourpartnerpage from './pages/ourpartner/Ourpartnerpage';
import Aboutsagepage from './pages/aboutsage/Aboutsagepage';
import Login from './Login';
import Signup from './Signup';
import CheckOutPage from './pages/checkout/CheckOutPage';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
        <Routes>
          <Route path='/minimba' element={<Minimba/>}/>
          <Route path='/' element={<Sagelandpage/>}/>
          <Route path='/operationsmanagement' element={<Operation/>}/>
          <Route path='/marketing' element={<Marketing/>}/>
          <Route path='/businessanalysis'element={<Businessanalysis/>}/>
          <Route path='/internationalbussiness'element={<Internationalbussiness/>}/>
          <Route path='/productmanagement'element={<Productmanagement/>}/>
          <Route path='/agileprojectmanagement'element={<Agileprojectmanagement/>}/>
          <Route path='/innovation&designthinking'element={<Innovationanddesignthinking/>}/>
          <Route path='/accountandfinance'element={<Accountandfinance/>}/>
          <Route path='/teamleadership'element={<Teamleadership/>}/>
          <Route path='/growthhacking'element={<Growthhackings/>}/>
          <Route path='/viewallcourses'element={<Viewallcourseslandingpage/>}/>
          <Route path={'/verifystudentpage'}element={<Verifyourstudentpage/>}/>
          <Route path={'/viewcertificate'}element={<Viewcertificatepage/>}/>
          <Route path={'/ourpartner'}element={<Ourpartnerpage/>}/>
          <Route path={'/aboutsage'}element={<Aboutsagepage/>}/>
          <Route path={'/login'}element={<Login/>}/>
          <Route path={'/signup'}element={<Signup/>}/>
          <Route path={'/checkout'}element={<CheckOutPage/>}/>
          
        
          
          
        </Routes>
      

      
      <Footer/>
      

      
    </div>
    </Router>
  )
}

export default App;
