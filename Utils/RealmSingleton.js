const Realm = require('realm');
import ContactSchema from '../Models/contact';

var RealmSingleton = (function () {
    var instance;

    function createInstance() {
        var object = new Realm(ContactSchema);
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = RealmSingleton;
