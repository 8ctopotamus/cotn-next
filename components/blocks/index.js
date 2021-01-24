import BlockWithCTA from './organisms/BlockWithCTA'
import ClientsBlock from './organisms/ClientsBlock'
import COTNFullLogo from './organisms/COTNFullLogo'
import WorkBlock from './organisms/WorkBlock'

const renderBlock = ({ type, ...props }, i ) => {
  const key = `${type}_${props.name}`
  let Block = <div className="container mx-auto">No block chosen.</div>
  switch(type) {
    case 'COTNFullLogo':
      Block = <COTNFullLogo {...props} key={key} />
      break
    case 'WorkBlock':
      Block = <WorkBlock {...props} key={key} />
      break
    case 'BlockWithCTA':
      Block = <BlockWithCTA {...props} key={key} />
      break
    case 'ClientsBlock':
      Block = <ClientsBlock {...props} key={key} />
      break
  }
  return Block
}

const BlockRenderer = ({ organisms }) => organisms 
  ? organisms.map(o => renderBlock(o)) 
  : null

export default BlockRenderer