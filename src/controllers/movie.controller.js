const { movie_Service }= require("../services")

const create_movie = async(req,res) => {
    try {
        const reqbody = req.body;
        const movie_exist = await movie_Service.get_movie_by_title(reqbody.movie_title);
        if(movie_exist){
            throw new Error("Movie by this title already exists !_!_!_!_");
        }
        const movie = await movie_Service.create_movie(reqbody);
        if(!movie){
            throw new Error("Somethingn went wrong!!!!!!!!!");
        }
        res.status(200).json({
            success:true,
            message:"Movie cretaed successfully!!!!!!!!",
            data: reqbody
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const get_movie_list = async(req,res) => {
    try {
        const movie_list = await movie_Service.get_movie_list();
        if(!movie_list){
            throw new Error("Data not found!!!!");
        }
        res.status(200).json({
            success:true,
            message:"Movie list dispatch successfully!!!!",
            data: movie_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        });
    }
}

const delete_movie = async (req,res) => {
    try {
      const movie_id = req.params.movieId;
      const movie_exist = await movie_Service.get_movie_by_id(movie_id);
      if(!movie_exist){
        throw new Error("Movie not found!!!");
      }
      await movie_Service.delete_movie(movie_id);
      res.status(200).json({
        success:true,
        message:"Movie deleted successfully!!!",
      });
    } catch (error) {
      res.status(400).json({
        success:false,
        message:error.message,
      });
    }
  }

module.exports = {
    create_movie,
    get_movie_list,
    delete_movie
}