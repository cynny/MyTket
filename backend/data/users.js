import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin User',
        email: 'admin@mytket.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Sherine Thomas',
        email: 'sherine@mytket.com',
        password: bcrypt.hashSync('123456',10),        
    },    
]

export default users