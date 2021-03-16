 var protractorApiResource = require(__dirname + "../../API-Resources/index.js").ProtractorApiResource;

describe("Test response for all REST API methods", function () {

    var apiClient, services = {
        getPost: {
            path: "/posts/:postId:",
            method: "GET"
        },
        createPost: {
            path: "/posts",
            method: "POST"
        },
        updatePost: {
            path: "/posts/:postId:",
            method: "PUT"
        },
        patchPost: {
            path: "/posts/:postId:",
            method: "PATCH"
        },
    };

    beforeAll(function () {
        apiClient = new protractorApiResource("https://jsonplaceholder.typicode.com/");
        apiClient.registerService(services);
    });


    it("Test GET method", function (done) {
        var response = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

        apiClient.getPost({postId: 1}).toJSON().then(function (actualResponse) {
            expect(actualResponse).toEqual(response);
            done();
            console.log('GET Executed succesfully!!');
        });
    });

    it("Test POST method", function (done) {
        var payLoad = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        var response = {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        apiClient.createPost({}, payLoad).toJSON().then(function (actualResponse) {
            expect(actualResponse).toEqual(response);
            done();
            console.log('POST Executed succesfully!!');
        });
    });

    it("Test PUT method", function (done) {
        var payLoad = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        var response = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        apiClient.updatePost({postId: 1}, payLoad).toJSON().then(function (actualResponse) {
            expect(actualResponse).toEqual(response);
            done();
            console.log('PUT Executed succesfully!!');
        });

    });

    it("Test PATCH method", function (done) {
        var payLoad = {
            title: 'foo'
        };

        var response = {
            "userId": 1,
            "id": 1,
            "title": "foo",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

        apiClient.patchPost({postId: 1}, payLoad).toJSON().then(function (actualResponse) {
            expect(actualResponse).toEqual(response);
            done();
            console.log('PATCH Executed succesfully!!');
        });
    });
});
