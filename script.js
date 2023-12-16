let password = document.getElementById("password")

function genPassword (){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,<>;:?&*!@#$%'"
    let passwordLength = 12
    let password = ""

    for ( let i=0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber,randomNumber + 1)
    }

    document.getElementById("password").value= password
}

function copyPass() {
    
    let copyText =  document.getElementById("password")
    copyText.select()
    copyText.setSelectionRange(0,999)
    document.execCommand("copy")
    

  }

  function darklight () { 
    let element = document.body
    element.dataset.bsTheme =
    element.dataset.bsTheme == "dark" ? "light" : "dark"
        
   }