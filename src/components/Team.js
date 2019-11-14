import React from "react";

const Team = props => {
    return (
        <div className="team-list">
            {props.teamMember.map(team => (
                <div className="team" key={team.id}>
                    <h2>{team.name}</h2>
                    <h2>{team.email}</h2>
                    <p>{team.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;