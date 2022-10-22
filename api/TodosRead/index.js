// https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-reference-node?tabs=v2-v3-v4-export%2Cv2-v3-v4-done%2Cv2%2Cv2-log-custom-telemetry%2Cv2-accessing-request-and-response%2Cwindows-setting-the-node-version#exporting-a-function
// module.exports (または exports) を使用して、JavaScript 関数をエクスポートする必要があります。 
// エクスポートする関数は、トリガーされたときに実行される JavaScript 関数である必要があります。
// エクスポートされる関数には、実行時に多数の引数が渡されます。 受け取る最初の引数は常に、context オブジェクトです。
module.exports = async function (context, req) {
    // functions.json で定義しているdocuments≒CosmosDBからの検索結果をレスポンスに与える
    // console.log(context.bindings.documents);
    try {
        context.res = {
            status: 200,
            body: await context.bindings.documents
        };
    } catch (err) {
        context.log.error('CosmosDBの情報取得に失敗しました', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
    }
}