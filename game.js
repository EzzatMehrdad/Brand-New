
d3.select("#peace")
.on("click", function()
   {
    d3.select("#box")
        .classed("hidden", false);
} )   


d3.select("#usa")
.on("click", function()
   
   {
    d3.selectAll("p")
    .text("America is a great country, but did it work for peace in the world?");
})


d3.select("#book")
.on("click", function()
   
   {
    d3.selectAll("p")
    .text("Book help us to learn and grow, but that learning and growth did not lead to peace, did it?");
})

d3.select("#gun")
.on("click", function()
       {
    d3.selectAll("p")
    .text("The Guns made wars winnable, but then guns like nuclear weapons made the war unwinnable.");
})

         