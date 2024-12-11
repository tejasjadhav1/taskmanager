const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Complete the monthly report",
        "taskDate": "2024-12-12",
        "category": "Reporting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Update client database",
        "taskDate": "2024-12-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Task 3",
        "taskDescription": "Conduct team meeting",
        "taskDate": "2024-12-10",
        "category": "Meeting"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Prepare quarterly presentation",
        "taskDate": "2024-12-15",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Update website content",
        "taskDate": "2024-12-08",
        "category": "Web"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Conduct user feedback survey",
        "taskDate": "2024-12-14",
        "category": "Survey"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Task 2",
        "taskDescription": "Fix website bugs",
        "taskDate": "2024-12-05",
        "category": "Web"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 3",
        "taskDescription": "Finalize project plan",
        "taskDate": "2024-12-03",
        "category": "Project"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Design marketing campaign",
        "taskDate": "2024-12-18",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Task 2",
        "taskDescription": "Organize company event",
        "taskDate": "2024-12-01",
        "category": "Event"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 3",
        "taskDescription": "Write blog post",
        "taskDate": "2024-12-09",
        "category": "Content"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Analyze financial data",
        "taskDate": "2024-12-20",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Prepare sales report",
        "taskDate": "2024-12-19",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 3",
        "taskDescription": "Reconcile accounts",
        "taskDate": "2024-12-10",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 4",
        "taskDescription": "Update budget estimates",
        "taskDate": "2024-12-17",
        "category": "Finance"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const  setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));
}

export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  console.log(employees, admin);
  
  
}