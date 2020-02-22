var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;
gameOver = false;

var godzilla = {
    name: "Godzilla",
    health: 120,
    baseAttack: 8,
    attack: 8,
};

var mothra = {
    name: "Mothra",
    health: 100,
    baseAttack: 5,
    attack: 5,
};

var kingkong = {
    name: "King Kong",
    health: 150,
    baseAttack: 20,
    attack: 20,
};

var ghidorah = {
    name: "Ghidorah",
    health: 180,
    baseAttack: 25,
    attack: 25,
}

function initializeCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.baseAttack = chosenCharacter.baseAttack;
    character.attack = chosenCharacter.attack;
}

function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.baseAttack = chosenDefender.baseAttack;
    defender.attack = chosenDefender.attack;
}

function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-available").append($(".enemy-character"));
}

function resetGame() {
    $("#godzilla-character").children(".health").html(godzilla.health);
    $("#mothra-character").children(".health").html(mothra.health);
    $("#king-kong-character").children(".health").html(kingkong.health);
    $("#ghidorah-character").children(".health").html(ghidorah.health);
    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);
    $("#game-message").empty();
    $("#restart").hide();
    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;
    character = {};
    defender = {};
}

$(document).ready(function () {

    $("#restart").hide();

    $("#godzilla-character").on("click", function () {
        console.log("Godzilla is selected");
        if (characterSelected == false) {
            $("#game-message").empty();
            initializeCharacter(godzilla);
            characterSelected = true;
            $("#godzilla-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);
            moveToEnemies();
        }

        else if ((characterSelected == true) && (defenderSelected == false)) {
            if ($("#godzilla-character").hasClass("enemy-character")) {
                $("#game-message").empty();
                initializeDefender(godzilla);
                defenderSelected = true;
                $("#godzilla-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
        }
    });
    $("mothra-character").on("click", function() {
        console.log("Mothra is selected");
        if (characterSelected == false) {
            $("#game-message").empty();
            initializeCharacter(mothra);
            characterSelected = true;
            $("#mothra-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);
            moveToEnemies();
        }

        else if ((characterSelected == true) && (defenderSelected == false)) {
            if ($("#mothra-character").hasClass("enemy-character")) {
                $("#game-message").empty();
                initializeDefender(mothra);
                defenderSelected = true;
                $("#mothra-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
        }
    });
    $("king-kong-character").on("click", function() {
        console.log("King Kong is selected");
        if (characterSelected == false) {
            $("#game-message").empty();
            initializeCharacter(kingkong);
            characterSelected = true;
            $("#king-kong-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);
            moveToEnemies();
        }

        else if ((characterSelected == true) && (defenderSelected == false)) {
            if ($("#king-kong-character").hasClass("enemy-character")) {
                $("#game-message").empty();
                initializeDefender(kingkong);
                defenderSelected = true;
                $("#king-kong-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
        }
    });
    $("ghidorah-character").on("click", function() {
        console.log("Ghidorah is selected");
        if (characterSelected == false) {
            $("#game-message").empty();
            initializeCharacter(ghidorah);
            characterSelected = true;
            $("#ghidorah-character").removeClass("available-character").addClass("chosen-character");
            $("#chosen-character").append(this);
            moveToEnemies();
        }

        else if ((characterSelected == true) && (defenderSelected == false)) {
            if ($("#ghidorah-character").hasClass("enemy-character")) {
                $("#game-message").empty();
                initializeDefender(ghidorah);
                defenderSelected = true;
                $("#ghidorah-character").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
        }
    });
});
