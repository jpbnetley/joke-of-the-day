export type RedditJoke = {
  title: string
  selftext: string
  url: string
}

export type RedditJokeResponse = {
  data?: RedditJoke
}
