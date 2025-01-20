import React from 'react';
import { useParams } from 'react-router-dom';
import { ActivityList } from '../ActivityList';



const ActivityDetail = () => {
    const { id } = useParams();
    const activity = ActivityList.find((a) => a.id === parseInt(id));


    if (!activity) {
        return <p>Activité introuvable</p>;
    }

    return (
        <div className='bg-slate-800 text-white'>
        <div className="activity-detail pt-[12rem] pb-[3rem]">
            <div className='container mx-auto px-4'>
                <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <img className='w-full' src={activity.image1} alt={'my picture'} />
                    <div>
                        <h1 className='font-extrabold text-[2rem] py-[1rem]'>{activity.title}</h1>
                        <p>{activity.text}</p>
                    </div>
                    <div>
                        <p>{activity.text1}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ActivityDetail;
