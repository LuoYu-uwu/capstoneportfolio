const facts = ["I love K-pop","I have a dog", "I'm a big Kuromi fan!",
    "I love horror and used to only go cinema for horror movies", 
    "I enjoy thrilling activities such as roller coasters", 
    "I do crocheting and wool felting",
    "My favourite colour theme is pastel colour, especially purple", 
    "I love sour soups so I always add a lot of vinegar, but I don't like sour fruits"];

let currentIndex=0;

function addFacts() {
    if (currentIndex < facts.length) {
        document.getElementById("funfacts").innerHTML += "<p>"+facts[currentIndex]+"</p>";
        currentIndex+=1;
    }
    else if (currentIndex == facts.length) {
        document.getElementById("funfacts").innerHTML += "<p>Oops no more fun facts!</p>";
        currentIndex+=1;
    }
}