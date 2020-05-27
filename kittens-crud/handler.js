'use strict';
const AWS = require('aws-sdk')
// module.exports.hello = async event => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

//basic collections functions 
module.exports = {
  create: async(event, context) => {
    //validate that have a valid json object passing in the api
    let bodyObj = {}
    try {
      bodyObj = JSON.parse(event.body)
    } catch (jsonError) {
      console.log("There was an error on parsing the body", jsonError)
      return{
        statusCode: 400
      }
    }

    if (typeof bodyObj.name === 'undefined' || typeof bodyObj.age === 'undefined') {
      console.log("Missing parameters")
      return{
        statusCode: 400
      }
    }
    let putParams = {
      TableName: process.env.DYNAMODB_KITTEN_TABLE,
      Item: {
        name: bodyObj.name,
        age: bodyObj.age 
      }
    }

    let putResult = {}
    try {
      let dynamodb = new AWS.DynamoDB.DocumentClient()
      putResult = await dynamodb.put(putParams).promise()
    } catch (putError) {
      console.log("There was a problem with the params for putting kitten")
      console.log("These are the parms", putParams)
      return{
        statusCode: 500
      }
    }
    return{
      statusCode: 201
    }

  },
  list: async(event, context) => {
    let scanParams = {
      TableName: process.env.DYNAMODB_KITTEN_TABLE,
    }

    let scanResult= {}
    try {
      let dynamodb = new AWS.DynamoDB.DocumentClient()
      scanResult = await dynamodb.scan(scanParams).promise()
    } catch (scanError) {
      console.log("There was a problem scanning the params for the kitten")
      console.log("These are the params", scanParams)
      return{
        statusCode: 500
      }
    }
    if(scanResult.Items === null || !Array.isArray(scanResult.Items) || scanResult.Items.lenght === 0){
      return{
        statusCode: 404
      }
    }
    return{
      statusCode: 200,
      body: JSON.stringify(scanResult.Items.map((kitten)=>{
        return {
          name: kitten.name,
          age: kitten.age
        }
      }))
    }
  },
  get: async(event, context) => {
    let getParams = {
      TableName: process.env.DYNAMODB_KITTEN_TABLE,
      Key: {
        name: event.pathParameters.name
      }
    }
    let getResult = {}
    try {
      let dynamodb = new AWS.DynamoDB.DocumentClient()
      getResult = await dynamodb.get(getParams).promise()
    } catch (getError) {
      console.log("There was a problem getting the params for the kitten")
      console.log("These are the params", getParams)
      return{
        statusCode: 500
      }
    }
    if (getResult.Item === null) {
      return{
        statusCode: 404
      }
    }
    return{
      statusCode: 200,
      body: JSON.stringify({
        name: getResult.Item.name,
        age: getResult.Item.age
      })
    }

  },
  update: async(event, context) => {
    let bodyObj = {}
    try {
      bodyObj = JSON.parse(event.body)

    } catch (jsonError) {
      console.log("There was an error parsing the body", jsonError)
      return{
        statusCode: 400
      }
    }
    if (typeof bodyObj.age === 'undefined') {
      console.log("Missing parameters")
      return{
        statusCode: 400
      }
    }
    let updateParams = {
      TableName: process.env.DYNAMODB_KITTEN_TABLE,
      Key: {
        name: event.pathParameters.name
      },
      UpdateExpression: 'set #age = :age',
      ExpressionAttributeName: {
        '#age': 'age'
      },
      ExpressionAttributeValue: {
        ':age': bodyObj.age
      }
    }
    try {
      let dynamodb = new AWS.DynamoDB.DocumentClient()
      dynamodb.update(updateParams).promise()
    } catch (updateError) {
      console.log('There was a problem updating the kitten')
      console.log("This is the error", updateError)
      return{
        statusCode: 500
      }
    }
    return{
      statusCode: 200
    }

  },
  delete: async(event, context) => {
    let deleteParams = {
      TableName: process.env.DYNAMODB_KITTEN_TABLE,
      Key: {
        name: event.pathParameters.name
      }
    }
    let deleteResult = {}
    try {
      let dynamodb = new AWS.DynamoDB.DocumentClient()
      deleteResult = dynamodb.delete(deleteParams).promise()
    } catch (deleteError) {
      console.log("There was a problem getting the params for the kitten")
      console.log("These are the params", deleteError)
      return{
        statusCode: 500
      }
    }
    return{
      statusCode: 200,
    }

  },
}