import { useState, useRef, useImperativeHandle, forwardRef, useEffect } from "react";
import { createPortal } from "react-dom"; // used to change the location of a jsx component within the current DOM.
import Section from "./Section";

// ✨ TO GET MORE EMOJI USE WIN + '.'

function TimeChallenger({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialogRef = useRef(); // ✅ Correctly using ref

  // useEffect(() => {
  //   debugger;
  // }, [timeRemaining]);

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current?.open(); // ✅ Prevents error if ref is undefined and use the open method within the ResultModal component (exposes the method because of the useImperativeHandle function)
  }
  
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); 
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialogRef.current?.open(); // ✅ Safe access
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal 
        ref={dialogRef} 
        result="lost" 
        targetTime={targetTime} 
        remainingTime={timeRemaining} 
        onReset={handleReset} 
      />
      <Section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          <RenderChallengeParagraph number={targetTime} />
        </p>
        <p>
          <button onClick={timeRemaining < targetTime * 1000 ? handleStop : handleStart}>
            {timeRemaining < targetTime * 1000 ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeRemaining < targetTime * 1000 ? "active" : undefined}>
          {timeRemaining < targetTime * 1000 ? "Time is running" : "Timer is inactive"}
        </p>
      </Section>
    </>
  );
}

const ResultModal = forwardRef(({ result, targetTime, remainingTime, onReset }, ref) => {
  // ✨ used new ref instance
  const newDialogRef = useRef();

  // computed value
  const userLost = remainingTime <= 0; 
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  
  useImperativeHandle(ref, () => ({
    open: () => {
      newDialogRef.current?.showModal(); // ✅ Safe access
    }
  }));

  return createPortal(
    // ✨ use the new ref instance instead of the old one.
    <dialog ref={newDialogRef} className="result-modal" onClose={onReset}>
      { userLost && <h2>You Lost</h2> }
      { !userLost && <h2>Your Score: {score}</h2> }
      <p>The Target Time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left.</p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal") // putting this code inside the modal id in the index.html file
  );
});

function RenderChallengeParagraph({ number }) {
  let numberArg = Number(number);

  if (isNaN(numberArg)) {
    return `Number is a: ${numberArg}`;
  }

  return `${number} ${numberArg > 1 ? "seconds" : "second"}`;
}

export default TimeChallenger;


// old code where there are notes
// import Section from "./Section";
// import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// function TimeChallenger({ title, targetTime }) {
//   const [timerExpired, setTimerExpired] = useState(false); // not used
//   const [timerStarted, setTimerStarted] = useState(false); // not used 
//   const [ timeRemaining, setTimeRemaining ] = useState(targetTime * 1000);
//   const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
//   // Note: instead of defining a timer outside this function using ref will have reference to its own component when you are clicking and using useRef is perfect for this. It will not reset and store it behind the scene by react like state.
//   // Because "refs" are not re-created when the component function is executed again. And they're also not shared across component instances.
//   const timer = useRef();
//   const dialogRef = useRef();


//   if (timeRemaining <= 0) {
//     clearInterval(timer.current);
//     setTimeRemaining(targetTime * 1000);
//     dialogRef.current.open();
//   }


//   const handleStart = () => {
//     // setTimerStarted(true);
//     // adding useRef so that it doesn't reset and react will store this values behind the scene by the react. When clicking on multiple component at once.
//     // timer.current = setTimeout(() => {
//     //   setTimerExpired(true);

//     //   dialogRef.current.showModal();
//     //   // dialogRef.current.open();

//     // }, targetTime * 1000);

//     timer.current = setInterval(() => {
//       setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); 
//     }, 10)
//   }

//   const handleStop = () => {
//     // clearTimeout(timer.current);
//     // setTimerStarted(false);

//     clearInterval(timer.current);
//     dialogRef.current.open();
//   }

//   return (
//     <>
//       {
//         timerStarted &&
//         // for some reason if I add this component to another file it doesn't work
//         <ResultModal 
//           dialogRef={dialogRef} 
//           result="lost" 
//           targetTime={targetTime} 
//           setTimerStarted={setTimerStarted} 
//         />
//       }

//       <Section className="challenge">
//         <h2>{title}</h2>
//         <p className="challenge-time">
//           <RenderChallengeParagraph number={targetTime} />
//         </p>
//         <p>
//           {/* <button onClick={timerStarted ? handleStop : handleStart}> */}
//           <button onClick={timerIsActive ? handleStop : handleStart}>
//             {timerStarted ? "Stop" : "Start"} Challenge
//           </button>
//         </p>
//         {/* <p className={timerStarted ? "active" : undefined}> */}
//         <p className={timerIsActive ? "active" : undefined}>
//           {/* {timerStarted ? "Time is running" : "Timer is inactive"} */}
//           {timerIsActive ? "Time is running" : "Timer is inactive"}
//         </p>
//       </Section>
//     </>
//   );
// }

// function RenderChallengeParagraph({ number }) {
//   let numberArg = Number(number);

//   if (isNaN(numberArg)) {
//     return `Number is a: ${numberArg}`;
//   }

//   return `${number} ${numberArg > 1 ? "seconds" : "second"}`;
// }

// created a new one to match Maximilian Code
// const ResultModal = forwardRef((props, ref) => {
//   const { result, targetTime } = props;
//   const dialogRef = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialogRef.current?.showModal();
//       }
//     }
//   })

//   return (
//     <dialog ref={dialogRef} className="result-modal">
//       <h2>Your {result}</h2>
//       <p>The Target Time was <strong>{targetTime} seconds.</strong></p>
//       <p>You stopped the timer with x seconds left.</p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// })

// Note this will only work on REACT 19 and above you need to use the forwardref and useImperativeHandle methods
// function ResultModal({ dialogRef, result, targetTime, setTimerStarted }) {
  
//   return (
//     <dialog ref={dialogRef} className="result-modal">
//       <h2>
//         Your {result}
//       </h2>
//       <p>
//         The target time was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>You stopped the timer with x seconds left.</p>
//       <form method="dialog">
//         <button onClick={() => setTimerStarted(false)}>
//           Close
//         </button>
//       </form>
//     </dialog>
//   );
// }

// older react project that uses forward ref
// import { forwardRef, useImperativeHandle } from "react";
// const ResultModel = forwardRef((props, ref) => {
//   // assign a new ref
//   const dialog = useRef(); // can be change

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       }
//     }
        // open() {
        //   dialog.current.showModal();
        // }
//   })
//   // ...code from result modal continuation
    // <dialog ref={dialog} className="result-modal"></dialog>
// })



// export default TimeChallenger;