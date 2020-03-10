function spanTitle() {
    let title = document.querySelector('.title');
    let text = title.innerHTML.trim();
    let letter = text.split('');
    let spans = letter.map(
        function(letter) {
        let elem = document.createElement("span");
        elem.innerText = letter;
        return elem;
        }
    );
title.innerHTML = '';
spans.forEach(span => title.appendChild(span));

}
spanTitle();
