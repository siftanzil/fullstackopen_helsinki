import { useState } from "react";

const App = () => {
   const anecdotes = [
      "If it hurts, do it more often.",
      "Adding manpower to a late software project makes it later!",
      "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Premature optimization is the root of all evil.",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      "The only way to go fast, is to go well.",
   ];

   const findMostVoted = () => {
      return Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
   };

   const [selected, setSelected] = useState(0);
   const [votes, setVotes] = useState({ 0: 0 });
   const [vote, setVote] = useState(0);
   const [mostVoted, setMostVoted] = useState(findMostVoted);

   const handleClick = () => {
      let max = anecdotes.length;
      // console.log(max);
      let random = Math.floor(Math.random() * max);
      // console.log(random);
      setSelected(random);
      votes[random] ? setVote(votes[random]) : setVote(0);
      setMostVoted(findMostVoted);
   };

   const handleVote = () => {
      // console.log(vote);
      setVote(vote + 1);
      // console.log(vote);
      // console.log(votes);
      votes[selected] = vote + 1;
      setVotes(votes);
      setMostVoted(findMostVoted);
      // console.log(vote);
      console.log(votes);
      console.log("Most Voted = " + findMostVoted());
   };

   return (
      <>
         <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <br />
            has {vote} votes
            <br />
            <button onClick={handleVote}>vote</button>
            <button onClick={handleClick}>next anecdote</button>
         </div>
         <div>
            <h1>Anecdote with most votes</h1>
            {anecdotes[mostVoted]}
            <br />
            has {votes[mostVoted]} votes
         </div>
      </>
   );
};

export default App;
