if(localStorage.getItem('darkMode') === 'enabled')
{
	document.body.classList.toggle('dark');
}

document.querySelector('.darkMode').addEventListener('click', () =>
{
	document.body.classList.toggle('dark');
	
	if (document.body.classList.contains('dark')) 
	{
 		localStorage.setItem('darkMode', 'enabled');
	}
	else
	{
	  	localStorage.removeItem('darkMode');
	}

})


function collapse(){
	var collapse = document.getElementsByClassName("coll")[0];
	var collbtn = document.getElementsByClassName("collapsible")[0];
	
	if(collapse.style.display == "none"){
		collapse.style.display = "block"
		collbtn.innerHTML = "Less"
	}else{
		collapse.style.display = "none"
		collbtn.innerHTML = "More"
	}
}


// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
// 	//   coll.value = "More";
//     } else {
//       content.style.display = "block";
// 	  coll.value = "Less";
//     }
//   });
// }
