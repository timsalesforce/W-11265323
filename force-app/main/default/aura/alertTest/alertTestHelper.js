({
	makePrimary : function(component,event,helper) {
        console.log("VALUE "+component.get("v.primaryQuote"));
        var value = component.get("v.primaryQuote");
        var primary = "";
        primary = value.substring(8, 26);
        // make Spinner attribute true for display loading spinner 
        component.set("v.spinner", true); 
	},
    
    checkInternalReview : function(component,event,helper) {
        // make Spinner attribute true for display loading spinner 
        component.set("v.spinner", true); 
	},

    openit: function() {
        this.LightningAlert.open({
            message: 'this is the alert message',
            theme: 'error',
            label: 'Error!',
        }).then(function () {
            console.log('alert is closed');
        });
    }
})