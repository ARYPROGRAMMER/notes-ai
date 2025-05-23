import React, { ComponentProps } from 'react'
import { DeleteNote, NewNoteButton } from '@/components'

export const ActionButtonsRow = ({...props}: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton/>
      <DeleteNote />
    </div>
  )
}

