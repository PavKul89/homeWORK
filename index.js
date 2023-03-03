class TodoList {
    constructor() {
        this.tasks = [];

    }
    add(title) {
        this.tasks.push({
            title,
            id: this.tasks.length +1,
            isCompleted:false,
            priority: 0,
            date: new Date
        });
    }
    delete(id) {
        this.tasks = this.tasks.filter((item) => item.id!==id);
    }
    complete(id) {
        this.tasks = this.tasks.map((item)=> {
            if(item.id === id) {
                return {
                    ...item,
                    isCompleted: true
                };
                return item;
            }
        });
    }
    edit(task) {
        const { id, title, isCompleted } = task
        this.tasks = this.tasks.map((item)=> {
            if(item.id === id) {
                return {
                    ...item,
                    title,
                    isCompleted
                };
                return item;
            }
        });

    }
    showAllTasks() {
        if (this.tasks.lenght) {
            this.tasks.forEach ((item) => {
                console.log(item);
        });
        } else {
            console.log ('нет задач')
        }
    }

}

class listTodo extends TodoList {
    constructor(){
        super()
    }

    sortDate (date) {
        this.tasks.sort(function (a, b) {
            if (a.date > b.date) {
              return 1;
            }
            if (a.date < b.date) {
              return -1;
            }
            return 0;
          });
    }

    filterTitle(){
        let taskFilterS = tasks.filter((elem) => {
            return elem.title === "S";
          });
          
          let taskMapS = taskFilterS.map((task) => {
            return task.title;
          });
    }

    sortPriority(priority) {
        this.tasks.sort(function (a, b) {
            if (a.priority > b.priority) {
              return 1;
            }
            if (a.priority < b.priority) {
              return -1;
            }
            return 0;
          });
    }

}

