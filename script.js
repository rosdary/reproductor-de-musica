axios.get('https://leonardoapi.onrender.com/songs')
.then((res)=>{
    //guardo la lista de canciones
    const songList = res.data.songs

    const trackList = document.getElementById('track-list')

    //recorriendo lista
    songList.map((song)=>{
        
        const div = document.createElement('div')
        div.classList.add('songs')
        div.innerHTML =`
            <img src="${song.path.front}">
            <h2>${song.title}</h2>
            <h4>${song.author}</h4>
        `    
      div.addEventListener('click',()=>{
        //lo q ya escribi aqui sucede cuando pase el evento
        document.getElementById('portada').setAttribute('src',
            song.path.front)

        //alert(song.title aletra para ver si esta funcionando
       
        document.getElementById('titulo').innerHTML = song.title

        document.getElementById('autor').innerHTML = song.author
        const audio = document.getElementById('audio')
        audio.setAttribute('src', song.path.audio)
        document.getElementById('play').addEventListener('click',()=>{
            if(audio.paused){
                audio.play()
            }else{
                audio.pause()
            }
        })

    })

   
        trackList.appendChild(div)
    })
   
})

const tipoNumber = 2024
const tipoString = 'instituto alfa carabobo'
const tipoBoolean =false

const tipoUndefined = undefined
const tipoNull = null
const tipoArray = [
    'Leonardo',
    'Angel',
    'jesus',
    'Grecia',
    'Lineth',
    'Rosdary',
    'Carlos',
]

const tipoObjeto = {
    raza: 'kacri',
    edad: 15,
    dueño: 'Carlos',
    hambre: false,
}

const delivery = (song)=> {
    //el codigo va aqui
    document.write(song)

    return song
}