const words = ["engine", "Linkedin", "login", "hello", "Java", "Amsterdam", "123", "90"];

var text = words.sort()
     .filter(word => word.charAt(0) >= "0" && word.charAt(0) <= "Z")
     .join(" <br/>");

     document.getElementById("words").innerHTML = text;

