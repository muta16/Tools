/*
by Adblock4limbo https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo.js
*/
let url = $request.url;
if (url.indexOf("missav") != -1) {

    let window_open_reg = 'window.open';
    let window_open_str = '';
    let reg = '<head>';
    let str = '<head>\
    <link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>'
    let data=$response.body
    let body = data.replace(reg, str).replace(window_open_reg, window_open_str);
    let headers = $response.headers;
    headers['Content-Security-Policy'] = "child-src	'self'";
    console.log(`oo:${body}`)
    $done({ headers, body, url })

} else {

    let reg = '<head>';
    let str = '<head>\
    <link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>'
    let data = $response.body
    let body = data.replace(reg, str);
    let headers = $response.headers;
    headers['Content-Security-Policy'] = '';
    console.log(`aa:${body}`)
    $done({ headers, body, url })

}
