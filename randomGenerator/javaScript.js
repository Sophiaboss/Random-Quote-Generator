

$(document).ready(function(){
  ranQqoGen.tweetBtn();
  ranQqoGen.getQuote();
})

var ranQqoGen = {};
  ranQqoGen.tweetBtn = function(){$("#round").on('click', function(){
                        $("#tweet").css('display', 'unset')
                        })}
  ranQqoGen.getQuote = function(){$('#round').on('click', function(e) {
                        e.preventDefault();
                        $.ajax({
                        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
                        type: 'GET',
                        dataType: 'jsonp',
                        cache: false,
                        success: function(data){
                          console.log(data)
                          ranQqoGen.newQuote(data);
                                                      }
                        });
                        });
                        };

ranQqoGen.newQuote = function(data){
                        data.forEach(function(val){
                         $('#quoteBy').text(val.title);
                         $('#quote').html(val.content);
                         var quote = val.content.substring(3, val.content.length-6) + "-" + val.title;;
                         ranQqoGen.tweetQuote(quote);                    
                          }); 
                      }

ranQqoGen.tweetQuote = function(quote){
                          $("#tweet").on("click", function(){
                          window.open('https://twitter.com/intent/tweet?text=' + quote, "Tweet the Quote!", "width=600,height=400");
                           });
};
  
 

