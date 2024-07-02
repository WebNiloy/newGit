document.getElementById("change").addEventListener("click",()=>{
    const inputField = document.getElementById("inputField");
    const li = document.createElement("li");
    li.innerHTML = inputField.value
    document.getElementById('comment-list').appendChild(li)
    inputField.value = ' '
})