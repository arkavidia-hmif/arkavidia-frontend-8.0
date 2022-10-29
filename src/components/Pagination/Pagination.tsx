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
    console.log(seenPage)
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
    const dotsVisible = pageRange + 2 < maxPage - minPage + 1
    const dotsOnRight = seenPage >= maxPage - pageRange
    const dotsOnLeft = seenPage > minPage + pageRange
    // Jika terdapat lebih banyak halaman dibanding range yang bisa ditunjukkan, maka aka diadakan elemen pertama (atau terakhir tergantung posisi) beserta tombol ... yang disabled
    // shownN adalah mencegah angka yang ditunjukkan adalah batch baru jika jumlah halaman di bawah range
    const flooredN = Math.floor(seenPage / pageRange)
    const shownN = flooredN === 0 ? flooredN : flooredN - (dotsVisible ? 0 : 1)
    const returns = Array.from(
      { length: dotsVisible ? pageRange : maxPage - minPage + 1 },
      (_, i) => shownN * pageRange + i + 1
    ).map(pageNumber => {
      return (
        <PaginationNumber
          onClick={() => setSeenPage(pageNumber)}
          disabled={false}
          number={pageNumber}
          key={pageNumber}
        />
      )
    })
    if (dotsVisible) {
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
        returns.push(dots)
        returns.push(maxPageButton)
      } else if (dotsOnLeft) {
        const minPageButton = (
          <PaginationNumber
            onClick={() => setSeenPage(minPage)}
            disabled={seenPage === minPage}
            number={minPage}
            key={minPage}
          />
        )
        const dots = <PaginationNumber dots={true} />
        returns.unshift(dots)
        returns.unshift(minPageButton)
      }
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
