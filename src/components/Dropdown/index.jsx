import React, { useState } from 'react';
import styles from './dropdown.module.css';
import { DownArrow } from '../../assets/images';

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const { title, body } = props;

    const handleOpen = (e) => {
        e.preventDefault();
        if (open) {
            setOpen(false);
        }
        else {
            setOpen(true);
        }
    };

    return (
        <div className={`w-100`}>
            <div className={`d-flex flex-column ${styles.question_div}`}>
                <div className={`btn-group w-100 d-flex justify-content-between`} onClick={handleOpen}>
                    <button type="button" className={`w-100 ${styles.question}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {title}
                    </button>
                    <img src={DownArrow} alt="menu" style={{ cursor: 'pointer', height: '20px'}} />
                </div>
                <div className={open ? `${styles.answer} p-1 mt-3` : 'd-none'}>
                    <div>{body}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
