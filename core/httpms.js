exports.show500 = function (req, res, err) {
    res.writeHead(500, "Internal Error occurred", { "Content-Type": "application/json" });
    res.write(JSON.stringify({ data: "ERROR: " + err }))
    res.end();
}

exports.showJson = function (req, res, data) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
}
exports.show405 = function (req, res) {
    res.writeHead(405, "Method not supported", { "Content-Type": "application/json" });
    res.write(JSON.stringify({ data: "Method not supported: " }))
    res.end();
}
exports.show404 = function (req, res) {
    res.writeHead(404, "Not found", { "Content-Type": "application/json" });
    res.write(JSON.stringify({ data: "Not found" }))
    res.end();
}

exports.show200 = function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end();
}