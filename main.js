console.log('Eskere');

document.querySelector('#button').addEventListener('click', bringData)

function bringData() {

    const xhttp  =new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = (this.responseText)
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';


            for(let item of data){
                res.innerHTML += "
                <tr>
                        <td>${item.title}</td>
                        <td>${item.artist}</td>
                    </tr>
                "
            }
        }
    }
    xhttp.open("GET", "Source/catalogue.json", true )
    xhttp.send();
}