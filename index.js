// Add your code here

// function pinError(error){
//     let messageToPend = document.createElement('p')
//     let errorMessage = error.message
//     let docBody = document.querySelector('body')
//     messageToPend.textContent=errorMessage
//     docBody.append(messageToPend)
// }
function submitData(username,useremail){
    let newSubmission = {
        name: `${username}`,
        email: `${useremail}`
    }

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept:'application/json',
        },
        body:JSON.stringify(newSubmission)
    })
    .then(res => res.json())
    .then(data => {
        let toBePended = document.createElement('p')
        toBePended.textContent=`${data.id}`
        let theBody = document.querySelector('body')
        theBody.append(toBePended)
    } )
    .catch(function (e) {
        let errorMessageToPend = document.createElement('p')
        errorMessageToPend.textContent=`${e.message}`
        let theBody = document.querySelector('body')
        theBody.append(errorMessageToPend)
    })
    }