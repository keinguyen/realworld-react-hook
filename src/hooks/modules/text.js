import Hook from '../../helpers/hook-creator'

export default Hook(({ useState }) => {
  const [text, setText] = useState('')

  return { text, setText }
})
