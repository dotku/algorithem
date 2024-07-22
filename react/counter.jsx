// React Counter Application 
// A counter variable which is a number value is displayed on the screen
// 2 Buttons + and - 
// Clicking on + should increment the counter by 1
// Clicking on - should decrement the counter by 1
// At the start the counter is at 0 and it can go -ve or +ve

function Counter() {
	const [number, setNumber] = useState(0);
  const onPlusClick = () => {
  	setNumber(--number);
  }
  const onMinClic = () => {
  	setNumber(++number);
  }
	return <div>
  	{number}
  	<button onClick={onPlusClick}>+</button>
    <button onClick={onMinClick}>-</button>
  </div>
}
