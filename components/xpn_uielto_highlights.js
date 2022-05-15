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


/* jshint esversion: 6 */

var uielto_highlights= {
      props:      {
                    highlights:        { type: Array,  required: true }
                  },

      template:   ' <div class="col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto" style="margin-top:2%;">' +
                  '   <b-carousel ' +
	          '      id="carousel"' +
	          '      :interval="5000"' +
	          '      controls indicators' +
	          '      img-width="1024"' +
	          '      img-height="480"' +
	          '      background="#ababab"' +
	          '      style="text-shadow:1px 1px 2px #333;"' +
	          '   >' +
                  '     <b-carousel-slide v-for="item in highlights" :caption="item.caption" :img-src="item.media_src"></b-carousel-slide>' +
                  ' </div>'
  }

Vue.component('highlights', uielto_highlights) ;
