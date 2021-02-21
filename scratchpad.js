require('dotenv').config()
const axios = require('axios')

const branch = 'dev'
const directories = ['site-content']
const privToken = `private_token=${process.env.GITLAB_PERSONAL_ACCESS_TOKEN}`

const fetchGitlabData = async () => {
  for (const dir of directories) {
    try {
      const { data: tree } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=${dir}&${privToken}`)
      for (const { name, path } of tree) {
        const { data: files } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=${path}&${privToken}`)
        const jsonFiles = files.filter(({ name }) => name.toLowerCase().includes('.json'))
        for (const obj of jsonFiles) {
          const filepath = obj.path.replace(/\//g, '%2F').replace('.', '%2E')
          const queryURL = `https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/files/${filepath}/raw?ref=dev&${privToken}`
          const { data: content } = await axios(queryURL)
          console.log(name, content)
        }
      }
    } catch(err) {
      throw err
    }
  }
}

fetchGitlabData()