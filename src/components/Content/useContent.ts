import Resume from '../../DataBase'
import { useMemo, useState } from 'react'

export type blockNames = ''

// export interface resumeBlock {
//
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useContent = () => {
  const [blocks, setBlocks] = useState(null)
  void useMemo(async () => {
    const getBlocks = await Resume

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    if (getBlocks?.length) {
      setBlocks(getBlocks[0])
    }
  },
  [])

  return {blocks}
}
