// Callback hell

greetUser(id, function(user) {
  getOrders(user.id, function(orders) {
    getDetails(orders[0].id, function(details) {
      // deeply nested, hard to read and handle errors
    })
  })
});

// Solution -> Use Promises -> flat .then() easy to read , maintaim and handle errors

greetUser(id)
.then(user => getOrders(user.id))
.then(orders => getDetails(orders[0].id))
.catch(err => console.log(err)) // One place to handle all errors
.finally(() => console.log('Done'));