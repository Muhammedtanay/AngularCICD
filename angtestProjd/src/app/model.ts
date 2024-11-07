export class Model
{
user;
items:any;


constructor(){
  this.user="USER";
  this.items=[

    new TodoListItem("Wake Up",true),
    new TodoListItem("Make Up",true),
    new TodoListItem("Be Happy",true),


     new TodoListItem("Sport",true),
     new TodoListItem("to have breakfast",true),
     new TodoListItem("Go to cinema",true),
     new TodoListItem("Listen to music",false),

  ];
}
}
export class TodoListItem{
  description;
  action;
  constructor(description:string,action: boolean){
this.description=description;
this.action=action;

}

}
