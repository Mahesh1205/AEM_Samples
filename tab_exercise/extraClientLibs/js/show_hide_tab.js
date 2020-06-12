(function (document, $, Coral) {
    var $doc = $(document);
    var radioSelector = '[name="./radiogroupA"]';  
   $doc.on('dialog-ready', function(e) {   
    $(radioSelector).on('change', (event)=> {  
      
      // hide all tabs
      $(radioSelector).each(function() {
        var radioValue = $(this).val();
        var tabSelector = `.tabtest coral-tablist coral-tab coral-tab-label:contains('${radioValue}')`;
        $(`${tabSelector}`).parent().hide();
      });
      
    var selectedTabId = event.target.value;
    if(selectedTabId){
      console.log('hiding ' + selectedTabId);      
       $(`.tabtest coral-tablist coral-tab coral-tab-label:contains('${selectedTabId}')`).parent().show();
    }    
    });

   });
  })(document, Granite.$, Coral);