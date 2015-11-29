;(function(app) {
  app.service('CategoriesService', [

    function() {
      var categories = [{
        id:0,
        name:'Курьер'
      },{
        id:0,
        name:'Домашний мастер'
      },{
        id:0,
        name:'Ремонт'
      },{
        id:0,
        name:'Грубая мужская сила'
      },{
        id:0,
        name:'Другое'
      }];
      return {
        categories: function() {
          return categories;
        }
      };
    }
  ]);
})(window.taskme);
