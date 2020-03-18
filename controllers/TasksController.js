const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.done = (req, res) => {
  let task = {};
  task.id = req.body.id;

  Task.done(task).then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  let id = req.body.id;

  Task.delete(id).then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}
