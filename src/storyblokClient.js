import StoryblokClient from 'storyblok-js-client'

const client = new StoryblokClient({
  accessToken: '7rMbcMN6tS8Q0ZwEZnZ8Wgtt' // replace with your accessToken
})

export const defaultRequestConfig = {
  version: 'draft'
}

export default client
