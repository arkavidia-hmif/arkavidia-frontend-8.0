import Svg, { SvgProps } from './Svg'

const EditIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 24 25" {...props}>
      <path
        d="M14.0588 9.52L14.9788 10.44L5.91878 19.5H4.99878V18.58L14.0588 9.52ZM17.6588 3.5C17.4088 3.5 17.1488 3.6 16.9588 3.79L15.1288 5.62L18.8788 9.37L20.7088 7.54C21.0988 7.15 21.0988 6.52 20.7088 6.13L18.3688 3.79C18.1688 3.59 17.9188 3.5 17.6588 3.5ZM14.0588 6.69L2.99878 17.75V21.5H6.74878L17.8088 10.44L14.0588 6.69Z"
        fill="white"
      />
    </Svg>
  )
}

export default EditIcon
