require('dotenv').config()
const axios = require('axios')

const branch = 'dev'
const privToken = `private_token=${process.env.GITLAB_PERSONAL_ACCESS_TOKEN}`


// const fetchGitlabData = async () => {
//   try {
//     const { data: tree } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=site-content/pages&${privToken}`)


//     // for (const { name, path } of tree) {
//     //   const { data: files } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=${path}&${privToken}`)
//     //   const jsonFiles = files.filter(({ name }) => name.toLowerCase().includes('.json'))
//     //   for (const obj of jsonFiles) {
//     //     const filepath = obj.path.replace(/\//g, '%2F').replace('.', '%2E')
//     //     const queryURL = `https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/files/${filepath}/raw?ref=dev&${privToken}`
//     //     const { data: content } = await axios(queryURL)
//     //     console.log(name, content.id)
//     //   }
//     // }

//     return tree.map(({name}) => {
//       return {
//         params: {
//           id: name.replace(/\.json$/, '')
//         }
//       }
//     })

//   } catch(err) {
//     throw err
//   }
// }



const fetchGitlabData = async () => {
  try {
    const { data: tree } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=site-content&${privToken}`)
    for (const { name, path } of tree) {
      const { data: files } = await axios(`https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/tree?ref=${branch}&path=${path}&${privToken}`)
      const jsonFiles = files.filter(({ name }) => name.toLowerCase().includes('.json'))
      for (const obj of jsonFiles) {
        const filepath = obj.path.replace(/\//g, '%2F').replace('.', '%2E')
        const queryURL = `https://gitlab.codeofthenorth.com/api/v4/projects/118/repository/files/${filepath}/raw?ref=dev&${privToken}`
        const { data: content } = await axios(queryURL)
        console.log(queryURL)
      }
    }
  } catch(err) {
    throw err
  }
}

(async () => {
  console.log(await fetchGitlabData())
})()