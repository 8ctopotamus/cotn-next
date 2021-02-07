require('dotenv').config()
const axios = require('axios')

const branch = 'dev'
const directories = ['pages']
const privToken = `private_token=${process.env.GITLAB_PERSONAL_ACCESS_TOKEN}`

const fetchGitlabData = async () => {
  for (const dir of directories) {
    const { data: tree } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=${dir}&${privToken}`)

    const jsonFiles = tree
      .filter(({ name }) => name.toLowerCase().includes('.json'))
    
    const contents = []
    for (const obj of jsonFiles) {
      const queryURL = `https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/files/${obj.path}/raw?ref=dev&${privToken}`

      console.log(queryURL)

      const { data: content } = await axios(queryURL)
      contents.push(content)
    }

    console.log(contents)
  }
}

fetchGitlabData()