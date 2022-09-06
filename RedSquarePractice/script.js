var imgId = 2
setInterval(function(){ 
        //this code runs every second
    if (imgId <12) {
        document.getElementById("img").style.backgroundImage =  "url('"+imgId+".jpg')";
        imgId = imgId+1;
    }
    else {
        document.getElementById("img").style.backgroundImage =  "url('"+imgId+".jpg')";
        imgId = 1;
    }}, 400);

    const observerOptions = {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
    };
    


// First we select the element we want to target
const targets = document.querySelectorAll('.animated-text');

// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries) {
  // The callback will return an array of entries, even if you are only observing a single item
    entries.map((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible')
    } else {
        entry.target.classList.remove('visible')
    }
    });
}




// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection);

// Finally start observing the target element
//observer.observe(target);    
targets.forEach( section => {
    observer.observe(section);});
//document.getElementById('lets__talk__wrapper').addEventListener('mouseover', ()=> {
  //  document.querySelectorAll('.blur').forEach(item => item.classList.add('blurred'));
//})