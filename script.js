const inputhello = document.querySelectorAll('.colorh');
        const body = document.getElementById('body1');
        const darkbtn = document.getElementById('dark');
        darkbtn.addEventListener('click', () => {
            

            if (body.style.background == "lightgray") {
                body.style.background = "white"
                darkbtn.innerHTML = "Dark"
                darkbtn.style.background = "gray"
                darkbtn.style.color = "white"
            } else {
                body.style.background = "lightgray"
                darkbtn.innerHTML = "Light"
                darkbtn.style.background = "white"
                darkbtn.style.color = "black"
            };
            if(inputhello.style.color == "black"){
                inputhello.style.color = "white"
            }else{
                inputhello.style.color = "black"
            };
        });