import {Component} from "react";
import axios from "axios";

class CreateWorkout extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            type:'cardio',
            duration:0,
            caloriesEx:0

        }
    }


    onChangeWorkoutType(e)
    {
        this.setState({type: e.target.value}, () => {});
    }
    onChangeWorkoutName(e)
    {
        this.setState({name: e.target.value}, () => {});
    }
    onChangeWorkoutDuration(e)
    {
        this.setState({duration: e.target.value}, () => {});
    }
    onChangeWorkoutCaloriesEx(e)
    {
        this.setState({caloriesEx: e.target.value}, () => {});
    }
    handleSubmitClicked()
    {
        const postVar = {
            name: this.state.name,
            type: this.state.type,
            duration: Number.parseInt(this.state.duration),
            caloriesEx: Number.parseInt(this.state.caloriesEx),
        }
        const emptyVar = {
            name: '',
            type: '',
            duration: '',
            caloriesEx: ''
        }
        //console.log(postVar);
        axios.post("http://localhost:3001/workout/", postVar)
            .then(() => this.props.fetchWorkouts())
            .then(this.setState(emptyVar));
    }


    render() {
        return (
            <div className={'rounded-lg p-2 border-2 shadow-lg border-gray-700 p-1 m-1 bg-white'} align={"left"}>
                <div className={"block text-gray-700 text-l font-bold mb-2 italic"}>Add a new Workout<br/> <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2'
                           htmlFor={"txtName"}>Workout Name: </label>
                    <input
                        className={'shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                        id={"txtName"}
                        type={"text"}
                        value={this.state.name}
                        onChange={(e) => {
                            this.onChangeWorkoutName(e)
                        }}
                    />
                </div>
                <div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'
                               htmlFor={"selType"}>Workout Type: </label>
                        <select
                            className={'shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                            id={"selType"}
                            value={this.state.type}
                            onChange={(e) => {
                                this.onChangeWorkoutType(e)
                            }}>
                            <option value="cardio"
                            >Cardio
                            </option>
                            <option value="strength"
                            >Strength
                            </option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className='block text-gray-700 text-sm font-bold mb-2'
                           htmlFor={"txtDuration"}>Duration (in min): </label>
                    <input
                        className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                        size="5"
                        id={"txtDuration"}
                        type={"text"}
                        value={this.state.duration}
                        onChange={(e) => {
                            this.onChangeWorkoutDuration(e)
                        }}

                    /></div>
                <div><label className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor={"txtCalories"}>Calories Expended: </label>
                    <input
                        className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                        size="5"
                        id={"txtCalories"}
                        type={"text"}
                        value={this.state.caloriesEx}
                        onChange={(e) => {
                            this.onChangeWorkoutCaloriesEx(e)
                        }}

                    /></div>
                <div className="m-2">
                    <button onClick={() => (this.handleSubmitClicked())}
                            className={'bg-blue-500 rounded hover:bg-blue-700 text-white w-20 shadow-md p-1'}
                    >Submit
                    </button>

                </div>

            </div>


        )


    }
}

export default CreateWorkout;