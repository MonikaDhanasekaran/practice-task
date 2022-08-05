var res=fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data)=>data.json()).then((data1)=>foo(data1));
//var data1={
    //AN: 'data';
//}
function foo(res){
    for(var i=0;i<res.length;i++){
        console.log(res[i]);
        var div=document.createElement("div");
        div.style.color="blueviolet";
        div.style.fontSize="32px";
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${res[i].id}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${res[i].title}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${res[i].body}</h6>
        </div>
        </div>`;
    document.body.append(div);
}
}