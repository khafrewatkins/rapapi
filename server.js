const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())

let rappers = {
        'hova ': {
            'age': 51,
            'birthname': 'Shawn Corey Carter',
            'birth location': 'New York City',
            'net worth': '1.4+ Billion according to the internet',
            'artist name': 'Jay Z'
        
        },
        'cartier': {
            'age': 28,
            'birthname': 'Belcalis Marlenis Almánzar',
            'birth location': ' Washington Heights, Manhattan',
            'net worth': '30+ million according to scattered noseyness online',
            'artist name': 'Cardi B'
        },
        'riri': {
            'age': 33,
            'birthname': '	Robyn Rihanna Fenty',
            'birth location': 'Saint Michael, Barbados',
            'net worth': '600+ million probably needs updating',
            'artist name': 'Rhianna'
        
        },
        'illmatic': {
            'age': 47,
            'birthname': 'Nasir bin Olu Dara Jones',
            'birth location': 'New York City',
            'net worth': '70+ million, owns a venture capital firm, may be more',
            'artist name': 'Nas'
        
        },
        'slim ': {
            'age': 48,
            'birthname': '	Marshall Bruce Mathers III',
            'birth location': 'Saint Joseph, Missouri',
            'net worth': '210+ million, all this shit is old info, they might be nearing billions',
            'artist name': 'Eminem'
        
        },
        'drizzy': {
            'age': 34,
            'birthname': 'Aubrey Drake Graham',
            'birth location': 'Toronto, Ontario, Canada',
            'net worth': '180+ million',
            'artist name': 'Drake'
        
        },
        'left': {
            'age': 30,
            'birthname': 'Lisa Nicole Lopes',
            'birth location': 'Philadelphia, Pennsylvania',
            'net worth': '1.5+ million',
            'artist name': 'Left Eye'
        
        },
        'twodrumsntwosticks': {
            'age': 28,
            'birthname': 'Katorah Hortense Marrero',
            'birth location': 'New York City',
            'net worth': '2+ million',
            'artist name': 'Young M.A.'
            
        }
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/rappers', (req, res)=>{
    res.json(rappers)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})