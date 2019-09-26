

class Student{

    public learn(){
        console.log("The student is learning something new");
    }

    public question(teacher: Teacher){
        teacher.answer();
    }
}

class Teacher{
    
    public teach(student: Student){
        student.learn();
    }

    public answer(){
        return console.log("The teacher is answering a question");
    }
}

let steve = new Student();

let jerry = new Teacher();

steve.question(jerry);
jerry.teach(steve);