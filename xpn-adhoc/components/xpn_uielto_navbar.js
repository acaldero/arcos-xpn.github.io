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

  var uielto_navbar = {
        props:      {

                    },

        template:   ' <div>' +
                    '   <b-navbar toggleable="sm" class="header my-0 mx-1 py-0 px-2">' +
                    '    <b-navbar-brand class="p-0 m-0" href=".">' +
                    '        <div class="container">' +
                    '          <div class="row">' +
                    '            <div class="headerText col-auto my-0 py-0 pr-1 text-uppercase">' +
                    '              <h1>EXPAND</h1>' +
                    '            </div>' +
                    '            <div class="w-100"></div>' +
                    '            <div class="headerName col-auto my-0 py-0 font-weight-bold mx-1">' +
                    '              Ad-Hoc Parallel File System' +
                    '            </div>' +
                    '          </div>' +
                    '        </div>' +
                    '    </b-navbar-brand>' +
                    ' ' +
                    '    <b-navbar-toggle target="nav_collapse" aria-label="Open/Close more information"></b-navbar-toggle>' +
                    ' ' +
                    '    <b-collapse is-nav id="nav_collapse">' +
                    '      <b-navbar-nav class="ml-auto">' +
                    '        <b-nav-item class="mb-0 pb-0 p-0" target="_blank" href=\'https://www.arcos.inf.uc3m.es/\'>' +
                    '          <img alt="ARCOS" class="p-0 headerLogo" src="./images/arcos.svg">' +
                    '        </b-nav-item>' +
                    ' ' +
                    '        <b-nav-item class="mb-0 pb-0 p-0" target="_blank" href=\'https://www.inf.uc3m.es/\'>' +
                    '          <img alt="Computer Science and Engineering Departament" ' +
                    '               class="p-0 headerLogo" ' +
                    '               src="./images/dptoinf.png">' +
                    '        </b-nav-item>' +
                    '      </b-navbar-nav>' +
                    '    </b-collapse>' +
                    '   </b-navbar>' +
                    ' ' +
                    '   <b-navbar type="dark" toggleable="sm" class="header" variant="dark" style="margin: 1px; padding-right: 3%; padding-left: 3%; text-align: center;">' +
                    '     <b-navbar-toggle target="nav_collapse2"></b-navbar-toggle>' +
                    ' ' +
                    '     <b-collapse is-nav id="nav_collapse2" is-nav>' +
                    '       <b-navbar-nav>' +
                    '         <b-nav-item href="index.html#introduction">Introduction</b-nav-item>' +
                    '         <b-nav-item href="index.html#description">Description</b-nav-item>' +
                    '         <b-nav-item-dropdown text="User Guide" right>' +
                    '           <b-dropdown-item href="instalation.html">Instalation</b-dropdown-item>' +
                    '           <b-dropdown-item href="running.html">Running</b-dropdown-item>' +
                    '           <b-dropdown-item href="faq.html">FAQ</b-dropdown-item>' +
                    '         </b-nav-item-dropdown>' +
                    '         <b-nav-item href="index.html#publications">Publications</b-nav-item>' +
                    '         <b-nav-item href="index.html#updates">Updates</b-nav-item>' +
                    '         <b-nav-item href="index.html#authors">Authors</b-nav-item>' +
                    '       </b-navbar-nav>' +
                    '     </b-collapse>' +
                    '   </b-navbar>' +
                    ' </div>'
    }

  Vue.component('navbar-xpn', uielto_navbar) ;


