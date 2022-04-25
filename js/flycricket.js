/*  
    Free & Open Source Privacy Policy Generator: A simple web app to generate a 
	generic privacy policy for your Android/iOS apps or websites

    Copyright 2017-Present Digital Malayali, Nishant Srivastava, Arthur Gareginyan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function fc_deploy() {
  var form = document.getElementById("fc-form");

  // fill in the body with the html content
  document.getElementById('fc-body').value = getContent('privacy_content')
  
  form.submit();
}