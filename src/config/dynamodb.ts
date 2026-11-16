import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { injectable } from 'inversify';

@injectable()
export class DynamoDBConfig {
    private readonly client: DynamoDBDocumentClient;

    constructor() {
        const dynamoDBClient = new DynamoDBClient({
            region: process.env.AWS_REGION || 'us-east-1',
            endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy'
            }
        });
        this.client = DynamoDBDocumentClient.from(dynamoDBClient);
    }

    getClient(): DynamoDBDocumentClient {
        return this.client;
    }

    async putItem(tableName: string, item: Record<string, unknown>): Promise<void> {
        const command = new PutCommand({
            TableName: tableName,
            Item: item
        });
        await this.client.send(command);
    }

    async getItem(tableName: string, key: Record<string, unknown>): Promise<Record<string, unknown> | undefined> {
        const command = new GetCommand({
            TableName: tableName,
            Key: key
        });
        const response = await this.client.send(command);
        return response.Item;
    }

    async updateItem(
        tableName: string,
        key: Record<string, unknown>,
        updateExpression: string,
        expressionAttributeValues: Record<string, unknown>
    ): Promise<Record<string, unknown> | undefined> {
        const command = new UpdateCommand({
            TableName: tableName,
            Key: key,
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW'
        });
        const response = await this.client.send(command);
        return response.Attributes;
    }

    async deleteItem(tableName: string, key: Record<string, unknown>): Promise<void> {
        const command = new DeleteCommand({
            TableName: tableName,
            Key: key
        });
        await this.client.send(command);
    }
}