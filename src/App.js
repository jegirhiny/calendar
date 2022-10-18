import { Routes, Route } from 'react-router-dom';
import Landing from './components/routes/landing/landing.component';
import Calendar from './components/routes/calendar/calendar.component';
import Navigation from './components/routes/navigation/navigation.component';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Landing />} />
      </Route>
      <Route path='calendar' element={<Calendar />} />
    </Routes>
  );
}

export default App;