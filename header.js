const customValue = $argument && $argument.trim() !== "" ? $argument : null;

if (customValue) {
    // 校验请求域名（作为额外安全判断，即使规则已过滤仍保留）
    if ($request.hostname === "retail-finance-csite.proxy.dasouche.com") {
        $request.headers["X-Souche-ServiceChain"] = customValue;
        console.log(`已添加 X-Souche-ServiceChain: ${customValue}`);
    } else {
        console.log("当前请求域名不匹配，未添加 header");
    }
} 

// 返回修改后的请求头
$done({ headers: $request.headers });
