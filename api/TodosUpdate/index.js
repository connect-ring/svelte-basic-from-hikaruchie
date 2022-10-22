module.exports = async function (context, req) {
    // 簡易バリデーション（Update想定なのでidもチェック）
    // JSの主流の型判定：Object.prototype.toString.call()
    if (!req.body.id || !req.body.description || Object.prototype.toString.call(req.body.done) !== '[object Boolean]') {
        context.res = { 
            status: 400,
            body: "不正なリクエストです"
        };
        context.done(); // 明示的に終了
    }
    
    // 出力バインドにリクエストBodyを渡す
    context.bindings.todoDocument = req.body;

    context.res = { status: 204 };    
};