let weatherCondition = "rainy";
let hasUmbrella="true";
if (weatherCondition=="sunny"){
    console.log("It's a sunny day! Go outside.");
}else if (weatherCondition=="rainy"){
    if (hasUmbrella=="true"){
        console.log("It's raining, but you have an umbrella. You can go outside.");
    }else{
        console.log("It's raining and you don't have an umbrella. Better stay inside.");
    }}