module.exports = {
    "lzSCHbjKqj": {
        "id": 3,
        "key": "user",
        "entityId": "1:user",
        "datasource": "1",
        "projectId": 1,
        "name": "User",
        "entityItems": "[{\"key\":\"prop1\",\"type\":\"text\",\"regex\":\"\",\"isArray\":false,\"dbValues\":{\"keyValues\":{\"boolean-unique\":false,\"boolean-nullable\":false,\"boolean-primary-key\":false}},\"relation\":\"\",\"required\":false,\"ignoreInModel\":false,\"primitiveType\":\"string\"},{\"key\":\"prop2\",\"type\":\"text\",\"regex\":\"\",\"isArray\":false,\"dbValues\":{\"keyValues\":{\"boolean-unique\":false,\"boolean-nullable\":false,\"boolean-primary-key\":false}},\"relation\":\"\",\"required\":false,\"ignoreInModel\":false,\"primitiveType\":\"string\"},{\"key\":\"prop3\",\"type\":\"text\",\"regex\":\"\",\"isArray\":false,\"dbValues\":{\"keyValues\":{\"boolean-unique\":false,\"boolean-nullable\":false,\"boolean-primary-key\":false}},\"relation\":\"\",\"required\":false,\"ignoreInModel\":false,\"primitiveType\":\"string\"}]",
        "erd": "{\"attr\":[{\"pos\":0,\"name\":\"prop1\",\"unique\":false,\"primary\":false,\"nullable\":false},{\"pos\":1,\"name\":\"prop2\",\"unique\":false,\"primary\":false,\"nullable\":false},{\"pos\":2,\"name\":\"prop3\",\"unique\":false,\"primary\":false,\"nullable\":false}],\"name\":\"User\",\"_genId\":\"lzSCHbjKqj\",\"parent\":null,\"relations\":[],\"transform\":{\"x\":135,\"y\":174,\"width\":105,\"height\":170}}"
    },
    "oOVojN59lT": {
        "id": 3,
        "key": "user",
        "entityId": "1:user",
        "datasource": "1",
        "projectId": 1,
        "name": "User",
        "entityItems": "[{\"dbValues\":{\"keyValues\":{\"boolean-primary-key\":false,\"boolean-unique\":false,\"boolean-nullable\":false}},\"relation\":\"\",\"regex\":\"\",\"primitiveType\":\"string\",\"required\":false,\"isArray\":false,\"ignoreInModel\":false,\"key\":\"id\",\"type\":\"text\"},{\"dbValues\":{\"keyValues\":{\"boolean-primary-key\":false,\"boolean-unique\":false,\"boolean-nullable\":false}},\"relation\":\"\",\"regex\":\"\",\"primitiveType\":\"string\",\"required\":false,\"isArray\":false,\"ignoreInModel\":false,\"key\":\"age\",\"type\":\"text\"},{\"dbValues\":{\"keyValues\":{\"boolean-primary-key\":false,\"boolean-unique\":false,\"boolean-nullable\":false}},\"relation\":\"\",\"regex\":\"\",\"primitiveType\":\"string\",\"required\":false,\"isArray\":false,\"ignoreInModel\":false,\"key\":\"email\",\"type\":\"text\"},{\"dbValues\":{\"keyValues\":{\"boolean-primary-key\":false,\"boolean-unique\":false,\"boolean-nullable\":false}},\"relation\":\"\",\"regex\":\"\",\"primitiveType\":\"string\",\"required\":false,\"isArray\":false,\"ignoreInModel\":false,\"key\":\"firstName\",\"type\":\"text\"},{\"dbValues\":{\"keyValues\":{\"boolean-primary-key\":false,\"boolean-unique\":false,\"boolean-nullable\":false}},\"relation\":\"\",\"regex\":\"\",\"primitiveType\":\"string\",\"required\":false,\"isArray\":false,\"ignoreInModel\":false,\"key\":\"lastName\",\"type\":\"text\"},{\"dbValues\":{\"keyValues\":{\"boolean-primary-key\":false,\"boolean-key\":true,\"boolean-unique\":false,\"boolean-nullable\":false,\"radio-relation-definition\":\"many-to-one\"}},\"metadata\":{\"required\":false,\"xor\":null,\"identifying\":true},\"relation\":\"Address\",\"regex\":\"\",\"primitiveType\":\"string\",\"required\":false,\"isArray\":false,\"ignoreInModel\":false,\"key\":\"address\",\"name\":\"Address\",\"example\":1,\"relKey\":\"many-to-one\",\"type\":\"relation\"},{\"dbValues\":{\"keyValues\":{\"boolean-primary-key\":false,\"boolean-key\":true,\"boolean-unique\":false,\"boolean-nullable\":false,\"radio-relation-definition\":\"many-to-one\"}},\"metadata\":{\"required\":false,\"xor\":null,\"identifying\":true},\"relation\":\"Order\",\"regex\":\"\",\"primitiveType\":\"string\",\"required\":false,\"isArray\":false,\"ignoreInModel\":false,\"key\":\"order\",\"name\":\"Order\",\"example\":1,\"relKey\":\"many-to-one\",\"type\":\"relation\"}]",
        "erd": "{\"_genId\":\"oOVojN59lT\",\"name\":\"User\",\"parent\":null,\"attr\":[{\"name\":\"id\",\"primary\":true,\"unique\":false,\"nullable\":false,\"pos\":0},{\"name\":\"age\",\"primary\":false,\"unique\":false,\"nullable\":false,\"pos\":3},{\"name\":\"email\",\"primary\":false,\"unique\":false,\"nullable\":false,\"pos\":4},{\"name\":\"firstName\",\"primary\":false,\"unique\":false,\"nullable\":false,\"pos\":1},{\"name\":\"lastName\",\"primary\":false,\"unique\":false,\"nullable\":false,\"pos\":2}],\"transform\":{\"x\":150.88888835906982,\"y\":116.88888835906982,\"width\":201,\"height\":215},\"relations\":[]}"
    }
}