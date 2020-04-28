
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

    displayMailReplier: function(){
    },  //end displayMailComposer


  } //end methods
} //end options
let vm = new Vue(options);
