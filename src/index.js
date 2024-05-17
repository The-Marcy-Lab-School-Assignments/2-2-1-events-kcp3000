const button = document.getElementById('add-one')

const addHandler = () => {
  const p = (document.getElementById('results'))
  let num = Number(p.innerHTML)
  p.textContent = num += 1
}

button.addEventListener("click", addHandler)

