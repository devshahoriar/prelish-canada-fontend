import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/slices/counterSlice'

const Test = () => {
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.counter)
  return (
    <div>
      <h1>value is : {value}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
    </div>
  )
}

export default Test
