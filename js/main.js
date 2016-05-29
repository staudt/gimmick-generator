
function getRandom(list) {
    return list[Math.floor( Math.random()*list.length )]
}

function generate() {
    reveals = ["", "", "",
    	"illegitimate",
    	"soon to be revealed"
    ];


    callsforexcuse = [
        "Wait!",
        "Hold on!",
        "Stop!",
        "No, no, no!",
        "Oh no!"
    ];

    excuses = [
    	"I'm Vince McMahon's illegitimate son, so I demand a",
    	"I know a Stephanie McMahon dirty secret and I demand a",
        "I have a winning lawsuit againt the WWE but I will settle for a",
        "I'm friends with JBL, therefore I get a",
        "I play golf with Vince and I'll get a",
        "My dad is an advertiser for RAW and I get a",
        "I'm the last WWE stockholder besides Vince. I deserve a",
        "Seriously, this is fake sports. Just come up with something better and"
    ];

    gimmick = [
        "a " + getRandom(jobs),
        "the " + getRandom(reveals) +" son of " + getRandom(famousWrestlers),
        "the " + getRandom(jobs),
        "the second coming of " + getRandom(famousWrestlers),
        "the " + getRandom(categories),
        "a " + getRandom(categories)
    ];

    var myname = getRandom(firstNames) + ' ' + getRandom(secondNames);
    var mygimmick = getRandom(gimmick);
    document.getElementById("name").innerHTML = myname;
    document.getElementById("gimmick").innerHTML = mygimmick;
    document.getElementById("callforexcuse").innerHTML = getRandom(callsforexcuse);
    document.getElementById("excuse").innerHTML = getRandom(excuses);
    document.getElementById("tweetgimmick").setAttribute("href", "https://twitter.com/intent/tweet?text=I%20just%20signed%20with%20NXT!%20My%20name%20will%20be%20" + myname + "%20and%20I%27ll%20be%20" + mygimmick + ". http%3A%2F%2Fstaudt.github.io%2Fgimmick-generator%2F");
}

generate();