window.addEventListener("load", () => {
  //start your code here
  let outputResult = document.querySelector("output")
  let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
  let upperCaseCharcters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let numberCharacters = "0123456789".split('')
  let specialCharacters = " !#$%&()*+,-./:;<=>?@[\]^_{|}~".split('')
  
  document.addEventListener('submit', (event) => {
    event.preventDefault()
   
  let input = document.getElementById('passwordLength')
  let passwordLength = input.value
  if (passwordLength <4) {
    passwordLength = 4
  }
  let newPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    newPassword += lowerCaseCharacters[
      Math.floor(Math.random() * lowerCaseCharacters.length)
      ]
  
    newPassword += upperCaseCharacters[
      Math.floor(Math.random() * upperCaseCharacters.length)
      ]

    newPassword += numberCharacters[
      Math.floor(Math.random() * numberCharacters.length)
      ]

    newPassword += specialCharacters[
      Math.floor(Math.random() * specialCharacters.length)
      ]
  }
  console.log(newPassword)
  })
});