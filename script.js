const editor = document.getElementById("editor");

function newFile() {
    editor.value = "";
}

function saveFile() {
    const text = editor.value;

    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "document.txt";
    a.click();
}

function openFile(event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        editor.value = e.target.result;
    };

    reader.readAsText(file);
}