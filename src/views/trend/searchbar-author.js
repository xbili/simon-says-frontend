import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

import HoverPaper from '../../components/hover-paper'

const SearchbarAuthor = ({
  authors,
  onChange,
  onConfirm
}) => (
  <div>
    <HoverPaper className='p-4'>
      <AutoComplete
        fullWidth
        maxSearchResults={10}
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={authors}
        onUpdateInput={onChange}
        onNewRequest={onConfirm}
        floatingLabelText='Search by Author'
      />
    </HoverPaper>
  </div>
)

export default SearchbarAuthor
