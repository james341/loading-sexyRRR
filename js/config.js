/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "naRcYlLfQVs", name: "Atlas Nations - Installation Music"},
	{youtube: "BsGnMpSVixg", name: "Atlas Nations - Installation Music"},
        {youtube: "TnXJQPs-D6I", name: "Atlas Nations - Installation Music"},
        {youtube: "A8p4cz2FYzw", name: "Atlas Nations - Installation Music"},
        {youtube: "LdQjndOvNn4", name: "Atlas Nations - Installation Music"},
        {youtube: "uNc5ULGO9EM", name: "Atlas Nations - Installation Music"},
        {youtube: "v3fOFLXgCbo", name: "Atlas Nations - Installation Music"},

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"You are not allowed to discriminate, be sexist, be racist, be homophobic, or put any graphic/sexual content in OOC!",
	"If racism, extremism, Nazism is present in IC to the point of which it is becoming uncomfortable for players and presented in a unserious manner (such as skins from Adolf Hitler), staff have the right to ban you!",
	"Do not hack, client mods are allowed if they do not affect anyone else's gameplay experience!",
        "No roleplaying in OOC/LOOC. You can of course sometimes do a line of roleplay in OOC ironically!",
        "Do not break NLR, and do not return to the place you were killed for at least five minutes!",
        "You can't kill/mug a character for the following reasons!", 
        "A void will not happen unless there is a valid reason (a rule has been broken!",
        "Do Not Ask For Ranks Apply On The Forums!",
        "Do not argue with staff unless you know you are being wrongfully accused!",
        "Crashing The Server Will Get Your Ip Banned!",
        "Do not glitch or try to use exploits to your advantage!",
        "You may have a building sign (using textscreen) to isolate and protect yourself from the RP world provided you do not have any raidables, and you are not engaging in role-play. It must be removed when you are finished!",
        "Make sure to read the rules!",
        "Do not attempt to log off to avoid confrontation with a staff member, or try to evade a punishment, ban, kick in anyway!",
        "Do not mix IC chat and OOC chat!",
        "Do not hack, client mods are allowed if they do not affect anyone else's gameplay experience!",
        "Donate Your Money To My Server!",
        "Your Welcome To Join Our Discord Server At AnyTime Here Is The Join Link https://discord.gg/EZ3gct8!",
        "Enjoy your time on our server!",
        "Bullying Is Not Tolerated Respect All Players If You're Caught Doing This It's A Permanent Ban Unless your the bully Job!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
