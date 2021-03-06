import React from 'react'
import Chip from 'material-ui/Chip'
import uuidv4 from 'uuid/v4'

const Pills = ({
  selected,
  onDelete,
  ...props
}) => (
  <div 
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
    {...props}
  >
    {selected.map(author => (
      <Chip
        key={uuidv4()}
        style={{ margin: 4 }}
        onRequestDelete={onDelete(author)}
      >
        {author}
      </Chip>
    ))}
  </div>
)

export default Pills
