// 課題 JS-3 の実装をここに記述してください。
(function() {
    var btn = document.getElementById("submit-button");
    btn.addEventListener("click", function() {
        var content = document.getElementById("log-input");
        var ltsv = parseLTSVLog(content.value);
        var tc = document.getElementById("table-container");
        createLogTable(tc, ltsv);
        return true;
    }, false);
}());
