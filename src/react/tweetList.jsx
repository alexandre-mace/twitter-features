import React from 'react';

import Tweet from './tweet';

export default function TweetList (props) {
    const MyTweets = props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet}/>)
    return  (
        <div>
            {MyTweets}
        </div>
    );
}