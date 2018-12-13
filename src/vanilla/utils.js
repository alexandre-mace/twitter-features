export const isTweetFrench = (tweet) => {
  const regex = /^(fr)/
  return tweet.lang && regex.test(tweet.lang)
}

export const tweetDateSorter = (decreasing, tweets) => {
  const coefficient = decreasing
    ? -1
    : 1
  tweets.sort((first, second) => coefficient * (Date.parse(first.created_at) - Date.parse(second.created_at)))
}

export const getAuthorsFromTweets = (tweets) => {
  const authors = []

  tweets.forEach(function (tweet) {
    if (!authors.includes(tweet.user.screen_name)) {
      authors.push(tweet.user.screen_name)
    }
  })
  return authors
}
export const getHashtagsFromTweets = (tweets) => {
  const hashtags = []

  tweets.forEach(function (tweet) {
    tweet.entities.hashtags.forEach(function (hashtag) {
      if (!hashtags.includes(hashtag.text)) {
        hashtags.push(hashtag.text)
      }
    })
  })
  return hashtags
}
export const tweetAuthorFilter = (author, tweets) => {
  const displayedTweets = []

  tweets.forEach(function (tweet) {
    if (tweet.user.screen_name === author) {
      displayedTweets.push(tweet)
    }
  })
  return displayedTweets
}

export const tweetHashtagFilter = (GivenHashtag, tweets) => {
  const displayedTweets = []
  tweets.forEach(function (tweet) {
    tweet.entities.hashtags.forEach(function (hashtag) {
      if (hashtag.text === GivenHashtag) {
        displayedTweets.push(tweet)
      }
    })
  })
  return displayedTweets
}
