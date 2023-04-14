# Feedback Website for Cotiss

[Cotiss](https://cotiss.com/) leadership required a website where employees can anonymously submit feedback and view a randomly selected piece of existing feedback on each page load.

## Technologies used:
• Static Amazon S3 front-end website managed by Amazon CloudFront makes Javascript calls to API Gateway to execute read/write commands in DynamoDB table.

• AWS API Gateway forwards HTTP requests to AWS Lambda functions to query data.

• 'Get feedback' AWS Lambda function returns a random piece of feedback from DynamoDB.

• 'Write feedback' AWS Lambda function posts new feedback to DynamoDB for storage.
