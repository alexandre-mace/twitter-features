import React from 'react';

export default function AuthorSelectFilter (props) {
    return (
        <select className="feature" onChange={() => props.filter(event.target.value)}>
            <option value={''}>Author filter</option>
            {
                props.authors.map(author => {
                    return <option key={author} value={author}>{author}</option>;
                })
            }
        </select>
    );
}