angular.module('passwordApp', [])
    .controller('PasswordController', [function() {
        var self = this;
        self.hello = "Hello world"
    }])
    .directive('passwordPicker', [function() {
            return {
                templateUrl: 'password-directive.html'
            };
        }
    ]);
