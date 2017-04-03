
<?php 
$link = new mysqli('localhost','root','','test');

$post = $link->query("SELECT `post` FROM `post`");
$post = $post->fetch_all();
print_r($link->error());
foreach($post as $p){
	print_r($p[0]);
}
if(isset($_POST['submit'])){
	$text = $_POST['text'];
	$link->query("INSERT INTO `post` (`post`) VALUES('$text')");
}
?>
<form action="" method="post">
<input type="text" name="text"></input>
<input type="submit" name="submit">submit</input>
</form>