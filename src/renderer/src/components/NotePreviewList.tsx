import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import NotePreview from './NotePreview'

const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}

export default NotePreviewList
