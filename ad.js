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
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>';
    var body=$response.body.replaceAll(reg, str).replaceAll(window_open_reg, window_open_str);
    let headers = $response.headers;
    headers['Content-Security-Policy'] = "child-src	'self'"
    $done({ headers, body, url });

} else {

    let reg = '<head>';
    let str = '<head>\
    <link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>';
    var body=$response.body.replaceAll(reg, str);
    let headers = $response.headers;
    headers['Content-Security-Policy'] = '';
    $done({ headers, body, url });

}
