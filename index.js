/** 
 * Create by Ngo NGHIA on 9/6/19
 * nghiango262@gmail.com
*/

const hostname = "127.0.0.1";
const port = 3001;

const http = require('http');
const fileManager = require('./src/fileManager')



const server = http.createServer((req, res) => {
    //
    const url = req.url;
    const method = req.method;

    console.log(method + '\t' + url)

    //ghi log sự kiện
    var offset = +7;
    let curTime = new Date( new Date().getTime() + offset * 3600 * 1000).toISOString()
    let infologs = curTime + '\t' + method + '\t' + url
    fileManager.appendFile('logs.txt', infologs);


    if (url ==='/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">ADD</button></form></body>')
        res.write('</html>')
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<html>')
    res.write('<head><title>Cái quần </title></head>')
    res.write('<body></body>')
    res.write('<h1>Xin chào</h1>')
    res.write('<h2>Xin chào</h2>')
    res.write('<h3>Xin chào</h3>')
    res.write('</html>')
    res.end()

});

//
let tinhTrungBinhCong = (numbers) => {
    var total = 0;
    debugger;
    for (let number in numbers) {
        total = total + parseFloat(number)
        console.log(`At number ${number} total = ${total}`)
    }

    debugger;
    console.log(`*****Total = ${total}`)
}

server.listen(port, hostname, () => {
    console.log('Server is running with port ' + port);
    //debugger;
    //tinhTrungBinhCong([1,2,3,4,5,6]);
    fileManager.readFile('./data/logs/logs.txt')
});