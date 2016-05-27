function createJob(id,zr,yq){
  var p = new Object();
  p.id = id;
  p.zr = zr;//array
  p.yq = yq;//array
  return p;
}

function createJobType(id,name,jobs){
  var p = new Object();
  p.name = name;
  p.id = id;
  p.jobs = jobs;//array
  return p;
}
function parseDatas(){
  var typeArray = JSON.parse(dataJson);
  return typeArray;
}
