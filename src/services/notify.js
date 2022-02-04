const Zenziva = require("./zenziva")


class Notify {

    
    constructor(type) {
        this.type = type || 'sms';
        this.user = null;
        this.message = "";

        if(!(Array.isArray(this.type) || typeof this.type == 'string')) throw new Error("type not string or array")
    }

    to(user) {
        this.user = user;
        return this;
    }

    send(message) {
        this.message = message;
        if(Array.isArray(this.type)) {
            this.type.forEach(type => this.sendMessage(type));
            return this;
        }

        
        this.sendMessage(this.type);

        
        return this;
    }

    sendMessage(type) {
        if(type.toLowerCase() === "sms") {
            if(Array.isArray(this.user)) {
                this.user.forEach(user => {
                    Zenziva.send(user.phone, this.message);
                })

                return this;
            }


            return Zenziva.send(this.user.phone, this.message)

        }

        if(type.toLowerCase() === "wa") {
            if(Array.isArray(this.user)) {
                this.user.forEach(user => {
                    Zenziva.sendWa(user.phone, this.message);
                })
                
                return this;
            }
            Zenziva.sendWa(this.user.phone, this.message);

            return this;
        }
    }
}

module.exports = Notify