function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assist: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assist: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assist: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assist: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assist: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },       
         away: {
                teamName: 'Charlotte Hornets',
                colors: ['Turquoise', 'Purple'],
                players: {
                    'Jeff Adrien': {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assist: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2,
                    },
                    'Bismak Biyombo': {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assist: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10,
                    },
                    'DeSagna Diop': {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assist: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5,
                    },
                    'Ben Gordon': {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assist: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0,
                    },
                    'Brendan Haywood': {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assist: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12,
                    }
        }
    }
  }
  }


  function numPointsScored(name) {
    let obj = gameObject()
    let playerNameObj = {...obj['home']['players'], ...obj['away']['players']}
    let playerNameArr = Object.keys(playerNameObj)
    let match = playerNameArr.find(function(player){
        return name === player
        }
    )
    return playerNameObj[match]['shoe']
  }

  function teamColors(teamName){
    let obj = gameObject()
    if (teamName === obj.hometeamName){
        return obj.home.colors
    }
        else if (teamName === obj.away.teamName){
            return obj.away.colors
        }
    }
  
    //console.log(teamColors('Charlotte Hornets'))

    function teamNames(){
        let obj = gameObject()
        let names = []
        names.push(obj.home.teamName)
        name.push(obj.away.teamName)
        return names
    }

    // console.log(teamNames())

    function playerNumbers(teamName){
        let obj = gameObject()
        if (teamName === obj.home.teamName){
            let numbers = []
            let homePlayersObj = {...obj['home']['players']}
            let playerStats = Object.values(homePlayersObj)
            playerStats.forEach(function(el){
                numbers.push(el.number)
            })}
            else if (teamName === obj.away.teamName){
                let numbers = []
                    let awayPlayerObj = {...obj['away']['players']}
                    let playerStats = Object.values(awayPlayerObj)
                    playerStats.forEach(function(el){
                        numbers.push(el.number)
                    })
                    return numbers
      }
}  
    //console.log(playerNumbers('Charlotte Hornets'))


        function playerStats(name) {
            let ob = gameObject()
            let playerObj = {...obj['home']['players'], ...obj['away']['players']}
            let playerArr = Object.keys(playerObj)
            let match = playerArr.find(function(player){
                return name === player
            })
            return playerObj[match]
        }
    //console.log(playerStats('Brendan Haywood'))
    function bigShoeReBounds(){   
    }
    //console.log(bigShoeReBounds())
    function mostPointsScored(){
        let obj = gameObject()
        let pointsArr = []
        let playersObj = {...obj['home']['players'], ...obj['away']['players']}
        let playerStats = Object.values(playersObj)
        playerStats.forEach(function(el){
            pointsArr.push(el.points)
        })
        let sortedPointsArr = pointsArr.sort(function(a,b){
            return a - b
        })
        let mostPoints = sortedPointsArr.slice(-1).pop()
            let ans = ''
        for (const el in playersObj) {
            if (playersObj[el]['points'] === mostPoints)
                ans = el
            }
        return ans
    }
    function winningTeam(){
        let obj = gameObject()
        let homePoints = 0
        let awayPoints = 0
        let homePlayers = {...obj['home']['players']}
        let homePlayerStats = Object.values(homePlayers)
        let awayPlayers = {...obj['away']['players']}
        let awayPlayerStats = Object.values(awayPlayers)
        homePlayerStats.forEach(function(el){
            homePoints += el.points
        })
        awayPlayerStats.forEach(function(el){
            awayPoints += el.points
        })
        function winner(homePoints, awayPoints){
            if (homePoints > awayPoints){
                return obj.home.teamName
            }else{
                return obj.away.teamName
            }
        }
        let result = winner(homePoints, awayPoints)
        return result
    }
    
    //console.log(winningTeam())
    
    function playerWithLongestName(){
        let obj = gameObject()
        let playerNameObj = {...obj['home']['players'], ...obj['away']['players']}
        let playerArr = Object.keys(playerNameObj)
        let longestName = ''
        playerArr.forEach(function (word){
            if(word.length > longestName.length){
                longestName = word
            }
        })
        //console.log(longestName)
        return longestName
    } 
        
    
console.log(playerWithLongestName())

function doesLongNameStealATon(){
    let obj = gameObject()
    let stealsArr = []
    let playersObj = {...obj['home']['players'], ...obj['away']['players']}
    let playerStats = Object.values(playersObj)
    playerStats.forEach(function(el){
        stealsArr.push(el.steals)
    })
    let sortedStealsArr = stealsArr.sort(function(a,b){
        return a - b
    })
    let mostSteals = sortedStealsArr.slice(-1).pop()
        let ans = ''
    for (const el in playersObj) {
        if (playersObj[el]['steals'] === mostSteals)
            ans = el
        }
    if (ans === playerWithLongestName()){
        return true
    }else{
        return false
    }
    }
 console.log(doesLongNameStealATon())