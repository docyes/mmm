var mmm = {};
(function(ns){
    function Field(){
        var _value;
        this.get = function() {
            return _value;
        };
        this.set = function(value) {
            _value = value
        };
    }
    ns.Field = Field;

    function Model(options){
        var options = options || {};
        this.fields = {
            id: new Field() 
        };
        for(var field in options.fields || {}){
            if(this.fields.hasOwnProperty(field)){ 
                this.fields[field].set(options.fields[field]);
            }
        }
    }
    Model.prototype = {
        save: function(success, error){
            var method = (this.fields.id) ? 'update' : 'create';
            this.datastore(method, success, error); 
        },
        parse: function(response){
            return response;
        },
        datastore: function(method, success, error){
            this.parse(undefined);
            success(this);
        },
        get: function(name){
            var field = this.fields[name];
            return (field) ? field.get() : undefined;
        },
        set: function(name, value){
            var field = this.fields[name];
            if(field){
                field.set(value);
            }
        }
    };
    ns.Model = Model;

})(mmm);

