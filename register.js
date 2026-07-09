<!DOCTYPE html>
<html>
<head>

<title>KaziPro Register</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>


<h1>
Kazi<span style="color:#FF8A00">Pro</span>
</h1>


<input id="name" placeholder="Jina">

<input id="email" placeholder="Email">

<input id="password" type="password" placeholder="Password">


<select id="role">

<option value="seeker">
Mtafuta kazi
</option>

<option value="employer">
Kampuni
</option>

<option value="trainer">
Trainer
</option>

</select>


<button onclick="register()">
Create Account
</button>



<script type="module" src="js/auth.js"></script>


</body>
</html>
