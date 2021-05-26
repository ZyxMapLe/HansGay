__path = process.cwd()

var { performance } = require('perf_hooks');
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/jan.html')
})

router.get('/downloader', (req, res) => {
    res.sendFile(__path + '/views/downloader.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

router.get('/game/fingerprint', (req, res) => {
    res.sendFile(__path + '/views/fingerprint.html')
})

router.get('/game/pingpong', (req, res) => {
    res.sendFile(__path + '/views/pingpong.html')
})

router.get('/game/tebakkata', (req, res) => {
    res.sendFile(__path + '/views/tebak.html')
})

router.get('/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/encrypt', (req, res) => {
    res.sendFile(__path + '/views/encrypt.html')
})

router.get('/photooxy', (req, res) => {
    res.sendFile(__path + '/views/Photooxy.html')
})

router.get('/random', (req, res) => {
    res.sendFile(__path + '/views/random.html')
})

router.get('/tools', (req, res) => {
    res.sendFile(__path + '/views/tools.html')
})

router.get('/image', (req, res) => {
    res.sendFile(__path + '/views/image.html')
})

router.get('/islam', (req, res) => {
    res.sendFile(__path + '/views/islam.html')
})

router.get('/fun', (req, res) => {
    res.sendFile(__path + '/views/fun.html')
})

router.get('/serti', (req, res) => {
    res.sendFile(__path + '/views/serti.html')
})

router.get('/other', (req, res) => {
    res.sendFile(__path + '/views/other.html')
})

router.get('/api/status', async(req, res) => {  

var date = new Date
var jam = date.getHours()
var menit = date.getMinutes()
var detik = date.getSeconds()
var old = performance.now()
var neww = performance.now()
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var cpu = require('os').cpus()
var json = await (await fetch('https://api.ipify.org/?format=json')).json()
var port = process.env.PORT || 8080 || 5000 || 3000 
    status = {
        status: 'online',
        memory: ram,
        cpu: cpu[0].model,
        port: port,
        ip: json.ip,
        time: `${jam} : ${menit} : ${detik}`,
        uptime: muptime(process.uptime()),
        speed: `${neww - old}ms`,
        info:{       
            owner: 'Ojan',            
            apikey: 'Chat Owner: https://wa.me/6289690719275'
        }
    }
    res.json(status)
})

module.exports = router

function muptime(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(seconds)
}