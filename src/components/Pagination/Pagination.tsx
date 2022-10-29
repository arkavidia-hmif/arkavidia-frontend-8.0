import { useState, useEffect } from 'react'
import PaginationButton from './PaginationButton'
import PaginationNumber from './PaginationNumber'

export interface PaginationProps {
  minPage: number
  maxPage: number
  runOnPageChange: (arg: number) => void
  pageRange?: number
}

const Pagination = ({
  maxPage,
  minPage,
  runOnPageChange,
  pageRange = 5
}: PaginationProps): JSX.Element => {
  const [seenPage, setSeenPage] = useState(minPage)
  useEffect(() => {
    runOnPageChange(seenPage)
  }, [seenPage])

  function incrementSeenPage(): void {
    setSeenPage(prevSeenPage =>
      prevSeenPage === maxPage ? prevSeenPage : prevSeenPage + 1
    )
  }

  function decrementSeenPage(): void {
    setSeenPage(prevSeenPage =>
      prevSeenPage === minPage ? prevSeenPage : prevSeenPage - 1
    )
  }
  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <PaginationButton
        onClick={decrementSeenPage}
        disabled={seenPage === minPage}
        isLeft={true}
      />
      <div className="flex flex-row gap-1 items-center justify-center">
        {Array.from(
          { length: pageRange },
          (_, i) => Math.floor(seenPage / pageRange) * pageRange + i
        ).map(pageNumber => {
          return (
            <PaginationNumber
              onClick={() => setSeenPage(pageNumber)}
              disabled={false}
              number={pageNumber}
              key={pageNumber}
            />
          )
        })}
      </div>
      <PaginationButton
        onClick={incrementSeenPage}
        disabled={seenPage === maxPage}
        isLeft={false}
      />
    </div>
  )
}

export default Pagination
