/* eslint-disable no-tabs,indent */
import React from 'react';
import ReactDOM from 'react-dom';

import { isTweetFrench, tweetDateSorter, getAuthorsFromTweets, tweetAuthorFilter, getHashtagsFromTweets, tweetHashtagFilter } from '../vanilla/utils';
import jsonFetch from '../vanilla/jsonFetch';
import TweetList from './tweetList';
import FrenchFilterButton from './frenchFilterButton';
import DateButtonSorter from './dateButtonSorter';
import AuthorSelectFilter from './authorSelectFilter';
import HashtagSelectFilter from './hashtagSelectFilter';

class Root extends React.Component {
	constructor () {
		super();

		this.state = {
			isFrenchFiltered: false,
			tweets: [],
			isDecreaseSorted: true,
			author: '',
			hashtag: ''
		};
		this.frenchFilter = this.frenchFilter.bind(this);
		this.dateSorter = this.dateSorter.bind(this);
        this.authorFilter = this.authorFilter.bind(this);
        this.hashtagFilter = this.hashtagFilter.bind(this);
    }

	frenchFilter () {
		this.setState({
			isFrenchFiltered: !this.state.isFrenchFiltered
		});
	}
    authorFilter (author) {
        this.setState({
            author
        });
    }
    hashtagFilter (hashtag) {
        this.setState({
            hashtag
        });
    }
    dateSorter () {
        this.setState({
            isDecreaseFiltered: !this.state.isDecreaseFiltered
        });
    }

	componentDidMount () {
        const urls = ['https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json', 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'];

        const promises = urls.map(jsonFetch);

        Promise.all(promises).then(tweets => {
            tweets = tweets[0].concat(tweets[1]);
            this.setState({
                tweets: tweets
            });
        });

	}
	render () {
		let displayedTweets = this.state.tweets;

		displayedTweets = this.state.isFrenchFiltered
			? displayedTweets.filter(isTweetFrench)
			: displayedTweets;
        const authors = getAuthorsFromTweets(displayedTweets);
        if (this.state.author !== '') {
            displayedTweets = tweetAuthorFilter(this.state.author, displayedTweets);
        }
        const hashtags = getHashtagsFromTweets(displayedTweets);
        if (this.state.hashtag !== '') {
            displayedTweets = tweetHashtagFilter(this.state.hashtag, displayedTweets);
        }

        tweetDateSorter(this.state.isDecreaseFiltered, displayedTweets);

		return (
			<div>
				<div className="d-flex">
					<FrenchFilterButton filter={this.frenchFilter}/>
					<DateButtonSorter sort={this.dateSorter}/>
					<AuthorSelectFilter filter={this.authorFilter} authors={authors}/>
					<HashtagSelectFilter filter={this.hashtagFilter} hashtags={hashtags}/>
				</div>
				<TweetList tweets={displayedTweets}/>
			</div>
		);
	}
}
ReactDOM.render(
	<Root />,
	document.getElementById('root')
);
