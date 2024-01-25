container = document.getElementById("container");
url = "https://lust.scathach.id/pornhub/";
default_query = "search?key=brazzers";
search_btn = document.getElementById("search_btn");
search_query = document.getElementById("search_query");
search_random = document.getElementById("search_random");
function fetch_homepage(q){
	container.innerHTML = "";
	fetch(url+q).then(r => r.json()).then(data =>{
		data.data.forEach(item =>{
			var box = document.createElement("div");
			box.className = "box";
			var img = document.createElement("img");
			img.className = "vidImg";
			img.src = item.image;
			var an = document.createElement("a");
			an.href = item.video;
			an.appendChild(img);
			var title = document.createElement("h3");
			title.className = "title";
			title.textContent = item.title;
			box.appendChild(an);
			box.appendChild(title);
			container.appendChild(box);
		});
	});
}
fetch_homepage(default_query);  //1st time page open
search_btn.addEventListener('click',()=>{
	if (search_query.value != ""){
		new_query = "search?key="+search_query.value;
		fetch_homepage(new_query);
	}
});
search_random.addEventListener('click',()=>{
	fetch(url+"random").then(r=>r.json()).then(data =>{
		window.location.href = data.assets[0];
	})
});
