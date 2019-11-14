import React, { useState } from "react";

const TeamForm = props => {
    const [member, setMember] = useState({ Name: "", Email: "", Position: "" });

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
        console.log(e.target.name);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ Name: "", Email: "", Position: "" });
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">ID</label>
            <input
                id="id"
                type="text"
                name="id"
                onChange={handleChanges}
                value={member.id}
            />
            <label htmlFor="name">Name</label>
            <textarea
                id="name"
                name="name"
                value={member.name}
                onChange={handleChanges}
            />
            <label htmlFor="email">Email</label>
            <input
                id="name"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />
            <label htmlFor="position">Position</label>
            <textarea
                id="name"
                name="position"
                value={member.position}
                onChange={handleChanges}
            />
            <button type="submit">Add member</button>
        </form>
    );
};

export default TeamForm;