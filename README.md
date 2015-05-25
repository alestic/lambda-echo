
# lambda-echo

This AWS Lambda function prints its input event to the console.log
(available in CloudWatch Logs).

This is useful for debugging basic interactions with AWS Lambda. For
example, you can subscribe this AWS Lambda function to an SNS Topic to
see all the messages being published to that topic.

## Install AWS Lambda function, IAM role, policy

    ./lambda-echo-install

## Delete AWS Lambda function, IAM role, policy

    ./lambda-echo-uninstall

## Test

    sudo apt-get install jq # For JSON Parsing

    aws lambda invoke \
        --function-name lambda-echo \
        --log-type Tail \
        --payload '{ "message" : "hello, world" }' \
        /dev/null |
      jq -r '.LogResult' |
      base64-decode 
