//import React and useState to utilize hooks
import React, { useState } from "react";

//Counter component
export function Counter() {
	//Using state hook here
	const [count, setCount] = useState(0);

	//return component HTML
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
		</div>
	);
}
