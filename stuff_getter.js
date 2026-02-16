function test () {
    require('dotenv').config()
    const sec = String(process.env.key)
    //document.getElementById('dynamic')
    //    .innerHTML = sec
    //return String(process.env.message)
    alert(sec)
}