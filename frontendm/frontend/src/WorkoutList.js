import Workout from "./Workout";
import CreateWorkout from "./CreateWorkout";

const WorkoutList = (props)=>{
    let total=0;
    const WorkoutList = props.workouts.map(workout => {
        total += workout.caloriesEx;
        return <Workout key={workout.id}
                        workout={workout}
                        fetchWorkouts={()=>props.fetchWorkouts()}
        />
    });

    return(
        <div align={'middle'} className={'block text-gray-700 text-xl font-bold mb-2'}>Workouts
            <div className='shadow-md rounded-2xl px-8 pt-6 pb-8 mb-0 bg-gray-500 text-white rounded-b-none'>
                {WorkoutList}
            </div>
            <div><CreateWorkout fetchWorkouts={()=>props.fetchWorkouts()}/></div>
            <div className='text-green-500 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 bg-gray-900 text-white rounded-t-none'>
                Total calories expended:<br /> {total}
            </div>
    </div>
    )
}
export default WorkoutList;