{
	"info": {
		"_postman_id": "ab4e9e08-7ea2-4ccd-b17e-25c13b0bc6ed",
		"name": "Subscriber API Documentation",
		"description": "##### This API documentation for Get Youtube Subscribers provides details on how to interact with API endpoints to retrieve subscribers information.\n\nBase URL  \nThe base URL for all the endpoints is: [http://localhost:3000](http://localhost:3000)\n\nError Handling\n\nIn case of any error occurs, the API will respond with error status code and error message.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "33239294"
	},
	"item": [
		{
			"name": "Get Subscribers",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/subscribers",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"subscribers"
					]
				},
				"description": "Get Subscribers: (/subscribers):\n\nDescription: Retrieves all subscribers  \nEndpoint: GET [http://localhost:3000/subscribers](http://localhost:3000/subscribers)\n\nResponse: 200 OK: Successful status with an array of subscribers information  \n400 Bad Request: Error status"
			},
			"response": [
				{
					"name": "Get Subscribers",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/subscribers",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"subscribers"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "413"
						},
						{
							"key": "ETag",
							"value": "W/\"19d-JySbzxn+37dkmVyC7rHIs0igTU4\""
						},
						{
							"key": "Date",
							"value": "Sat, 13 Apr 2024 09:25:28 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "[\n    {\n        \"_id\": \"661a322d3240941208607857\",\n        \"name\": \"Jeread Krus\",\n        \"subscribedChannel\": \"CNET\",\n        \"subscribedDate\": \"2024-04-13T07:20:13.493Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"661a322d3240941208607858\",\n        \"name\": \"John Doe\",\n        \"subscribedChannel\": \"freeCodeCamp.org\",\n        \"subscribedDate\": \"2024-04-13T07:20:13.497Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"661a322d3240941208607859\",\n        \"name\": \"Lucifer\",\n        \"subscribedChannel\": \"Sentex\",\n        \"subscribedDate\": \"2024-04-13T07:20:13.498Z\",\n        \"__v\": 0\n    }\n]"
				}
			]
		},
		{
			"name": "Get Subscribers by name",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/subscribers/names",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"subscribers",
						"names"
					]
				},
				"description": "Get Subscribers: (/subscribers/names):\n\nDescription: Retrieves all subscribers with 2 fields \"name\" and \"subscribedChannel\"  \nEndpoint: GET [http://localhost:3000/subscribers/names](http://localhost:3000/subscribers)\n\nResponse: 200 OK: Successful status with an array of subscribers information  \n400 Bad Request: Error status"
			},
			"response": [
				{
					"name": "Get Subscribers by name",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/subscribers/names",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"subscribers",
								"names"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "158"
						},
						{
							"key": "ETag",
							"value": "W/\"9e-kEfcMLQvMpyZMQWmSzgFC6W6vlY\""
						},
						{
							"key": "Date",
							"value": "Sat, 13 Apr 2024 09:11:34 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "[\n    {\n        \"name\": \"Jeread Krus\",\n        \"subscribedChannel\": \"CNET\"\n    },\n    {\n        \"name\": \"John Doe\",\n        \"subscribedChannel\": \"freeCodeCamp.org\"\n    },\n    {\n        \"name\": \"Lucifer\",\n        \"subscribedChannel\": \"Sentex\"\n    }\n]"
				},
				{
					"name": "Get Subscribers by name",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/subscribers/names",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"subscribers",
								"names"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "158"
						},
						{
							"key": "ETag",
							"value": "W/\"9e-kEfcMLQvMpyZMQWmSzgFC6W6vlY\""
						},
						{
							"key": "Date",
							"value": "Sat, 13 Apr 2024 09:20:34 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "[\n    {\n        \"name\": \"Jeread Krus\",\n        \"subscribedChannel\": \"CNET\"\n    },\n    {\n        \"name\": \"John Doe\",\n        \"subscribedChannel\": \"freeCodeCamp.org\"\n    },\n    {\n        \"name\": \"Lucifer\",\n        \"subscribedChannel\": \"Sentex\"\n    }\n]"
				}
			]
		},
		{
			"name": "Get Subscribers by ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/subscribers/661a322d3240941208607857",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"subscribers",
						"661a322d3240941208607857"
					]
				},
				"description": "Get Subscribers (/subscribers/:id):\n\nDescription: Retrieves a subscriber by ID  \nEndpoint: GET [http://localhost:3000/subscribers/:id](http://localhost:3000/subscribers)  \nResponse: 200 OK: Successful status with an array of subscribers information  \n400 Bad Request: Error status with error message"
			},
			"response": [
				{
					"name": "Get Subscribers by ID",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/subscribers/661a322d3240941208607857",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"subscribers",
								"661a322d3240941208607857"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "134"
						},
						{
							"key": "ETag",
							"value": "W/\"86-G+uElHbQvwWLFRWg41ShILv+eRs\""
						},
						{
							"key": "Date",
							"value": "Sat, 13 Apr 2024 09:17:52 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"661a322d3240941208607857\",\n    \"name\": \"Jeread Krus\",\n    \"subscribedChannel\": \"CNET\",\n    \"subscribedDate\": \"2024-04-13T07:20:13.493Z\",\n    \"__v\": 0\n}"
				}
			]
		}
	]
}