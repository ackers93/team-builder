import React, { useState } from 'react';
import './App.css';
import Team from './components/Team';
import TeamForm from './components/TeamForm'

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: "Andrew",
      email: "hello@world.com",
      position:
        "Software Dev"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      position: member.position
    };
    setTeamMember([...teamMember, newMember]);
  };
  return (
    <div className="App">
      <h1>My TeamMember</h1>
      {/* we are going to pass a function down as a prop */}
      <TeamForm addNewMember={addNewMember} />
      <Team teamMember={teamMember} />
    </div>
  );
}


export default App;
