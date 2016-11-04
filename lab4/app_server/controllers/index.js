/* GET home page */
module.exports.index = function(req, res){
  res.render('index', { title: 'Lab 4' });
  //res.render('index', { paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi lectus, ultrices ut neque nec, condimentum pellentesque magna. Nunc placerat mi urna, eu iaculis ex volutpat ac. Aenean sit amet dolor eget augue volutpat tristique ut non velit. Morbi at tellus dolor. Cras sollicitudin elementum erat et volutpat. Nam sed lobortis ex. Nulla gravida pretium hendrerit. Cras dapibus leo eros. Pellentesque fringilla tortor fringilla diam vehicula, quis pellentesque purus ultrices. Aliquam tempor velit ac ante sollicitudin viverra. Curabitur euismod massa ut vehicula blandit.' });
};