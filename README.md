# SvelteBasic

[Svelte on Azure Static Web Apps with Azure Cosmos DB](https://aadojo.alterbooth.com/entry/2021/12/16/000000) の記事を参考に作成しています。

## Get started

1. Install the dependencies...
```bash
cd svelte-basic
npm install --legacy-peer-deps
```

```bash
cd api
npm install uuid
npm install @azure/cosmos
```

```bash
touch api/local.settings.json
```

2. Cosmos Emmulator を起動して、下記の通りDatabaseとContainerを作成します。
- Database id: SvelteTest
- Container id: Todos
- Pertition key: pk

ついでに`CosmosDBConnection`の値はCosmosEmmulatorのプライマリ接続文字列を控えておく。

3. `local.settings.json`の内容は以下の通り。2 でメモした値は`CosmosDBConnection`に転記。
```
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

## Test
```bash
cd svelte-basic
npm run build
swa start public --api-location api
```

Azure Static Web Apps emulator started at http://localhost:4280.
