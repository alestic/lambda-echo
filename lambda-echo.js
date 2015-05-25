exports.handler = function(event, context) {
   console.log("event: ", JSON.stringify(event, null, 4));
   context.succeed("success");
}
