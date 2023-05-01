export type talkFormat = 'intro' | 'presentation' | 'workshop' | 'panel' | 'break' | 'side'

export interface Talk {
  id: string
  stage: string
  start: string
  length: string
  format: string
  title: string
  description: string
  speakers: string[]
}

export interface Speaker {
  id: string
  name: string
  description: string
  img: string
}
