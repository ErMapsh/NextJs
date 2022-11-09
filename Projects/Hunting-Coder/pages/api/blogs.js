import * as fs from 'fs';

// http://localhost:3000/api/blogs
export default async function blogs(req, res) {

  let data = await fs.promises.readdir('blogdata')

  let allblogs = [];
  for (let index = 0; index < data.length; index++) {
    // console.log(element)
    let FileData = await fs.promises.readFile(`blogdata/${data[index]}`, "utf-8")
    allblogs.push(JSON.parse(FileData))
  }
  // console.log(myFileData)
  res.status(200).json(allblogs)
}
