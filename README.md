## Get started

1. Install the dependencies...

```bash
cd app / cd api
npm install
```

2. Settings

- Cosmos DB Emulator を起動して、Database と Container を作成します。

  - Database id: SvelteTest
  - Container id: Todos
  - Pertition key: pk

- local.settings.json の `CosmosDBConnection` に Cosmos DB Emulator プライマリ接続文字列の値をセットします。

```json
{
	"IsEncrypted": false,
	"Values": {
		"AzureWebJobsStorage": "UseDevelopmentStorage=true",
		"FUNCTIONS_WORKER_RUNTIME": "node",
		"NODE_TLS_REJECT_UNAUTHORIZED": "0",
		"CosmosDBConnection": "AccountEndpoint=https://localhost:8081/;AccountKey=C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=="
	}
}
```

3. Run

```bash
swa start
```

参考）https://azure.github.io/static-web-apps-cli/docs/cli/swa-config/
