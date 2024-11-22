import axios from "axios";
import { Request, response, Response } from "express";
const STEAM_GAMENEWS_API_URL = "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?maxlength=10000000&count=5&appid="
const STEAM_APPDETAIL_API_URL = "http://store.steampowered.com/api/appdetails?appids="
const sampleAppids = ["620","413150","1118200","1794680","1145360","2420510","105600","546560","294100"]


export default async function getGameNews(req:Request,res:Response){
    let gamenews:any[] = []

   for(let i=0; i< sampleAppids.length;i++){
    let news = await getnews(sampleAppids[i])
    gamenews[i] = news;
   }

   console.log(gamenews)
    
    
    return res.status(200).json(gamenews)

    
}

async function getnews(appid:string){
    let gamename = await getAppName(appid)
    let response = await axios.get(STEAM_GAMENEWS_API_URL+appid)
    let news = response.data.appnews.newsitems.map((item:any) => ({
        title: item.title,
        url:item.url,
        author:item.author,
        feedlabel:item.feedlabel,
        date:new Date(item.date * 1000).toISOString()
    }))
       
    return {gamename,news}

}
async function getAppName(appid:string){
    let response = await axios.get(STEAM_APPDETAIL_API_URL+appid)
    return response.data[`${appid}`].data.name


}