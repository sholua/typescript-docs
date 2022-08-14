var Directions3;
(function (Directions3) {
    Directions3[Directions3["Up"] = 0] = "Up";
    Directions3[Directions3["Down"] = 1] = "Down";
})(Directions3 || (Directions3 = {}));
Directions3[0]; // Up
Directions3[1]; // Down
// In JS we'll have generated object with IFII function with link on itself
var links;
(function (links) {
    links["youtube"] = "https://youtube.com";
    links["facebook"] = "https://facebook.com";
})(links || (links = {}));
links.youtube; // "https://youtube.com"
