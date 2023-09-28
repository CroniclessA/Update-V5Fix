const chalk = require("chalk")
const fs = require("fs")


//
global.domain = 'kyuu.tokopannep.xyz'
global.apikey = 'ptla_mPnGPknLClnC5TPcGIKG0O9e60wJInG0FXruoRsv4Bd'
global.capikey = 'ptlc_B9Jod73kSTQZGbqwc2yheWw7VGoLgL37gQYFJrASTrr'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6285649735418'] //ur owner number
global.ownernomer = "6285649735418" //ur owner number2
global.ownername = "饾櫝饾櫚饾殎饾殕饾櫢饾櫧 饾櫨饾櫟饾櫜" //ur owner name
global.ytname = "@Nothing" //ur yt chanel name
global.socialm = "Git : CroniclessA, yang Spam YTeam" //ur github or insta name
global.location = "Kalimantan Selatan, Indonesia " //ur location

//new
global.botname = "𝐙𝐞𝐫𝐨𝐨𝐓𝐮𝐫𝐧"
global.ownernumber = '6285649735418'
global.ownername = '𓆩M.ZmaSHツ'
global.ownerNumber = ["6285649735418@s.whatsapp.net"]
global.ownerweb = "https://Lynk.Id/Aurorazenn00"
global.websitex = "https://github.com/CroniclessA?tab=repositories"
global.wagc = "https://github.com/CroniclessA?tab=repositories"
global.themeemoji = '馃毄'
global.wm = "饾櫝饾櫚饾殎饾殕饾櫢饾櫧"
global.botscript = 'Cari aja di Github.com Punya Si Creator' //script link
global.packname = "饾櫝饾櫚饾殎饾殕饾櫢饾櫧"
global.author = "饾櫝饾櫚饾殎饾殕饾櫢饾櫧"
global.creator = "6285649735418@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/logo.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/error.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/thumb.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})