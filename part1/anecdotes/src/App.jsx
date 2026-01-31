import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const topIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[topIndex]}</p>
      <p>has {votes[topIndex]} votes</p>
    </div>
  )
}

export default App
