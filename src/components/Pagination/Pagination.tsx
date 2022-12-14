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

  function numberButtons(): JSX.Element[] {
    const underCapacity = maxPage - minPage < pageRange
    const visibleMinimum = underCapacity
      ? minPage
      : seenPage + pageRange > maxPage
      ? maxPage - pageRange + 1
      : seenPage
    const visibleMaximum = underCapacity
      ? maxPage
      : visibleMinimum + pageRange - 1 > maxPage
      ? maxPage
      : visibleMinimum + pageRange - 1
    const dotsOnLeft = visibleMinimum > minPage
    const dotsOnRight = visibleMaximum < maxPage
    const returns = Array.from(
      {
        length: underCapacity
          ? maxPage - minPage + 1
          : visibleMaximum - visibleMinimum + 1
      },
      (_, i) => visibleMinimum + i
    ).map(pageNumber => {
      return (
        <PaginationNumber
          onClick={() => setSeenPage(pageNumber)}
          disabled={false}
          number={pageNumber}
          key={pageNumber}
          active={seenPage === pageNumber}
        />
      )
    })
    if (dotsOnRight) {
      const maxPageButton = (
        <PaginationNumber
          onClick={() => setSeenPage(maxPage)}
          disabled={seenPage === maxPage}
          number={maxPage}
          key={maxPage}
        />
      )
      const dots = <PaginationNumber dots={true} />
      if (visibleMaximum + 1 < maxPage) {
        returns.push(dots)
      }
      returns.push(maxPageButton)
    }
    if (dotsOnLeft) {
      const minPageButton = (
        <PaginationNumber
          onClick={() => setSeenPage(minPage)}
          disabled={seenPage === minPage}
          number={minPage}
          key={minPage}
        />
      )
      const dots = <PaginationNumber dots={true} />
      if (visibleMinimum - 1 > minPage) {
        returns.unshift(dots)
      }
      returns.unshift(minPageButton)
    }
    return returns
  }

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <PaginationButton
        onClick={decrementSeenPage}
        disabled={seenPage === minPage}
        isLeft={true}
      />
      <div className="flex flex-row gap-1 items-center justify-center">
        {numberButtons()}
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
