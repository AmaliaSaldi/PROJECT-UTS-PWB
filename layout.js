const ubah = document.getElementById("Header")
ubah.addEventListener("mouseover",function(){
ubah.style.backgroundColor = "pink";

})

const ubah1 = document.getElementById("Header")
ubah1.addEventListener("click",function(){
ubah1.style.backgroundColor = "grey";

})

const ubah2 = document.getElementById("Navbar")
ubah2.addEventListener("mouseover",function(){
ubah2.style.backgroundColor = "camel";

})

const ubahH = document.getElementById("LeftPanel")
ubahH.addEventListener("mouseover",function(){
    ubahH.style.backgroundColor = "blue";
})

const ubah4 = document.getElementById("LeftPanel")
const ubahA = document.getElementById("Left1")
const ubahB = document.getElementById("Left2")
const ubahC = document.getElementById("Left3")
    ubah4.addEventListener("click",function(){
        ubahA.style.backgroundColor = "white";
        ubahB.style.backgroundColor = "pink";
        ubahC.style.backgroundColor = "white";

    })

    const ubahH2 = document.getElementById("CenterPanel")
    ubahH2.addEventListener("mouseover",function(){
        ubahH2.style.backgroundColor = "yellow";
    })

    const ubah5 = document.getElementById("CenterPanel")
    const ubah5A = document.getElementById("center1")
    const ubah5B = document.getElementById("center2")
    const ubah5C = document.getElementById("center3")
        ubah5.addEventListener("click",function(){
        ubah5A.style.backgroundColor = "brown";
        ubah5B.style.backgroundColor = "brown";
        ubah5C.style.backgroundColor = "brown";

    })

    const ubahH3 = document.getElementById("RightPanel")
    ubahH3.addEventListener("mouseover",function(){
        ubahH3.style.backgroundColor = "yellow";
    })

    const ubah6 = document.getElementById("RightPanel")
    const ubah6A = document.getElementById("right1")
    const ubah6B = document.getElementById("right2")
        ubah6.addEventListener("click",function(){
        ubah6A.style.backgroundColor = "green";
        ubah6B.style.backgroundColor = "green";
    })

    const ubahH4 = document.getElementById("Footer1")
    ubahH4.addEventListener("mouseover",function(){
        ubahH4.style.backgroundColor = "black";
    })

    const ubahH4a = document.getElementById("Footer1")
    ubahH4a.addEventListener("mouseout",function(){
        ubahH4a.style.backgroundColor = "#99627A";
    })

    const ubahH5 = document.getElementById("Footer2")
    ubahH5.addEventListener("mouseover",function(){
        ubahH5.style.backgroundColor = "violet";
    })

    const ubahH5a = document.getElementById("Footer2")
    ubahH5a.addEventListener("mouseout",function(){
        ubahH5a.style.backgroundColor = " #643843";
    })

    var button = document.getElementById("button")
    button.addEventListener("click",function(){
        var warna = document.getElementById("input").value;
        let li = document.getElementsByTagName("LI");
        for (let i=0; i<li.length; i++){
            if(i%2 == 1)
                li[i].style.backgroundColor = warna;
        }
    });