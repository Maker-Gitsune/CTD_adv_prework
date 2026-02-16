function test () {
    require('dotenv').config()
    const sec = String(process.env.message)
    //document.getElementById('dynamic')
    //    .innerHTML = sec
    //return String(process.env.message)
    alert(sec)
}