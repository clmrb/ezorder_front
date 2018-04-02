function commonService($http, REST) {
    var self = this;

    self.user = {};

    self.users = {
        kitchen: {
            type: "order",
            labels: {
                main: "cuisine",
                switchTo: "Passer en salle",
                header: "Cuisine",
                headerBox: "Partie cuisine"
            }
        },
        order: {
            type: "order",
            labels: {
                main: "salle",
                switchTo: "Passer en cuisine",
                header: "Service en salle",
                headerBox: "Partie salle"
            }
        }
    }

    self.setUserType = function (type) {
        self.user = self.users[type]
    }

    self.disconnect = function () {
        return $http.delete(REST.ezorders + "/auth/signout");
    }

    self.auth = function (user) {
        return $http.post(REST.ezorders + "/auth", user);
    }

    self.isAuth = function () {
        return $http.get(REST.ezorders + "/auth/current");
    }

    return self;
}

angular.module("app.common")
    .factory("commonService", commonService);