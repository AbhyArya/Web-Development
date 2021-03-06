import React, {useState} from 'react'
import styles from './Register.module.css'
import Avatar from '../Step/Avatar/Avatar';
import Name from '../Step/Name/Name';
import Otp from '../Step/Otp/Otp';
import PhoneEmail from '../Step/PhoneEmail/PhoneEmail';
import UserName from '../Step/UserName/UserName';
import Password from '../Step/Password/Password';
export default function Register() {
    
    const steps={
        1:PhoneEmail,
        2:Password,
        3:Otp,
        4:Name,
        5:Avatar,
        6:UserName
    }
    const [step,setStep] = useState(1);
    const Step = steps[step];
    function increase(){
        if(step==6){

            return;
        }
        setStep(step+1);
    }
  return (
    <div className={styles.cardWrapper}>
        <Step stepIncrease ={increase} />
    </div>
  )
}