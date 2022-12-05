import Svg, { SvgProps } from './Svg'

const ContactPhoneIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <path d="M762 598q-16-42-16-86t16-86h70l64-84-84-86q-36 28-71 78t-47 92-12 86 12 86 47 92 71 78l84-86-64-84h-70zM598 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM342 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM938 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-852q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h852z" />
    </Svg>
  )
}

export default ContactPhoneIcon
