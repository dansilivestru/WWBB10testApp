window.addEventListener("load", function () {
    document.getElementById("start").addEventListener("click", start);
});

function start() {
    var urls = [
        "https://google.com"
        //"http://ripple.tinyhippos.com",
        //"http://bistixoft.com/paydiv/server/rpc.php?_=1348504822212",
        //"https://google.com"
    ]

    urls.forEach(function (item) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", item, false);
        xhr.send();
        console.log(item);
        console.log(xhr.response);
    });
}
