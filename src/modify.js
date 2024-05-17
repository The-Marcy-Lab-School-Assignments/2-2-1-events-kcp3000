const eleId = document.getElementById("click-button")
const inline = document.getElementById("inline-example")

const clickCounterHandler = () => {
  let count = Number(eleId.dataset.clicks)
  console.log(count)
  count++
  eleId.setAttribute("data-clicks", count)

  let inlineCount = Number(inline.dataset.clicks)
  inlineCount++
  inline.setAttribute("data-clicks", inlineCount)

  if (inlineCount === 1) {
    inline.textContent = `I've been clicked ${inlineCount} time.`
  } else {
    inline.textContent = `I've been clicked ${inlineCount} times!`
  }


  //console.log(count)
  //eleId.setAttribute("data-click", num)
  if (count === 1) {
    eleId.textContent = `I've been clicked ${count} time.`
  } else {
    eleId.textContent = `I've been clicked ${count} times!`
  }

};

eleId.addEventListener("click", clickCounterHandler)
inline.addEventListener("click", clickCounterHandler)

//clickCounterHandler();

const keyClick = document.getElementById("keydown-tracker")

const handleKeydown = (e) => {
  keyClick.textContent = `You pressed ${e.code}`
  console.log(e)
};

document.body.addEventListener('keydown', handleKeydown)

const resultSpan = document.querySelector('#delegation-result');

const handleDelegation = (event) => {
  if (event.target.matches('button')) {
    resultSpan.textContent = event.target.textContent;
  }

  console.log(resultSpan.textContent)
};

resultSpan.addEventListener('click', handleDelegation)

const randomNum = document.getElementById("add-random-num")

const addNewRandomNumber = (event) => {
  const ulNumbers = document.getElementById("random-numbers")
  event.target.matches('random-number')
  const li = document.createElement("li")
  li.textContent = Math.floor(Math.random() * 100)
  document.body.append(li)
  ulNumbers.appendChild(li)

  console.log(li.textContent)
};

randomNum.addEventListener('click', addNewRandomNumber)



const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
