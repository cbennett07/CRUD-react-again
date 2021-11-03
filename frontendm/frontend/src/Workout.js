import {Component} from "react";
import axios from "axios";
import CreateWorkout from "./CreateWorkout";

class Workout extends Component {
    constructor(props){
        super(props)
        this.state={
            workout: props.workout,
            id: props.workout.id,
            name: props.workout.name,
            type: props.workout.type,
            duration: props.workout.duration,
            caloriesEx: props.workout.caloriesEx,

        };
    }
    updateWorkouts(){
        //console.log("update workouts");
        const updatedWorkout = {
            type: this.state.type,
        };
        axios.patch("http://localhost:3001/workout/" + this.props.workout.id, updatedWorkout)
            .then(()=>this.props.fetchWorkouts())
            .catch("did not update!");
    }


    onChangeWorkoutType(e){
        this.setState({type: e.target.value},()=>{this.updateWorkouts()});
    }
    onChangeWorkoutName(e){
        this.setState({name: e.target.value},()=>{});
    }
    onChangeWorkoutDuration(e){
        this.setState({duration: e.target.value},()=>{});
    }
    onChangeWorkoutCaloriesEx(e){
        this.setState({caloriesEx: e.target.value},()=>{});
    }
    handleSubmitClicked(){
        const patchVar = {
            name: this.state.name,
            type: this.state.type,
            duration: Number.parseInt(this.state.duration),
            caloriesEx:  Number.parseInt(this.state.caloriesEx),
        }
        //console.log(patchVar);
        axios.patch("http://localhost:3001/workout/" + this.state.id, patchVar)
            .then(()=>this.props.fetchWorkouts());
    }
    handleDeleteClicked(){
        //console.log("deleted workout: " + this.state.id,()=>{})
        axios.delete("http://localhost:3001/workout/" + this.state.id, () => {})
            .then(()=>this.props.fetchWorkouts())
    }

    render() {

        return (
            <div>
                <div className={'rounded-lg p-2 border-2 shadow-lg border-gray-700 p-1 m-1 bg-white'} align={"left"}>
                    <div>
                        <label  className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor={"txt" + this.state.id} >Workout Name: </label>
                        <input className={'shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                                id={"txt" + this.state.id}
                               type={"text"} value={this.state.name}
                               onChange={(e)=>{this.onChangeWorkoutName(e)}}
                        />
                    </div>
                    <div>
                        <div>
                            <label className='block text-gray-700 text-sm font-bold mb-2'
                                   htmlFor={"sel" + this.state.id} >Workout Type: </label>
                                <select className={'shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                                        id={"sel" + this.state.id}
                                        onChange={(e) => {this.onChangeWorkoutType(e)}}
                                        value={this.state.type}>
                                    <option value="cardio"
                                    >Cardio</option>
                                    <option value="strength"
                                    >Strength</option>
                                    {this.state.type}
                                </select>
                        </div>
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'
                               htmlFor={"txtDur" + this.state.id} >Duration (in min): </label>
                        <input className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                                size="5"
                               id={"txtDur" + this.state.id}
                                type={"text"}
                                value={this.state.duration}
                                onChange={(e)=>{this.onChangeWorkoutDuration(e)}}

                    /></div>
                    <div><label className='block text-gray-700 text-sm font-bold mb-2'
                                    htmlFor={"txtCal" + this.state.id} >Calories Expended: </label>
                        <input  className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                                size="5"
                                id={"txtCal" + this.state.id}
                                type={"text"}
                                value={this.state.caloriesEx}
                                onChange={(e)=>{this.onChangeWorkoutCaloriesEx(e)}}

                    /></div>
                    <div className="m-2">
                        <button onClick={()=>(this.handleSubmitClicked())}
                                className={'bg-blue-500 rounded hover:bg-blue-700 text-white w-20 shadow-md p-1'}
                        >Update</button>

                    </div>
                    <div className="m-2">
                        <button onClick={()=>(this.handleDeleteClicked())}
                                className={'bg-blue-500 rounded hover:bg-blue-700 text-white w-20 shadow-md p-1'}
                        >Delete</button>

                    </div>
                </div>

            </div>
        )
    }
}

export default Workout;