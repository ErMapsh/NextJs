import React from 'react'
import * as fs from 'fs';

// http://localhost:3000/api/getblog?slug=how-to-learn-js.json
export default async function getblog(req, res) {
  const data = await fs.promises.readFile(`blogdata/${req.query.slug}`,"utf-8", (err, data)=>{
    // if(err){
    //   res.status(500).json({error: "No such blog found"})
    // }
    console.log("data cummming", data)
  })
  // console.log(JSON.parse(data))
  res.status(200).json(JSON.parse(data))
}
