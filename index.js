let messageElement = document.getElementById("message")
let isSubmitted = false
function nameInputChanged(input){
    document.getElementById("currentName").innerHTML = input.value
}

document.getElementById("submit-btn").addEventListener("click", function(){
    if(!isSubmitted){
        isSubmitted = true
        let child = messageElement.firstChild
        messageElement.removeChild(child)
    }
    
    let value = document.getElementById("name-input").value

    let textNode = document.createTextNode(value)

    messageElement.appendChild(textNode)

    let brElement = document.createElement("br")

    messageElement.appendChild(brElement)

})

messageElement.addEventListener("mouseover", function(){
    if (isSubmitted){
        this.style.background = "green"
    }else {
        this.style.background = "red"
    }
})

messageElement.addEventListener("mouseout", function(){
    this.style.background = "white"
})

