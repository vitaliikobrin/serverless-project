const dynamoDb = require('serverless-dynamodb-client');

module.exports.getAll = (event, context, callback) => {
    const params = {
        TableName: 'usersTable'
    };

    dynamoDb.doc.scan(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t fetch the todos.'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        callback(null, response);
    });
};
