axios.get('https://leonardoapi.onrender.com/songs')
.them ((res)=>{
    //guardo la lista de canciones
    const songList =res.data.songs

    const trackList = document.getElementById

    //recorriendo lista
    songList.map((song)=>{
        
      /*  const div = document.createElement('div')
        div.classList.add(song)
        div.innerHTML ='
         <img src="${song.pat.font}" 
         <h2>${song.title}</h2>
         <h4>${song.autor}</h4>'
    
    
        trackList.appendChild(div)
        console.long(songList)*/
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