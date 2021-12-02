function clear_fields() {
    var dialog = confirm("yes or cancel");
    if (dialog == true) {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("city").value = "";
    }
} 