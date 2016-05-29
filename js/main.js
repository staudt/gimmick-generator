
function getRandom(list) {
    return list[Math.floor( Math.random()*list.length )]
}

function generate() {
    reveals = ["",
    	"illegitimate",
    	"soon to be revealed"
    ];


    callsforexcuse = ["Wait!",
        "Hold on!",
        "No, no, no!"
    ];

    excuses = [
    	"I'm Vince McMahon's illegitimate son, so I demand a",
    	"I know a Stephanie McMahon dirty secret and I demand a",
        "I have a winning lawsuit againt WWE and want a",
        "I'm friends with JBL, therefore I get a"
    ];

    gimmick = [
        "a " + getRandom(jobs),
        "the " + getRandom(reveals) +" son of " + getRandom(famousWrestlers),
        "the " + getRandom(jobs),
        "the second coming of " + getRandom(famousWrestlers),
        "the " + getRandom(categories),
        "a " + getRandom(categories)
    ];

    document.getElementById("name").innerHTML = getRandom(firstNames) + ' ' + getRandom(secondNames);
    document.getElementById("gimmick").innerHTML =getRandom(gimmick);
    document.getElementById("callforexcuse").innerHTML =getRandom(callsforexcuse);
    document.getElementById("excuse").innerHTML =getRandom(excuses);
}

generate();