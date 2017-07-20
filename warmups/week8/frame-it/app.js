let frameIt = (str) => {
    let fullFrame = [];
    let starsArr2 = [];
    let starsArr = [];
    let pic = str.split("");

    pic.push("*")
    pic.unshift("*");

    for (let i = 0; i < pic.length; i++) {
        starsArr.push("*")
        starsArr2.push("*")
    }
    fullFrame.push(pic);
    fullFrame.push(starsArr);
    fullFrame.unshift(starsArr2);
    return fullFrame;

};

module.exports = frameIt;