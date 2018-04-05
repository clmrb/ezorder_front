function menuCtrl(commonService, authService, $state) {
    var self = this;

    function onDisconnect() {
        authService.setAuthentified(false);
        $state.go("login");
    }

    self.labels = commonService.user.labels;

    self.disconnect = function () {
        commonService.disconnect().finally(onDisconnect);
    }

    return self;
}

angular.module("app.menu")
    .controller("menuCtrl", menuCtrl);