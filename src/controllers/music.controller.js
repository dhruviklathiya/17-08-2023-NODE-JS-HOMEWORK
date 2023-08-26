const { music_Service } = require("../services");

const create_music = async(req,res)=> {
    try {
        const reqbody = req.body;
        const music_exist = await music_Service.get_music_by_track(reqbody.music_track);
        if(music_exist){
            throw new Error("Music track from this name already exist!!!!")
        }
        const music = await music_Service.create_music(reqbody);
        if(!music){
            throw new Error("Something went wrong!!!!!!");
        }
        res.status(200).json({
            success:true,
            message:"Music track addes successfully!!!!!",
            data: reqbody
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const get_music_list = async(req,res) => {
    try {
        const music_list = await music_Service.get_music_list();
        if(!music_list){
            throw new Error("Data not found!!!!!!");
        }
        res.status(200).json({
            success:true,
            message:"Music track list dispatch successfully!!!",
            data:music_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const delete_music = async(req,res) => {
    try {
        const music_id = req.params.musicId;
        const music_exist = await music_Service.get_music_by_id(music_id);
        if(!music_exist){
          throw new Error("Music not found!!!");
        }
        await music_Service.delete_music(music_id);
        res.status(200).json({
          success:true,
          message:"Music deleted successfully!!!",
        });
      } catch (error) {
        res.status(400).json({
          success:false,
          message:error.message,
        });
      }
}
module.exports = {
    create_music,
    get_music_list,
    delete_music
}