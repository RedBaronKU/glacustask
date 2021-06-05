import React from 'react'
import {useTable} from 'react-table'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Input,Button} from '@material-ui/core'

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Employee() {
        const classes = useStyles();
        // getModalStyle is not a pure function, we roll the style only on the first render
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
        const body = (
            <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <form className="signUp">
                    <Input 
                        type="text"
                        placeholder="Name"
                        //value={username}
                        //onChange={(e)=>setUsername(e.target.value)}
                    />
                    
                    <Input type="text"
                        placeholder="Employee code"
                        //value={email}
                        //onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input type="email"
                        placeholder="Email"
                        //value={password}
                        //onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label for="dob">Birthday:</label>
                    <Input type="date"
                        id="dob"
                        //placeholder="DOB"
                        //value={password}
                        //onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label for="dob">Date of Joining:</label>
                    <Input type="date"
                        id="doj"
                        //placeholder="DOJ"
                        //value={password}
                        //onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Input type="text"
                        placeholder="Salary"
                        //value={password}
                        //onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                    </select>
                    <Button type="submit" /*onClick={signup}*/>Save</Button>
                    <Button type="submit" /*onClick={signup}*/>Close</Button>
                </form>
            
            </div>
        );

    return (
        <div>
            <button onClick={handleOpen}>Create Employee</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee Code</th>
                        <th>Email</th>
                        <th>D.O.B.</th>
                        <th>D.O.J</th>
                        <th>Salary</th>
                        <th>Role</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default Employee
