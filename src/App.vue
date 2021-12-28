<template>
  
  <Quote/>
  <footer>created by <a href='https://devchallenges.io/portfolio/marcosddp'> MarcosDDP </a> - devChallenges.io</footer>
</template>

<script>
import Quote from './components/Quote'

export default {
  name: 'App',
  components: {
    Quote
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

footer{
margin-top:45px;
display:flex;
justify-content:center; 
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #828282;
}

footer a{
  color:#3b3b3bdc;
}

footer a:hover{
  color:#828282;
}


*{
  margin:0;
  padding:0;
}

html{
font-size:100%;
}

body{
  display:flex;
  justify-content: center;
  align-items:center;
  padding-bottom: 35px;
  
}



@media (max-width: 1100px){
  html{
  font-size:90%;
}

#random {
  background: transparent;
  border: transparent;
  position: absolute;
  /*width: 66px;*/
  /*height: 22px;*/
  left: 83.21%;
  top: 31px;

}

#random span {
  margin-left: -73px;
}


}

@media (max-width: 900px){

h1 {
  
 font-size: 2.15rem;
  margin-left: 60px;
}
   .quote{
        width:429.8px;
        border-left:5.6px solid #F7DF94;
        padding-left:69.3px;
        margin-top:80px;
        
    }

    
    .quote p{
        font-family: Raleway;
        font-size:2.25rem;
        font-weight:500;
    }

#card-author {
  
  width: 470.4px;
  height: 105.7px;


  font-size: 1.05rem;
  line-height: 19.6px;

  padding-left: 20.3px;
}





}


@media (max-width: 655px){
html{
  font-size:85%;
}
h1 {
  
font-size: 2.00rem;
  margin-left: 48px;
}
   .quote{
        width:300.86px;
        border-left:5.6px solid #F7DF94;
        padding-left:48.51px;
        margin-top:80px;
        
    }

.quote p{
        font-family: Raleway;
        font-size:1.575rem;
        font-weight:500;
    }


#card-author {
  
  width: 329.28px;
  height: 105.7px;


  font-size: 1.05rem;
  line-height: 13.72px;

  padding-left: 14.21px;
}


#random {
  
  left: 73.21%;
  top: 31px;

}

}

@media (max-width: 390px){
html{
  font-size:81.5%;
}
h1 {
  

  margin-left: 38px;
}
   .quote{
        width:285.817px;
        border-left:5.6px solid #F7DF94;
        padding-left:35.0845px;
        margin-top:80px;
        
    }

.quote p{
        font-family: Raleway;
        font-size:1.575rem;
        font-weight:500;
    }


#card-author {
  
  width: 312.816px;
  height: 105.7px;


  font-size: 1.05rem;
  line-height: 13.034px;

  padding-left: 14.21px;
}


#random {
  
  left: 73.21%;
  top: 31px;

}

}


</style>
