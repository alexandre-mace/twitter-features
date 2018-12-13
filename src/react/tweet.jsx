import React from 'react';
import classNames from 'classnames/bind';

export default function Tweet (props) {
    const isRetweet = props.retweeted_status;
    const articleClass = classNames({ retweet: isRetweet});
    let tweetDate = Date.parse(props.created_at);
    tweetDate = new Date(tweetDate);
    tweetDate = tweetDate.toLocaleDateString('fr-FR');

    return (
        <article className={articleClass}>
            <div>
                <img src={props.user.profile_image_url_https} alt=""/>
                <span>{props.user.screen_name}</span>
            </div>
            <div>
                <span>{tweetDate}</span>
                <p>{props.text}</p>
            </div>
        </article>
    );
}