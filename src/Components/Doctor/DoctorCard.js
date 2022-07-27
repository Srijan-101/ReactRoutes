import Card from '../Reusable/Card'
import DoctorInfo from '../Reusable/DoctorInfo';
import DoctorData  from '../../DoctorInformation/Doctor.json';
import { useState } from 'react';


const DoctorCard = () => {

    return (
        <div className='Container m-6'>
            {/* <DoctorInfo/> */}
             <div class="grid grid-cols-4 gap-4">
                 {
                    DoctorData.map((ele) => {
                           return (
                              <Card name={ele.Name} specialist={ele.Specialist}/>
                           )
                    })
                 }
            </div> 
        </div>
    )
}

export default DoctorCard;