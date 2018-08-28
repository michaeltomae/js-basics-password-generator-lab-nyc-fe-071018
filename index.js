window.addEventListener("load", () => {
  //start your code here
  let outputResult = document.querySelector("output")
  let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
  let upperCaseCharcters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let numberCharacters = "0123456789".split('')
  let specialCharacters = "".split('')
  
  document.addEventListener('submit', (event) => {
    event.preventDefault()
   
    let input = document.getElementById('passwordLength')
    let passwordLength = input.value
   
  })
});