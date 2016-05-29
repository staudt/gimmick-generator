
function getRandom(list) {
    return list[Math.floor( Math.random()*list.length )]
}

reveals = ["",
	"illegitimate",
	"soon to be revealed"
];

excuses = [
	"I'm Vince McMahon's illegitimate son, so I demand a",
	"I know a Stephanie McMahon dirty secret and I demand a"
];

gimmick = [
    "a " + getRandom(jobs),
    "the " + getRandom(reveals) +" son of " + getRandom(famousWrestlers),
    "the " + getRandom(jobs),
    "the second comming of " + getRandom(famousWrestlers),
    "the " + getRandom(categories),
    "a " + getRandom(categories)
];

document.getElementById("name").innerHTML = getRandom(firstNames) + ' ' + getRandom(secondNames);
document.getElementById("gimmick").innerHTML =getRandom(gimmick);
document.getElementById("excuse").innerHTML =getRandom(excuses);
