import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from './components/Home';
import AddMentor from './components/AddMentor';
import AddStudent from './components/AddStudent';
import AllMentors from './components/AllMentors';
import AllStudents from './components/AllStudents';
import AssignStudents from './components/AssignStudents';
import ChangeMentor from './components/ChangeMentor';
import ViewMentor from './components/ViewMentor';
function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route path ="/home" component={Home}/> 
        <Route path ="/add-mentor" component={AddMentor}/>
        <Route path ="/add-student" component={AddStudent}/>
        <Route path ="/all-mentors" component={AllMentors}/>
        <Route path ="/all-students" component={AllStudents}/>
        <Route path ="/assign-students" component={AssignStudents}/>
        <Route path ="/change-mentor" component={ChangeMentor}/>
        <Route path ="/view-mentor" component={ViewMentor}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
