// 課題 JS-1: 関数 `parseLTSVLog` を記述してください
function parseLTSVLog(ltsvStr) {
    "strict;"

    var lines = ltsvStr.split("\n").filter(function(line) {
        return line !== "";
    });

    var ret = []
    var obj;
    var entries;
    var kv, key, value;
    var i, j;

    for (i = 0; i < lines.length; ++i) {
        obj = {};

        entries = lines[i].split("\t");
        for (j = 0; j < entries.length; ++j) {
            kv = entries[j].split(":");

            key = kv[0];
            value = kv[1];
            if (key === "epoch") {
                obj[key] = parseInt(value);
            } else {
                obj[key] = value;
            }
        }

        ret.push(obj);
    }

    return ret;
}

// 課題 JS-2: 関数 `createLogTable` を記述してください
