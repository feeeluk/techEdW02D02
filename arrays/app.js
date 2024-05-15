let items = new Array();
items [0] = new Array("First heading", "First text");
items [1] = new Array("Second heading", "Second text");
items [2] = new Array("Third heading", "Third text");
items [3] = new Array("Fourth heading", "Fourth text");
items [4] = new Array("Fifth heading", "Fifth text");

for(i = 0; i < items.length; i++){

    const blogOuterBox = document.createElement("div");
    blogOuterBox.classList.add("blogOuterBox");

    const title = document.createElement("h2");
    title.innerHTML = items[i][0];

    const blogInnerBox = document.createElement("div");
    blogInnerBox.classList.add("blogInnerBox");
    blogInnerBox.innerHTML = items[i][1];

    blogOuterBox.appendChild(title);
    blogOuterBox.appendChild(blogInnerBox)
    document.body.appendChild(blogOuterBox);
}

// Scope
// ========================================================

// testVariableChild()

// function testVariableChild()
// {
//     var test = "child variable";
//     console.log(test);

//     testVariableGrandChild()

//     function testVariableGrandChild()
//     {
//         var test = "grand child variable";
//         console.log(test);
//     }
// }