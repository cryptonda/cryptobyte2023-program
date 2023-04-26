export type talkFormat = 'intro' | 'presentation' | 'workshop' | 'panel' | 'break'

export interface Talk {
  id: string
  format: string
  title: string
  description: string
  speakers: string[]
}
