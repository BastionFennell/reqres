import React, { useState } from 'react';

interface Props {
    date: string,
    name: string,
    onChange: Function,
}

const UserCard = ({
    date,
    name,
    onChange,
} : Props) => {
    const [editing, setEditing] = useState(false);

    return (
        <article
            data-testid="card"
            data-editing={editing ? 'true' : null}
            onClick={() => setEditing(!editing)}
        >
            {name}
            {date}
            {editing ? (<input data-testid="name-field" />) : null}
        </article>
    );
}

export default UserCard;
