import React from 'react'

export const Email = () => {
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
                    <input 
                        type="email"
                        placeholder="Name"
                        //value={username}
                        //onChange={(e)=>setUsername(e.target.value)}
                    />
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
                        <th>Serial No.</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
        
    )
}
