import React from 'react';

export default function HashtagSelectFilter (props) {
    return (
        <select className="feature" onChange={() => props.filter(event.target.value)}>
            <option value={''}>Hashtag filter</option>
            {
                props.hashtags.map(hashtag => {
                    return <option key={hashtag} value={hashtag}>{hashtag}</option>;
                })
            }
        </select>
    );
}