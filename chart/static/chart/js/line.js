// //Test reussi
// var btn=document.getElementById("btn");
// btn.addEventListener('click',function(e)
// {
//   alert("Salut");
// });
$(function()
{
  $('#btn').click(function()
    {
      alert("Salut");
    });

  $.ajax({
    url:"127.0.0.1:8000/chart/ajax-line",
    // url:"{% url 'chart:ajax-line' %}",
    type:"get",
    success: function(data)
    {
        var username=[];
        var facebook_follower=[];
        var twitter_follower=[];
        var googleplus_follower=[];
        for(var i=0;i<data.length;i++)
         {
            username.push(data[i].fields.user);
            facebook_follower.push(data[i].fields.facebook);
            twitter_follower.push(data[i].fields.twitter);
            googleplus_follower.push(data[i].fields.googleplus);
         }
         console.log(data);
         const CHART=document.getElementById("lineChart");
         var barChart=new Chart(CHART,
            {
                // type:'doughnut',
                type:'pie',
                data:{
                  labels:  username,
                  datasets:[{
                    label:'Facebook',
                    backgroundColor:'rgba(59,89,152,0.75)',
                    borderColor:'rgba(59,89,152,1)',
                    pointHoverBackgroundColor:'rgba(59,89,152,1)',
                    pointHoverBorderColor:'rgba(59,89,152,1)',
                    data:facebook_follower
                  },
                  {
                    label:'Twitter',
                    backgroundColor:'rgba(29,202,255,0.75)',
                    borderColor:'rgba(29,202,255,1)',
                    pointHoverBackgroundColor:'rgba(29,202,255,1)',
                    pointHoverBorderColor:'rgba(29,202,255,1)',
                    data:twitter_follower
                  },
                  {
                    label:'GooglePlus',
                    backgroundColor:'rgba(211,72,54,0.75)',
                    borderColor:'rgba(211,72,54,1)',
                    pointHoverBackgroundColor:'rgba(211,72,54,1)',
                    pointHoverBorderColor:'rgba(211,72,54,1)',
                    data:googleplus_follower
                  }
                ],
                },
                options:
                {
                  // animateRotate:false,
                  animation:{animateScale:false}
                },
            });

    },
    error:function(data)
    {
    }
  });
});
