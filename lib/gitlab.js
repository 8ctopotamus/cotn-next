require('dotenv').config()

const axios = require('axios')
const apiBaseURL = `https://gitlab.codeofthenorth.com/api/v4/projects/118/repository`
const branch = 'dev'
const siteContentDir = 'site-content'
const privToken = `private_token=${process.env.GITLAB_PERSONAL_ACCESS_TOKEN}`

export const getAllGitlabIds = async dir => {
  try {
    const { data: tree } = await axios(`${apiBaseURL}/tree?ref=${branch}&path=${siteContentDir}/${dir}&${privToken}`)
    return tree.map(({name}) => {
      const pathName = (name === 'index' ? '/' : name).replace(/\.json$/, '')
      return {
        params: {
          id: pathName
        }
      }
    })
  } catch(err) {
    throw err
  }
}

export const getRawData = async (dir, fileName) => {
  const filepath = `${siteContentDir}/${dir}/${fileName}.json`.replace(/\//g, '%2F').replace('.', '%2E')
  const queryURL = `${apiBaseURL}/files/${filepath}/raw?ref=dev&${privToken}`
  const { data: content } = await axios(queryURL)
  return content
}

export const getAllDirFilesContentsAndMeta = async dir => {
  try {
    const { data: tree } = await axios(`${apiBaseURL}/tree?ref=${branch}&path=${siteContentDir}/${dir}&${privToken}`)
    const combinedData = []
    for (const fileObj of tree) {
      const filepath = `${fileObj.path}`.replace(/\//g, '%2F').replace('.', '%2E')
      const queryURL = `${apiBaseURL}/files/${filepath}/raw?ref=dev&${privToken}`
      const { data: content } = await axios(queryURL)
      combinedData.push({ ...fileObj, content })
    }
    return combinedData
  } catch(err) {
    throw err
  }
}