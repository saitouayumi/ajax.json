function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status == 200) {
        console.log(request.response);
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

window.onload = getData;