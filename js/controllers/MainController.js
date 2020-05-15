app.controller('MainController', ['$scope', function($scope){
    $scope.title= 'Best Books Ever';
    $scope.promo = 'SALE!';
    $scope.products = 
    [
      {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51H8nYQc8XL.jpg',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1399495284l/9408311.jpg',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'Turtles All the Way Down',
        price: 10.78,
        pubdate: new Date('2017', '10', '10'),
        cover: 'https://images-na.ssl-images-amazon.com/images/I/81cAi-RIjcL.jpg',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'An Absolutely Remarkable Thing',
        price: 18.85,
        pubdate: new Date('2018', '09', '25'),
        cover: 'https://images-na.ssl-images-amazon.com/images/I/91zfvEJcb1L.jpg',
        likes: 0,
        dislikes: 0
      }
    ];
    $scope.plusOne = function(index){
      $scope.products[index].likes += 1;
    }
    $scope.minusOne = function(index){
      $scope.products[index].dislikes += 1;
    }
  }]);