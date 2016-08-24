var md = new MobileDetect(window.navigator.userAgent);
if(!md.phone()) {
    document.getElementById("main").innerHTML = "This site only works on phones";
}

var pixelRatio = window.devicePixelRatio || 1;
var width = screen.width * pixelRatio;
var height = screen.height * pixelRatio;
var headerHeight = height * 0.27;
var bodyHeight = height * 0.57;
var timeHeight = bodyHeight / 10;
var timeWidth = Math.floor(timeHeight * 0.8);
var timeCenter = timeWidth / 2;
var blockOutline = 2;
var bodyWidth = width - timeWidth - (blockOutline / 2);
var stages = 6;
var blockWidthDefault = bodyWidth / stages;
var footerHeight = height - (headerHeight + bodyHeight);

// colors
var bgColor = "#333";
var gridColor = "#fff";
var labelColor = "000";

var blue = "#2596ff";
var purple = "#a700e5";
var green = "#17e202";
var pink = "#e5008e";
var orange = "#ff8c25";
var red = "#ff4545";
var waterColor = "#5ae6fe";

function Artist(name, stage, start, end) {
  //constructor(name, stage, start, end) {
    this.name = name.toUpperCase();
    this.startTime = start;
    this.endTime = end;
    switch (stage) {
        case "Hard":
            this.stageNum = 0;
            this.stageColor = blue;
            break;
        case "Harder":
            this.stageNum = 1;
            this.stageColor = orange;
            break;
        case "Purple":
            this.stageNum = 2;
            this.stageColor = purple;
            break;
        case "Pink":
            this.stageNum = 3;
            this.stageColor = pink;
            break;
        case "Green":
            this.stageNum = 4;
            this.stageColor = green;
            break;
        case "Smirnoff":
            this.stageNum = 5;
            this.stageColor = red;
        default:
    }
    this.stage = stage;
    var startDec = start.split(":");
    var endDec = end.split(":");
    this.start = parseInt(startDec[0]) + (parseInt(startDec[1]) / 60) - 1;
    this.duration = parseInt(endDec[0]) + (parseInt(endDec[1]) / 60) - 1 - this.start;
  //}
}
var artists;

