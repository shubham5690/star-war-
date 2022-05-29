async function getData(){
    let search=document.getElementById('query').value;
    // console.log(search);
    const url=` https://swapi.dev/api/people/?search=${search}`

    let res= await fetch(url);// give the promise
    let data= await res.json();// collect the data
    console.log(data.results)

    // append(data.results)

    return data.results; // it will excute in main()

    
}

function append(data){
    let box=document.getElementById('results');
    box.innerHTML=null;
    data.forEach(function(el){
        // let name=document.createElement('p');
        // name.innerText=el.name;
        // name.style="color:white ; padding-left:20px"
        // let arr=[]
        let btn=document.createElement('button')
        btn.innerText=el.name
        btn.style="width:100%; text-align: left; padding-left:10px; font-size:18px; border:none;"

        box.append(btn)
        // arr.push(btn)
        // console.log(arr)
        btn.addEventListener('click',function(){
            showData(el)

        })

    })
    
}
// let arr=JSON.parse(localStorage.getItem('clickdata'))  || []
function  showData(el){
    // console.log(el)
    let arr=[];
    arr.push(el)
    // console.log(arr)
    localStorage.setItem('clickdata',JSON.stringify(arr))

    window.location.href='showdata.html'
}


async function main(){
    let data= await getData();
    append(data)
}

//--------------------debouncing is used here-----------------------------
let id;
function debouncing(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}