const currentTime = new Date().getHours();
let greeting;

if (currentTime < 12) 
{
  greeting = "Good morning Sri!";
} 
else if (currentTime < 17) 
{
  greeting = "Good afternoon Sri!";
} 
else if (currentTime < 20)
{
  greeting = "Good evening Sri!";
} 
else 
{
  greeting = "Good Night Sri See you again";
}

alert(greeting);
    