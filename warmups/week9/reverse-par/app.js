let reverse = (str) => {
    let result = [];
    let rev = [];

    str = str.split("(");

    result.push(str[0]);
    str.splice(0, 1)
    str = str.join("");
    str = str.split(")");
    rev.push(str[0]);

    rev = rev
        .toString()
        .split("")
        .reverse()
        .join("");
    // rev=rev.split("").reverse().join("");

    result.push(rev)
    result.push(str[1]);

    result = result.join("")

    return result;

}

module.exports = reverse;