function saturday() {
    artists = [
        new Artist("The Interns", "Smirnoff", "1:00", "1:30"),
        new Artist("Reid Stefan", "Green", "1:00", "2:00"),
        new Artist("Graves", "Purple", "1:00", "2:15"),
        new Artist("Sita Abellan", "Pink", "1:00", "2:00"),
        new Artist("Lisbona Sisters", "Smirnoff", "1:30", "3:10"),
        new Artist("Drezo", "Hard", "2:00", "3:05"),
        new Artist("Dombresky", "Harder", "1:45", "2:45"),
        new Artist("Ape Drums", "Green", "2:00", "3:00"),
        new Artist("Will Clarke", "Pink", "2:00", "3:00"),
        new Artist("Unlike Pluto", "Purple", "2:15", "3:30"),
        new Artist("Ardalan", "Pink", "3:00", "4:00"),
        new Artist("Salva", "Green", "3:00", "4:15"),
        new Artist("Rezz", "Harder", "2:45", "4:00"),
        new Artist("Wax Motif", "Hard", "3:05", "4:05"),
        new Artist("Jerry Folk", "Purple", "3:30", "4:30"),
        new Artist("Ape Drums", "Smirnoff", "3:10", "3:40"),
        new Artist("Drezo", "Smirnoff", "3:40", "4:30"),
        new Artist("Super Flu", "Pink", "4:00", "5:00"),
        new Artist("Mija", "Hard", "4:05", "5:05"),
        new Artist("Malaa", "Harder", "4:05", "5:10"),
        new Artist("Josh Pan", "Green", "4:15", "5:30"),
        new Artist("DJ Dodger Stadium", "Purple", "4:30", "5:30"),
        new Artist("Ardalan", "Smirnoff", "4:30", "5:10"),
        new Artist("Justin Jay", "Pink", "5:00", "6:00"),
        new Artist("Claude Vonstroke", "Smirnoff", "5:10", "5:55"),
        new Artist("Destructo", "Hard", "5:05", "6:05"),
        new Artist("Louis The Child", "Purple", "5:30", "6:40"),
        new Artist("San Holo", "Green", "5:30", "6:45"),
        new Artist("Anderson .Paak", "Harder", "5:35", "6:35"),
        new Artist("Justin Martin", "Smirnoff", "5:55", "6:45"),
        new Artist("Andhim", "Pink", "6:00", "7:15"),
        new Artist("Travi$ Scott", "Hard", "6:10", "7:10"),
        new Artist("Slushii", "Green", "6:45", "8:00"),
        new Artist("Rezz", "Smirnoff", "6:45", "7:45"),
        new Artist("Lunice", "Purple", "6:50", "8:00"),
        new Artist("Baauer", "Harder", "7:00", "8:00"),
        new Artist("Justin Martin", "Pink", "7:15", "8:30"),
        new Artist("Tchami", "Hard", "7:20", "8:20"),
        new Artist("Mija", "Smirnoff", "7:45", "9:00"),
        new Artist("Ghastly", "Green", "8:00", "9:30"),
        new Artist("Belly", "Purple", "8:10", "8:45"),
        new Artist("Madeon", "Harder", "8:15", "9:15"),
        new Artist("Felix Da Housecat", "Pink", "8:30", "9:45"),
        new Artist("Ice Cube", "Hard", "8:35", "9:35"),
        new Artist("Mr. Carmack", "Purple", "8:55", "9:55"),
        new Artist("Graves", "Smirnoff", "9:00", "10:00"),
        new Artist("Herobust", "Green", "9:30", "11:00"),
        new Artist("Claude Vonstroke", "Pink", "9:45", "11:00"),
        new Artist("Pretty Lights", "Harder", "9:45", "11:00"),
        new Artist("Dizzee Rascal", "Purple", "10:00", "11:00"),
        new Artist("Flosstradamus", "Hard", "10:00", "11:00"),
        new Artist("DJ Dodger Stadium", "Smirnoff", "10:00", "11:00")
    ];

    loadBG();
}

function sunday() {
    artists = [
        new Artist("Brisco", "Smirnoff", "1:00", "1:30"),
        new Artist("Slumberjack", "Hard", "1:00", "1:55"),
        new Artist("Whethan", "Green", "1:00", "2:00"),
        new Artist("Autoerotique", "Pink", "1:00", "2:00"),
        new Artist("Saint Jhn", "Purple", "1:15", "1:55"),
        new Artist("Fakear", "Harder", "1:20", "2:20"),
        new Artist("Sha Sha Kimbo", "Smirnoff", "1:30", "3:00"),
        new Artist("Louis Futon", "Hard", "1:55", "2:55"),
        new Artist("Bear Grillz", "Purple", "1:55", "3:00"),
        new Artist("Team EZY", "Green", "2:00", "3:30"),
        new Artist("Poupon", "Pink", "2:00", "3:00"),
        new Artist("Mura Masa", "Harder", "2:25", "3:25"),
        new Artist("AC Slater", "Hard", "2:55", "3:55"),
        new Artist("Kid Jay", "Purple", "3:00", "4:00"),
        new Artist("Wood Holly", "Pink", "3:00", "4:00"),
        new Artist("???", "Smirnoff", "3:00", "4:15"),
        new Artist("Bixel Boys", "Green", "3:30", "5:00"),
        new Artist("Haywyre", "Harder", "3:40", "5:40"),
        new Artist("Jai Wolf", "Hard", "3:55", "4:55"),
        new Artist("RJ", "Purple", "4:00", "4:30"),
        new Artist("Martin Buttrich", "Pink", "4:00", "5:00"),
        new Artist("Wood Holly", "Smirnoff", "4:15", "5:15"),
        new Artist("Kayzo", "Purple", "4:30", "5:35"),
        new Artist("Kill The Noise", "Hard", "4:55", "5:55"),
        new Artist("Bob Moses", "Harder", "5:00", "6:00"),
        new Artist("Ekali", "Green", "5:00", "6:30"),
        new Artist("Kolombo", "Pink", "5:00", "6:00"),
        new Artist("Sita Abellan", "Smirnoff", "5:15", "6:15"),
        new Artist("Oshi", "Purple", "5:35", "6:40"),
        new Artist("Fat Joe", "Hard", "5:55", "6:25"),
        new Artist("Amine Edge & Dance", "Pink", "6:00", "7:15"),
        new Artist("Alunageorge", "Harder", "6:20", "7:20"),
        new Artist("Vindata", "Green", "6:30", "8:00"),
        new Artist("Zeds Dead", "Hard", "6:40", "7:40"),
        new Artist("Lil Uzi Vert", "Purple", "6:45", "7:30"),
        new Artist("Jillionaire", "Smirnoff", "7:00", "8:00"),
        new Artist("Brodinski", "Pink", "7:15", "8:30"),
        new Artist("Ty$", "Purple", "7:35", "8:35"),
        new Artist("Desiigner", "Harder", "7:40", "8:00"),
        new Artist("AC Slater", "Green", "8:00", "9:30"),
        new Artist("Ekali", "Smirnoff", "8:00", "9:00"),
        new Artist("Dillon Francis", "Hard", "8:05", "9:20"),
        new Artist("Boys Noize", "Harder", "8:15", "9:20"),
        new Artist("Green Velvet", "Pink", "8:30", "9:45"),
        new Artist("DJ Mustard", "Purple", "8:40", "9:40"),
        new Artist("Vindata", "Smirnoff", "9:00", "10:00"),
        new Artist("Milo & Otis", "Green", "9:30", "11:00"),
        new Artist("Major Lazer", "Hard", "9:45", "11:00"),
        new Artist("Porter Robinson", "Harder", "9:45", "11:00"),
        new Artist("Kaytranada", "Purple", "9:45", "11:00"),
        new Artist("Jackmaster", "Pink", "9:45", "11:00"),
        new Artist("Amine Edge & Dance", "Smirnoff", "10:00", "11:00")
    ];

    loadBG();
}

