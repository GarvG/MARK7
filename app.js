var input=document.querySelector(".text-input");
var btn=document.querySelector(".btn-translate");
var output=document.querySelector(".output-txt");

btn.addEventListener("click",eventhandler);


var api="https://api.funtranslations.com/translate/emoji.json"+"?"+"text=";
function url(text)
{
    return api+text;
}

function errorHAndler(error) {
    console.log("Error occurred", error);
}
function eventhandler()
{

    var txti=input.value;
    fetch(url(txti))
    
        .then(respone=>respone.json())
        .then(json=>
            {
            var translated=json.contents.translated
            output.innerHTML=translated;
            })
            .catch(errorHAndler)
   
}

