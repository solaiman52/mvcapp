var translationService = function ($http) {
    var self = this;

    self.LoadLanguage = function (languagePath, loadLanguage) {
        
        $http.get("/api/Translation/GetLanguage?languagePath=" + languagePath).success(function (result) {
            var data = JSON.parse(result);

            put(languagePath, data);

            if (typeof (loadLanguage) != "undefined") {
                loadLanguage(data);
            }
        })
                .error(function (error) {
                    console.log('LoadLanguage error' + error);
                });
       
    };

    self.LoadLanguagesInBatch = function (languagePaths) {

        delete $http.defaults.headers.common['X-Requested-With'];
        $http.get("http://i18n.trustpilot.com/v1/translations/en-us?keys=" + languagePaths).success(function (result) {
            for (var propertyName in result) {

                put(propertyName, result[propertyName]);
            }
        })
                .error(function (error) {
                    console.log('LoadLanguagesInBatch error' + error);
                });

    };

    self.GetLanguage = function (languagePath) {
        var language = '';

        //if (!_.isNullOrUndefined(languagePath)) {
        language = get(languagePath);
        //}

        return language;
    };

    self.GetLanguageAsVolatile = function (languagePath) {
        var language = '';

        //if (!_.isNullOrUndefined(languagePath)) {
        language = get(languagePath);

        self.ClearData(languagePath);
        //}

        return language;
    };

    self.GetLanguageAsVolatile = function (languagePath) {
        var language = '';

        if (!_.isNullOrUndefined(languagePath)) {
            language = get(languagePath);

            self.ClearData(languagePath);
        }

        return language;
    };

    self.ClearData = function (key) {
        localStorage.removeItem(key);
    };

    function get(key) {
        var data = localStorage.getItem(key);
        if (data) {
            return data;
        }
        return null;
    };

    function put(key, data) {
        if (data) {
            localStorage.setItem(key, data);
        } else {
            localStorage.removeItem(key);
        }
    };
};

if (typeof (scotchApp) != "undefined") {
    scotchApp.service('translationService', ['$http', translationService]);
}