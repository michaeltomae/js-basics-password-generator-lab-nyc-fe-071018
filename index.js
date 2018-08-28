window.addEventListener("load", () => {
  //start your code here
  let outputResult = document.querySelector("output")
  let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split()
  
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = document.getElementById('passwordLength')
    let passwordLength = input.value
    console.log(passwordLength)

  })
});
