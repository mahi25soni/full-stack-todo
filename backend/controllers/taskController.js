const { Task } = require("../models/taskModel")


const addTask = async (req, res) => {
    try{
        const new_task  = await Task.create(req.body);

        res.status(200).json({
            message : "New task added!",
            data : new_task
        })

    }
    catch(err) {
        console.log(err.message)
        return res.status(501).json({
            message : "Some internal error"
        })
    }
}
const getEntireList = async (req, res) => {
    try{
        const all_tasks = await Task.find({done : false})
    
        res.status(200).json({
            message : "All of your tasks!",
            data : all_tasks
        })
    }
    catch(err) {
        console.log(err.message)
        return res.status(501).json({
            message : "Some internal error"
        })
    }
}

const markComplete = async (req, res) => {
    try{
        const task_id = req.params._id
        const updated_task = await Task.findByIdAndUpdate({_id : task_id}, {done : true}, {new : true})
    
        res.status(200).json({
            message : "Task completed!",
            data : updated_task
        })
    }
    catch(err) {
        console.log(err.message)
        return res.status(501).json({
            message : "Some internal error"
        })
    }
}
  




// const updateOneTask = (req, res) => {
//     try{
        
//     }
//     catch(err) {
//         console.log(err.message)
//         return res.status(501).json({
//             message : "Some internal error"
//         })
//     }
//     const TaskId = req.params.TaskId
//     Task.updateOne({_id : TaskId}, {$set:{title : req.body.title, description: req.body.description}}, function(err, Task){
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.json({message : "One Task have been deleted", data : Task}) 
//         }
//     })
// }

// const deleteOneTask = (req, res) => {
//     try{
        
//     }
//     catch(err) {
//         console.log(err.message)
//         return res.status(501).json({
//             message : "Some internal error"
//         })
//     }
//     const TaskId = req.params.TaskId
//     Task.deleteOne({_id : TaskId}, function(err, result){
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.json({message : "One Task have been deleted", data : result})
//         }
//     })  
// }



module.exports = {
    addTask,
    getEntireList,
    markComplete,

}