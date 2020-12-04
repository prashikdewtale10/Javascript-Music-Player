        const music=document.querySelector('audio');
        const img=document.querySelector('img');
        const play=document.getElementById('play');
        const prev=document.getElementById('prev');
        const next=document.getElementById('next');
        const title=document.getElementById('title');
        const artist=document.getElementById('artist');

        let isplaying=true;
        const songs=[{
            name:"song1",
            title:'Dark Side',
            artist:"Alan Walker"
        },
        {
            name:"song2",
            title:'Boom Boom',
            artist:"Prashik Dewtale"
        },
        {
            name:"song3",
            title:'Energetic',
            artist:"Prash"
        }];
        // console.log(songs[0]);
        // console.log(songs[1]);
        // console.log(songs[2]);

        function pla(){
            isplaying=false;
            music.play();
            play.classList.replace('fa-play','fa-pause')
            img.classList.add('anime')
        };

      function pause()
        {    
            isplaying=true;
            music.pause();
            play.classList.replace('fa-pause','fa-play')
            img.classList.remove('anime')
        };

        play.addEventListener('click',function(){
            if(isplaying){
             pla();
            }else{
                pause();
            }
     });

     let songIndex=0;
      
     const loadSong =(songs)=>{
         title.textContent=songs.title;
         artist.textContent=songs.artist;
         music.src=`songs/${songs.name}.mp3`;
         img.src=`img/${songs.name}.jpg`;
         music.play();
         console.log(songs.name)

     }

     prev.addEventListener('click',previous);
     next.addEventListener('click',nextsong);

     function previous() {
         songIndex=(songIndex-1+songs.length)% songs.length;
         loadSong(songs[songIndex]);
         
     }

     function nextsong() {
        songIndex=(songIndex+1 )% songs.length;
        loadSong(songs[songIndex]);
        
        
    }