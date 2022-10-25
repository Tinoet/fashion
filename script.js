console.log(e.target);//gives us the element instead of the input or whatever element the event was fired from
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);//tells us the kind of event that it is
    //getting mouse position
    console.log(e.clientX);// position from the topleft of the browser window 
    console.log(e.clientY);// position from the topright of the browser window 
    //getting mose position from the actual element
    console.log(e.offsetX);
    //mouse function: checking if when you click a function if a function key(alt,ctrl,shift) is clicked
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
