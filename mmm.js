var mmm = {};
(function(ns){
    function Field(){
        var value;
        this.get = function() {
            return value;
        };
        this.set = function(v) {
            value = v;
        };
    }
    ns.Field = Field;

    function Model(options){
        var options = options || {};
        this.fields = {
            id: new Field() 
        };
        this.setFields(options.fields || {});
    }
    Model.prototype = {
        save: function(success, error){},
        getField: function(name){
            var field = this.fields[name];
            return (field) ? field.get() : undefined;
        },
        setField: function(name, value){
            var field = this.fields[name];
            if(field){
                field.set(value);
            }
        },
        setFields: function(fields){
            for(var field in fields){
                this.setField(field, this.fields[field]);
            }
        }
    };
    ns.Model = Model;
    
})(mmm);

