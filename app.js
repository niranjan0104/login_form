let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let message = document.getElementById('message');
let flag = true;

function formSubmit () {
    if (name.value.length == '') {
        document.getElementById('name-error').innerHTML = 'enter name'
        flag = false
    } else if (name.value.length < 3) {
        document.getElementById('name-error').innerHTML = 'need more then 3 char'
        flag = false
    } else {
        document.getElementById('name-error').innerHTML = ''
        flag = true
    }

    if (phone.value.length == '') {
        document.getElementById('num-error').innerHTML = 'enter valid number'
        flag = false
    } else if (phone.value.length < 10) {
        document.getElementById('num-error').innerHTML = 'enter full number'
        flag = false
    } else {
        document.getElementById('num-error').innerHTML = ''
        flag = true
    }

    if (email.value.length == '') {
        document.getElementById('email-error').innerHTML = 'enter your email'
        flag = false
    } else {
        document.getElementById('email-error').innerHTML = ''
        flag = true
    }

    if (message.value.length == '') {
        document.getElementById('message-error').innerHTML = 'enter valid message'
        flag = false
    } else if (message.value.length < 15) {
        document.getElementById('message-error').innerHTML = 'enter more than 15 words'
        flag = false
    } else {
        document.getElementById('message-error').innerHTML = ''
        flag = true
    }
    if (flag) {
        return true
    } else {
        return false
    }
}