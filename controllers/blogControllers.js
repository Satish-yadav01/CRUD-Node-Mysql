const connection = require('../config/database');

//fetch all blogs /api/v1/blogs
exports.getBlogs = async(req,res)=>{
    const sql = await `select * from blog`;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            'success' : true,
            'message' : result
        })
      })
}

// create new blog => /api/v1/blog/new
exports.newBlog =async(req,res)=>{
    const {id,title,content} = req.body
    const sql = await `INSERT INTO blog (title,content) values('${title}','${content}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            'success' : true,
            'affected rows' : result.affectedRows,
            'message' : 'post created'
        })
      })
};

//fetch single blog /api/v1/:id
exports.getBlog =async (req,res)=>{
    console.log('fetching single blog')
    const sql = await `select * from blog where id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            'success' : true,
            'message' : result
        })
      })
}

//update blog /api/v1/:id/:title
exports.updateTitle= async (req,res)=>{
    const sql = await `UPDATE blog SET title = ${req.params.title} where id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            'success' : true,
            'message' : result
        })
      })
}

//delete blog /api/v1
exports.deleteBlog = async(req,res)=>{
    const sql = await `DELETE from blog where id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            'success' : true,
            'affected rows' : result.affectedRows,
            'message' : 'post deleted'
        })
      })
}