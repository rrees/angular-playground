angular.module('passwordApp', [])
    .controller('PasswordController', [function() {
        var self = this;
        self.hello = "Hello world"
    }])
    .directive('passwordPicker', [() => {
            const template = `
            <section>
                <div>
                    <input type="text" ng-value="password">
                </div>

                <div>
                    <select ng-model="category" ng-options="cat.label for cat in categories">
                    </select>
                </div>
            </section>
            `;

            return {
                template: template,
                restrict: 'E',
                link: ($scope, $element, $attrs) => {
                    $scope.password = "Not yet generated";
                    $scope.categories = [
                        {
                            label: "Animals",
                            value: 'animals'
                        },
                    ];
                    $scope.category = $scope.categories[0];
                },
                scope: {

                }
            };
        }
    ]);
