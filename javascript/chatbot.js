document.getElementById("inputmsg").focus();
document.getElementsByTagName("body")[0].addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        send();
    }
});
document.getElementById("sendbtn").addEventListener("click",send);

//fucntion for sending message to chatbot
function send(){
    var text = document.getElementById("inputmsg").value;
    if(text == ""){
                
    }
    else{
        //to display the message of the user
        var request  = document.createElement("div");
        request.className = "request";
        request.innerText = text;

        document.getElementsByClassName("msgbox")[0].appendChild(request);
        document.getElementById("inputmsg").value = "";
                
        //to fetch the response of the chatbot using api
        fetch("https://ai-chatbot.p.rapidapi.com/chat/free?message="+text+"&uid=user1", 
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8b18619e36msh1d909fca9da4b3ep111f1fjsn6bfb6c38e348',
                'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
                }
        })
        .then(response => response.json())
        //.then(response => console.log(response.chatbot.response))
        .then(response =>{
            var reply = response.chatbot.response;
            var res = document.createElement("div");
            res.className = "res";
            res.innerText = reply;

            //to display thr response of the chatbot
            setTimeout(function (){
                document.getElementsByClassName("msgbox")[0].appendChild(res);
                var a = document.getElementsByClassName("msgbox")[0].scrollHeight;
                document.getElementsByClassName("msgbox")[0].scrollTop = a+100;
            }, 1000)
        });
    }
    var a = document.getElementsByClassName("msgbox")[0].scrollHeight;
    document.getElementsByClassName("msgbox")[0].scrollTop = a;
} 
