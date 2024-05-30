export interface RedditJoke {
  title: string
  selftext: string
  url: string
}

export interface RedditJokeResponse {
  data?: RedditJoke
  kind: string
}

export interface RedditJsonResponse {
  kind: string
  data: {
    after: string
    before: null
    children: RedditJokeResponse[]
    dist: number
    geo_filter: any
    modhash: string
  }
}
