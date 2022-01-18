function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    switch (true) {
        case string === "Let's have dinner together!":
            return "I would love to!";
        case string === shout(string):
            return "YES INDEED!";
        case string === whisper(string):
            return "I can't hear you!";
        default:
            console.log("no defined response");
            break;
    }
}
