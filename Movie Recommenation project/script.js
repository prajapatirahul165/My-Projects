// const form = document.querySelector('form')
// const list = document.querySelector('#list')
// const inp = document.querySelector('#inp')

// form.addEventListener('submit', (e)=>{
//      e.preventDefault()
//     //  inp.value = ""
//      // console.log(inp.value)
//      const inptext = inp.value
//      inp.value = ''
//      getmovie(inptext)
// })

//  function getmovie(searchText){
//      const url = `https://api.tvmaze.com/search/shows?q=${searchText}`
//      list.innerText = ''
//      fetch(url).
//      then((res)=>{
//           console(res.json)
//      })
//      .then((res)=>{
//           console.log(res)
//           const data = res.data
//           for(let Data of data){
//                console.log(Data.show.image.medium)
//                const image = document.createElement('img')
//                image.setAttribute('src', Data.show.image.medium)
//                image.style.margin = '12px'
//                list.append(image)
//           }
//      })
    
//  }

const form = document.querySelector('form')
const list = document.querySelector('#list')
const inp = document.querySelector('#inp')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inptext = inp.value
    inp.value = ''
    getmovie(inptext)
})

function getmovie(searchText) {
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`
    list.innerText = ''
    fetch(url)
          .then((res)=>{
               console.log(res)
              return res.json()
          })
        .then((data) => {
          console.log(data)
            for (let item of data) {
                const image = document.createElement('img')
                image.setAttribute('src', item.show.image.medium)
                image.style.margin = '12px'
                list.append(image)
            }
        })
        .catch((err) => {
            console.error('Error fetching data:', err)
        })
}