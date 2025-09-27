function countWords() {
    let textarea = document.getElementById("message");
    let wordCount = document.getElementById("wordCount");

    let words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0);
    let count = words.length;

    if (count > 350) {
        textarea.value = words.slice(0, 350).join(" ");
        count = 350;
    }

    wordCount.textContent = count + "/350 Wörter";
}