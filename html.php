<!DOCTYE html>
<html>
  <head>
    <title>Username Check</title>
    <scrit src="verify_ajax.js"></scrit>
    <style>
      /* style for submit button*/
      float: right;
      background-color: green;
      color: white;
      padding:10px 20px;
      cursor: pointer;
      text-align: left;
      
    </style>
  </head>
  <body>
    <table>
      <tr>
        <td><label for="username">User  Name</label></td>
        <td><input type="text" id ="username" required></td>
      </tr>
      <tr id="submit-cell">
        <td colspan= "2"><button id="submit-button" type="submit">Submit</button></td>
      </tr>
    </table>
    <p id="error-container" style="color:red;"></p>
    <p id :verification-message" style="color:green;"></p>
  </body>
</html>
