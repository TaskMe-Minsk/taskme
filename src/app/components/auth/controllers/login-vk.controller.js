(function () {
    'use strict';

    angular.module('taskMe').controller('LoginVKController', [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
            var _this = this;
            
            var clientId = '4989975';
            var redirect = 'https://oauth.vk.com/blank.html';
            var scopeData = 'notify,friends,photos,audio,video,docs,notes,pages,status,offers,questions,wall,groups,messages,notifications,stats,ads,offline,nohttps';
            var display = 'popup';
            var version = '5.21';
            var responseType = 'code';
            var clientSecret = 'lIooV2GNXSqGgqJHLVmS';
            
            var strVk ='https://oauth.vk.com/authorize?client_id='+clientId
                        +'&redirect_uri='+redirect
                        +'&scope=' + scopeData
                        +'&display=' + display
                        +'&v=' + version
                        +'&response_type=' + responseType
                        +'&client_secret=' + clientSecret; 
            
            this.VKLogin=function(){
                if(navigator.onLine){
//                    mixpanel.track(
//                            "Authentication Initiated",
//                            { "source": "vk" }
//                        );
                            window.authWin = window.open( strVk , "_popup", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
                          
                            //monitor();
                }else{
                    alert("Sorry, we currently do not have Internet access.");
                }	
            };

//            function monitor (){
//                window.int = self.setInterval(function() {
//                    
//                    if (window.authWin && window.authWin.location.href) {
//                        var currentURL = window.authWin.location.href;
//                        var inCallback = currentURL.indexOf("#code");
//                        if (inCallback >= 0) {
//                            var codeData = currentURL.substr(currentURL.indexOf("="));
//                            code = codeData.substring(1);
//                            var value = (code.split('&'))[0];
//                            console.log('code');
//                            console.log(value);
//                            saveToken(value);
//                            window.authCount = 0;
//                            window.clearInterval(int)
//                              $timeout(function() {
//                                  window.authWin.close();
//                              }, 3000);
//                        }
//                    }
//                }, 100);
//            };
//            
//             function saveToken(access_token){	
//                console.log(apiUrlProvider.saveVKToken);
//                var request = $http({
//                    method: 'GET',
//                    url : apiUrlProvider.saveVKToken,
//                    headers:
//                    {
//                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//                    },
//                    params : { code : access_token }
//                })
//                    .success(function(response) {
//                        console.log("successVK");
//                        console.log(response);
//                        mixpanel.track(
//                                "Authentication Successful",
//                                { "source": "vk", "type": "login" }
//                            );
//                        if(response.result.status=="registered"){
//                            $localStorage.access_token = "VK";
//                            console.log($localStorage.access_token);
//                            $state.go('eventmenu.mainPage');
//                            authorization_service.getUserVK();
//                        }
//                    }).error(function(response) {
//                        mixpanel.track(
//                                "Authentication Failed",
//                                { "source": "vk", "reason": response.data.error}
//                            );
//                        console.log("errorVK");
//                        console.log(response);
//                    });
//            };
        }
    ]);
})();