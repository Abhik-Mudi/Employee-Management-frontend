// sample data for localStorage
const admin = {
    "id": "admin001",
    "name": "Abhik Mudi",
    "email": "admin@me.com",
    "password": "1234"
}
const employees = [
    {
        "id": "emp001",
        "name": "John Doe",
        "email": "john.doe@company.com",
        "password": "John@123",
        "tasks": [
            {
                "title": "Prepare monthly report",
                "description": "Compile all departmental data and generate monthly report.",
                "date": "2025-06-10",
                "category": "Reporting",
                "priority": "high",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client follow-up call",
                "description": "Call client for feedback on recent delivery.",
                "date": "2025-06-11",
                "category": "Communication",
                "priority": "medium",
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Update CRM records",
                "description": "Enter recent client interactions into CRM.",
                "date": "2025-06-08",
                "category": "Data Entry",
                "priority": "low",
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": "emp002",
        "name": "Sara Khan",
        "email": "sara.khan@company.com",
        "password": "Sara@456",
        "tasks": [
            {
                "title": "Design new brochure",
                "description": "Create a layout and design for summer promotion.",
                "date": "2025-06-12",
                "category": "Design",
                "priority": "high",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team meeting notes",
                "description": "Summarize notes from last week's meeting.",
                "date": "2025-06-09",
                "category": "Documentation",
                "priority": "low",
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": "emp003",
        "name": "Raj Patel",
        "email": "raj.patel@company.com",
        "password": "Raj@789",
        "tasks": [
            {
                "title": "Inventory audit",
                "description": "Check and verify stock levels in warehouse.",
                "date": "2025-06-05",
                "category": "Operations",
                "priority": "medium",
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Vendor call",
                "description": "Discuss delay in delivery with vendor.",
                "date": "2025-06-11",
                "category": "Logistics",
                "priority": "high",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update shipping details",
                "description": "Enter tracking info for outgoing shipments.",
                "date": "2025-06-12",
                "category": "Logistics",
                "priority": "medium",
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": "emp004",
        "name": "Linda Park",
        "email": "linda.park@company.com",
        "password": "Linda@321",
        "tasks": [
            {
                "title": "QA testing for v2.0",
                "description": "Perform end-to-end testing for upcoming release.",
                "date": "2025-06-10",
                "category": "QA",
                "priority": "high",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Bug verification",
                "description": "Check bug reports from user feedback.",
                "date": "2025-06-09",
                "category": "QA",
                "priority": "medium",
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Test case update",
                "description": "Revise outdated test cases in the test suite.",
                "date": "2025-06-06",
                "category": "QA",
                "priority": "low",
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Cross-browser testing",
                "description": "Ensure website works across major browsers.",
                "date": "2025-06-12",
                "category": "QA",
                "priority": "high",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": "emp005",
        "name": "David Kim",
        "email": "david.kim@company.com",
        "password": "David@654",
        "tasks": [
            {
                "title": "Fix authentication bug",
                "description": "Resolve login issue on mobile app.",
                "date": "2025-06-10",
                "category": "Development",
                "priority": "high",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code review for PR#234",
                "description": "Review and comment on latest pull request.",
                "date": "2025-06-09",
                "category": "Development",
                "priority": "medium",
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "API optimization",
                "description": "Improve response time of user APIs.",
                "date": "2025-06-08",
                "category": "Development",
                "priority": "medium",
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
]




export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin }
}