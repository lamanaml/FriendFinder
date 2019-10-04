var friends = require("../data/friends.js");

module.exports = function(app) {


    // Sets the get for the api/friends route
    app.get('/api/friends', function(req, res) {
        res.json(friends);
        console.log(friends);
       
    });


     app.post('/api/friends', function(req, res) {

     
    	//	Set variables only needed for the post
        var difference = 40;
        var matchName = '';
        var matchPhoto = '';

   // For-each loop to go through the data in friends.js to find a match
      for (var j = 0; j < friends.length; j++) {
    
    // Variables for comparing matches
            var matchedScoresArray = [];
            var totalDifference 

    // Function to assist in the addition reduce() below
          function add(total, num) {
               return total + num;
           }
      }
           
    // new value to the matchedScoresArray
    //  for (var i = 0; i < friends.scores.length; i++) {
    //  matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friends.scores[i])));
    //  console.log(newFriends.scores)

     }

            
    
    //     // Once the cycle is complete, the match with the least difference will remain,
    //    // and that data will be sent as a json object back to the client
    //     res.json({
    //         name: matchName,
    //         photo: matchPhoto

    //     });
    //             })
    //     });
     

    //     // This adds the new users sent data object to friends.js
    //     friends.push(req.body);
    

 })
}