var map = new Image();
var bg = new Image();
function loadBG() {
    bg.onload = function() {
        loadMap();
    };
    bg.src = "./bg.jpg";
}
function loadMap() {

    map.onload = function() {
        magic();
    };
    map.src = "./map-15p.png";
}

function magic() {
    var output = document.getElementById("out");
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    // TOOLS------------------
    // fillRect(x,y,width,height)

    // wallpaper bg
    c.fillStyle = bgColor;
    c.fillRect(0,0,width,height);
    var bgRatio = 1440/2560;
    var bgWidth = height * bgRatio;
    c.drawImage(bg, 0, 0, bgWidth, height);


    // body section-------------
    //c.fillStyle = "#FF0000";
    //c.fillRect(0,headerHeight,width,bodyHeight);
    // set up time grid
    c.lineWidth = 2;
    c.textBaseline="middle";
    c.textAlign="center";
    c.fillStyle = gridColor;
    c.strokeStyle = gridColor;
    var timeFontSize = Math.floor(timeHeight) / 2;
    c.font= timeFontSize + "px Stellar";
    for(var i = 0; i < 11; i++) {
        var currentY = headerHeight + timeHeight * i;
        // x, y
        c.beginPath();
        c.moveTo(timeWidth - 8, currentY);
        c.lineTo(width, currentY);
        c.stroke();

        // left of time
        c.beginPath();
        c.moveTo(0, currentY);
        c.lineTo(8, currentY);
        c.stroke();

        c.fillText((i + 1), timeCenter, currentY);
    }
    c.font = "bold 0px Stellar";
    c.lineWidth = blockOutline;
    c.strokeStyle = "#000";
    // artist blocks
    for(var i = 0; i < artists.length; i++) {
        //console.log(artists[i].name);
        c.fillStyle = artists[i].stageColor;
        var blockX = timeWidth + blockWidthDefault * artists[i].stageNum;
        var blockY = headerHeight + timeHeight * artists[i].start;
        var blockHeight = timeHeight * artists[i].duration;
        c.fillRect(blockX, blockY, blockWidthDefault, blockHeight);
        c.strokeRect(blockX, blockY, blockWidthDefault, blockHeight);
        //c.globalAlpha = 0.6;
        c.fillStyle = gridColor;
        var nameSize = Math.min(1.6 * blockWidthDefault / artists[i].name.length, blockHeight * 0.6);
        var nameTopPad = nameSize * 0.1;
        c.font = nameSize + "px Stellar";
        c.textBaseline="middle";
        c.fillText(artists[i].name, blockX + blockWidthDefault / 2, nameTopPad + blockY + blockHeight / 2);
        //c.globalAlpha = 1;

        c.textBaseline="bottom";
        c.font = "16px Stellar";
        if(blockHeight < 45) {
            c.font = "12px Stellar";
            if(blockHeight < 30) {
                c.font = "6px Stellar";
            }
        }
        c.fillText(artists[i].startTime + " - " + artists[i].endTime, blockX + blockWidthDefault / 2, blockY + blockHeight);
    }

    // time grid overlay
    c.strokeStyle = "#fff";
    c.globalAlpha = 0.2;
    for(var i = 0; i < 11; i++) {
        var currentY = headerHeight + timeHeight * i;
        // x, y
        c.beginPath();
        c.moveTo(timeWidth, currentY);
        c.lineTo(width, currentY);
        c.stroke();
    }
    c.globalAlpha = 1;

    // map
    var mapRatio = 176/202;
    var mapHeight, mapWidth;
    var mapHeight1 = height * 0.15;
    var mapWidth1 = mapHeight1 * mapRatio;
    //console.log(mapHeight1 + " x " + mapWidth1);
    var mapWidth2 = (width - 400) / 2;
    var mapHeight2 = mapWidth2 / mapRatio;
    //console.log(mapHeight2 + " x " + mapWidth2);
    //console.log((mapHeight1 / 202) + " vs. " + (mapWidth2 / 176));
    if (mapHeight1 / 202 < mapWidth2 / 176) {
        mapHeight = mapHeight1;
        mapWidth = mapWidth1;
    }
    else {
        mapHeight = mapHeight2;
        mapWidth = mapWidth2;
    }
    var statusBarPadding = 40;
    var mapY = statusBarPadding + (headerHeight - mapHeight) / 2;
    var mapX = width - mapWidth - 4;
    c.drawImage(map, mapX, mapY, mapWidth, mapHeight);

    c.textBaseline = "top";
    c.font = "bold 26px Stellar";
    // index
    c.textAlign="left";
    c.fillStyle = waterColor;
    c.fillText("WATER", mapX + 42, mapY - 38);
    c.beginPath();
    c.arc(mapX + 28, mapY - 34 + 8, 8, 0, 2 * Math.PI);
    c.fill();

    // stage labels
    c.textAlign = "center";
    c.fillStyle = blue;
    // c.fillRect(10, mapY + (mapHeight / 3) + 5, 15, 15);
    // c.fillText("HARD", 30, mapY + (mapHeight / 3));
    c.fillText("HARD", timeWidth + blockWidthDefault * 0 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = orange;
    // c.fillRect(10, mapY + 35 + (mapHeight / 3), 15, 15);
    // c.fillText("HARDER", 30, mapY + 30 + (mapHeight / 3));
    c.fillText("HARDER", timeWidth + blockWidthDefault * 1 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = purple;
    c.fillText("PURPLE", timeWidth + blockWidthDefault * 2 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = pink;
    c.fillText("PINK", timeWidth + blockWidthDefault * 3 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = green;
    c.fillText("GREEN", timeWidth + blockWidthDefault * 4 + blockWidthDefault / 2, height - footerHeight + 8);

    c.fillStyle = red;
    c.fillText("SMIRNOFF", timeWidth + blockWidthDefault * 5 + blockWidthDefault / 2, height - footerHeight + 8);

    // @aurnik
    c.textAlign="center";
    c.textBaseline="alphabetic";
    c.fillStyle = gridColor;
    c.font = "20px Stellar";
    c.fillText("@aurnik", width / 2, height * 0.97);

    out.src = canvas.toDataURL();
    document.getElementById("daySelect").remove();
    document.getElementById("overlay").className += "on";
};
