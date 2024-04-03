import { useSelector, useDispatch } from 'react-redux'
import { increaseVotes } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.sort((first, second) => (first.votes > second.votes ? -1 : 1))
  )
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(increaseVotes(id))
  }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList