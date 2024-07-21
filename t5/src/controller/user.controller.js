const { pool } = require ('../database');

/*let user = [
    new User("Laura", "Arias", "percebes@gmail.com", "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40", 123),
    new User("María Carmen", "García", "almejasMarinera@hotmail.com", "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40", 345), 
    new User ("María Dolores", "Albert", "paella@yahoo.com", "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg?x=480&y=375&quality=40", 567)
];*/

const register = async (req, res) => {
    const { name, last_name, email, photo, password} = req.body;

    try {
        const [result] = await pool.query('INSERT INTO user (name, last_name, email, photo, password) VALUES (?, ?, ?, ?, ?)', [name, last_name, email, photo, password]);
        
        const newUser = {id_user: result.insertId, name, last_name, email, photo};
        res.status(201).json(newUser);

    }catch (error) {

        res.status(500).json({error: error.message});

    }
}


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(400).json({ message: 'email/password erroneos' });
        }

        const user = rows[0];

        if (password !== user.password) {
            return res.status(400).json({ message: 'email/password erroneos' });
        }

        const userData = {
            id_user: user.id_user,
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            photo: user.photo
        };

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { register, login };

/*
student {
    first_name:
    last_nam3:
    marks[
        date:
        marks:
        subject{
            title:
            teacher[
                first_name:
                last_name:
                groups:
            ]
        }
    ]
}
*/