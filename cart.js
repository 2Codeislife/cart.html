

function init () {
    var btn = document.getElementById('btn');
    btn.onclick = handleEmail;
}

function handleEmail () {
    var mail = document.getElementById('email')
    var checkEmail = /[gmail][yahoo]/;
    var num = document.getElementById('number')
    var numCheck = /(?:(\+1)[ -])?\(?\d{3}\)?[ -]?(\d{3})[ -]?(\d{4})/
    if (checkEmail.test(mail.value) && numCheck.test(num.value)) {
        console.log("customer used email and phone number")
    } else if 
        (checkEmail.test(mail.value)) 
            console.log("customer used email")     
     else if 
         (numCheck.test(num.value)) {
            console.log("customer used number")
        }
    else {
        alert("incorrect email or phone number")
    }
}
//function handleCondition () {
  //  var type = document.getElementById('type')
  //  var typetxt = type.options[type.selectedIndex].text;
  //  var size = document.getElementById('size')
  //  var sizetxt = size.options[size.selectedIndex].text;
  //  var condition = document.getElementById('condition')
  //  var contxt = condition.options[condition.selectedIndex].text;
  //  info.push(typetxt, sizetxt, contxt)
  //  handleComment()
//}
//function handleComment () {
 //   var comment = document.getElementById('comment').value;
  //  info.push(comment)
  //  handleConfirm()
//}

//function handleConfirm () {
 //   var contactInfo = document.getElementById('contactInfo')
 //   var node = document.createTextNode(info[0], info[1])
 //   contactInfo.appendChild(node);
 //   console.log(node);
//}
//var phoneNumber = info[0];
 
//var information = "contact information:"

//function handleConfirm () {
    // removing feildset
 //   console.log(info[0])
   // const elmnt = document.getElementById('formDlt'); elmnt.remove();
    //console.log('remove')
 //   var add = document.getElementById('sendCon')
  //  var grabInfo = document.createTextNode(information)
  //  add.appendChild(grabInfo);
//}
window.onload = init();