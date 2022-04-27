/*
   *  Copyright 2020-2022 Felix Garcia Carballeira, Diego Camarmas Alonso, Alejandro Calderon Mateos, Luis Miguel Sanchez Garcia, Borja Bergua Guerra
   *
   *  This file is part of Expand.
   *
   *  Expand is free software: you can redistribute it and/or modify
   *  it under the terms of the GNU Lesser General Public License as published by
   *  the Free Software Foundation, either version 3 of the License, or
   *  (at your option) any later version.
   *
   *  Expand is distributed in the hope that it will be useful,
   *  but WITHOUT ANY WARRANTY; without even the implied warranty of
   *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   *  GNU Lesser General Public License for more details.
   *
   *  You should have received a copy of the GNU Lesser General Public License
   *  along with Expand.  If not, see <http://www.gnu.org/licenses/>.
   *
   */ 


/********************
 * Global variables *
 ********************/


/****************
 * Vue instance *
 ****************/


window.app = new Vue({

  /*DOM ID*/
  el: "#app",


  /*Vue data*/
  data: {
    highlights: "",
    user_guide: "",
    faqs: "",
    publications: "",
    evolution: ""
  },


  /*Created vue instance*/
  created(){
    this.load_content();
  },


  /*Mounted vue instance*/
  mounted(){
 
  },


  /*Vue methods*/
  methods:{
    load_content() {
      $.getJSON('content/highlights.json', function(cfg1){
        app._data.highlights = cfg1;
      });

      $.getJSON('content/user_guide/user_guide.json', function(cfg2){
        app._data.user_guide = cfg2;
      });

      $.getJSON('content/user_guide/faq.json', function(cfg5){
        app._data.faqs = cfg5;
      });

      $.getJSON('content/publications.json', function(cfg6){
        app._data.publications = cfg6;
      });

      $.getJSON('content/evolution/evolution.json', function(cfg7){
        app._data.evolution = cfg7;
      });
    }
  },
});



/*************
 * Functions *
 *************/

