/**
 * Created by MyVyrus on 1/14/15.
 */
//John Kunkle


function makePhrases() {
    var w1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = {empower:"empowered", value:"value-added", oriented:"oriented", focus:"focused", aligned:"aligned"};
    var words3 = {pro:"process", sol:"solution", tipping:"tipping-point", strat:"strategy", vis:"vision"};
    var words1 = {week:"24/7", multi: "multi-tier", tipping:"tipping-point", b:"B-toB", win:"win-win"};
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1.rand1 + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}
makePhrases();