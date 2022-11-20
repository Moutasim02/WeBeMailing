const axios = () => require('axios')
const API_KEY = 'EFMW9SA8023D-D0JTYUEI' // regenerated...
const API_URL = 'https://api.rytr.me/v1'

function load1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      var tones = JSON.parse(this.responseText);
        document.getElementById("result").innerHTML = tones.data[0].name;
  };
  xhttp.open("GET", "./tones.json", true);
  xhttp.send();
  return tones
}

