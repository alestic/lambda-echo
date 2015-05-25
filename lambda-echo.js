console.log('Loading function');
exports.handler = function(event, context) {
   console.log(JSON.stringify(event, null, 4));
   context.succeed("success");
}
