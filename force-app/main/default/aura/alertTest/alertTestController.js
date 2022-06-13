({
    doInit: function (component, event, helper) {
        console.log('alert starts here');
        helper.openit();
        console.log('alert ends here');
        helper.checkInternalReview(component, event, helper);
        // make Spinner attribute true for display loading spinner 
        component.set("v.spinner", true);
    },

    changeCurrencyToVal: function (component, event, helper) {
        //console.log(component.find("currencyValue").get("v.value").split(" - ")[0]);
        // make Spinner attribute true for display loading spinner 
        component.set("v.spinner", true);
    }

    /*showSpinner: function(component, event, helper) {
       // make Spinner attribute true for display loading spinner 
        component.set("v.spinner", true); 
        
   },
    
    
    hideSpinner : function(component,event,helper){
     // make Spinner attribute to false for hide loading spinner    
       component.set("v.spinner", false);
    }*/
})