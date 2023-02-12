const data = require('../data.json');
const movieData = require('../movies.json');
const fs = require('fs');


exports.incrLikes = async(req,res) => {
    const {title} = req.body;
    if(!title){
        res.status(400).send('Please provide a title');
    }
    let flag = true;
    data.map((movie) =>{
        if(movie.title === title){
            movie.like++;
            flag = false;
        }
    })
    if(flag){
        res.status(404).send('No movie with given title found');
    }
    const movies = data.filter((movie) => {
        return movie.title === title;
    })
    fs.writeFileSync('data.json', JSON.stringify(data,null,2));
    res.status(200).json({ movies });
}


exports.decrLikes = async(req,res) => {
    const {title} = req.body;
    if(!title){
        res.status(400).send('Please provide a title');
    }
    let flag = true;
    data.map((movie) =>{
        if(movie.title === title){
            movie.like--;
            flag = false;
        }
    })
    if(flag){
        res.status(404).send('No movie with given title found');
    }
    const movies = data.filter((movie) => {
        return movie.title === title;
    })
    fs.writeFileSync('data.json', JSON.stringify(data,null,2));
    res.status(200).json({ movies });
}

exports.reset = async(req,res) => {
    fs.writeFileSync('data.json', JSON.stringify(movieData,null,2));
    res.status(200).json({ movieData });
}

exports.getAllMovies = async(req,res) => {
    const movies = data.sort((a,b) => {
        var likesA = a.like;
        var likesB = b.like;
        if (likesA < likesB) {
            return 1;
        }
        if (likesA > likesB) {
            return -1;
        }
        return 0;
    })
    res.status(200).json({ movies });
}

