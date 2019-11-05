import Hook from '../../helpers/hook-creator'

export default Hook(({ useState }) => {
  const [tags, setTags] = useState([])

  return [tags, setTags]
})
