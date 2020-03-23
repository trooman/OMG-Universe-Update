$name = $_POST['name'];
$email = $_POST['email'];
$phoneNumber = $_POST['number'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phoneNumber = htmlspecialchars($phoneNumber);

$name = urldecode($name);
$email = urldecode($email);
$phoneNumber = urldecode($phoneNumber);

$name = trim($name);
$email = trim($email);
$phoneNumber = trim($phoneNumber);

echo $name;
echo "<br>";
echo $name;
echo "<br>";
echo $phoneNumber;