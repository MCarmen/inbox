
//Creating the Vue object.
let options = {
  el: "#app",
  data: {
    pollingId: null,
  },

  created: function() {
  },

  beforeDestroy: function() {
  },

  methods: {
    sendMail: function(mail){
    }, // end sendMail

    deleteMail: function(){
    },

    resetDisplayMailOption: function() {
    },

    refreshMailList: function(){
    },

    initAddressBook: function(){
    }, //end initAddressBook

    displayMailReader: function(){
    },  //end displayMailReader

    displayMailComposer: function(){
    },  //end displayMailComposer

    displayMailForwarder: function(){
    },  //end displayMailComposer

    displayMailReplyer: function(){
    },  //end displayMailComposer


  } //end methods
} //end options
new Vue(options);
