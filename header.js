let rawValue = $persistentStore.read("ServiceChain_env") 
let customValue = rawValue && rawValue !== "" ? rawValue : null;


if (customValue) {
    $request.headers["X-Souche-ServiceChain"] = "env-"+customValue;
    console.log(`已添加 X-Souche-ServiceChain: ${customValue}`);
} 

// 返回修改后的请求头
$done({ headers: $request.headers });
