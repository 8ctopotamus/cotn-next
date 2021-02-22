require('dotenv').config()
const axios = require('axios')

const branch = 'dev'
const siteContentDir = 'site-content'
const privToken = `private_token=${process.env.GITLAB_PERSONAL_ACCESS_TOKEN}`

export const getAllGitlabIds = async dir => {
  try {
    const { data: tree } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=${siteContentDir}/${dir}&${privToken}`)
    return tree.map(({name}) => {
      return {
        params: {
          id: name.replace(/\.json$/, '')
        }
      }
    })
  } catch(err) {
    throw err
  }
}

export const getRawData = async (dir, fileName) => {
  const filepath = `${siteContentDir}/${dir}/${fileName}.json`.replace(/\//g, '%2F').replace('.', '%2E')
  const queryURL = `https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/files/${filepath}/raw?ref=dev&${privToken}`
  const { data: content } = await axios(queryURL)
  return content
}