import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
   <>
    <Router>
   <Header />
   <main className="py-3">
     <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/event/:id' element={<EventScreen />} />
          <Route path='/cart/:id' element={<CartScreen />} />
          <Route path='/cart' element={<CartScreen />} />
        </Routes>
     </Container>
     </main>
     <Footer />
     </Router>
   </>
  );
}

export default App;
